from datetime import datetime, timedelta
from django.http import JsonResponse
from django.shortcuts import render

from rest_framework import status, viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated

# from rest_framework.views import APIView
from .models import Model, Project
from .serializers import ProjectSerializer, ModelSerializer
from rest_framework.decorators import (
    api_view,
    permission_classes,
    authentication_classes,
    action,
)

from astriaai.jobs.main_job import scheduler
from astriaai.utilities.validation import validate_properties
from astriaai.utilities.models import create_new_model
from astriaai.utilities.models_map import MODEL_MAP

required_project_props = [
    'name', 'model_name',
    'file_link', 'target',
    "model_type"
]
# view object for a project
class ProjectApiView(viewsets.GenericViewSet):

    permission_classes = (AllowAny,)
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return None

    # action to get all the projects currently present
    @action(detail=False, methods=['get'], url_path="all")
    def get_all_projects(self, info):
        data = Project.objects.all()
        projectData = ProjectSerializer(data, many=True).data

        return JsonResponse(
                {
                    "data": projectData,
                    "message": "Succesfully retrieved all created forums",
                },
                status=status.HTTP_200_OK,
        )
    # action to create a project and train models according to it
    @action(detail=False, methods=["post"], url_path="create")
    def create_aiml_project(self, request):

        # validate the request contains some important properties
        if not validate_properties(required_project_props, request.data):
            return JsonResponse(
                {   
                    "status":"error",
                    "data": None,
                    "message": f"Please validate the properties passed in are among {required_project_props}",
                },
                status=status.HTTP_424_FAILED_DEPENDENCY,
            )
        if not validate_properties([request.data['model_name']], MODEL_MAP):
            return JsonResponse(
                {   
                    "status":"error",
                    "data": None,
                    "message": f"Please pass in a correct model name, among {MODEL_MAP.keys()}",
                },
                status=status.HTTP_424_FAILED_DEPENDENCY,
            )
        # validate the request contains some important properties

        parameters = request.data
        selected_project, created = Project.objects.get_or_create(name = parameters['name'])

        # check for projects duplicates
        # if not created:
        #     return JsonResponse(
        #         {   
        #             "status":"error",
        #             "data": None,
        #             "message": f"Aproject with this name exists already, please enter a new project name",
        #         },
        #         status = status.HTTP_400_BAD_REQUEST,
        #     )
        # check for projects duplicates
        db_model = Model.objects.create(
            name = request.data['model_name'],
            project = selected_project,
            status = 'MODEL_TRAINING',
            type = request.data['model_type']
        )

        # run training the model as a background task 
        scheduler.add_job(
            lambda : create_new_model(parameters, selected_project, db_model),
            'date',
            run_date = datetime.now() + timedelta(seconds=60)
        )
        # run training the model as a background task 
        try:
            return JsonResponse(
                {   
                    "status":"success",
                    "data": None,
                    "message": "Model has started training",
                },
                status=status.HTTP_200_OK,
            )
        except Exception as error:
            return JsonResponse({"error": error}, status=status.HTTP_400_BAD_REQUEST)



class ModelApiView(viewsets.GenericViewSet):
    permission_classes = (AllowAny,)
    serializer_class = ModelSerializer

    def get_queryset(self):
        return None

    @action(detail=False, methods=['get'], url_path='one/(?P<model_id>[^/.]+)')
    def get_all_models(self, info, model_id):
            data = Model.objects.filter(id=model_id)
            if not data:
                return JsonResponse(
                    {   
                        "status":"error",
                        "data": None,
                        "message": f"model of id {model_id} doesnt exist",
                    },
                    status=status.HTTP_424_FAILED_DEPENDENCY,
                )
            return JsonResponse(
                {   
                    "status":"success",
                    "data": ModelSerializer(data, many=True).data,
                    "message": None,
                },
                status=status.HTTP_200_OK,
            )
    
    @action(detail=False, methods=['get'], url_path='all')
    def get_all_models(self, info):
            data = Model.objects.all().order_by("-id")

            return JsonResponse(
                {   
                    "status":"success",
                    "data": ModelSerializer(data, many=True).data,
                    "message": None,
                },
                status=status.HTTP_200_OK,
            )

