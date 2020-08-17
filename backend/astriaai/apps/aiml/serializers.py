from django.shortcuts import render

from rest_framework import serializers

from .models import Project, Model


class ProjectSerializer(serializers.ModelSerializer):
    models = serializers.SerializerMethodField('trained_models')

    def trained_models(self, obj):
        serialisedModels = ModelSerializer(obj.trained_models, many=True).data
        return serialisedModels

    class Meta:
        model = Project
        fields = "__all__"


class ModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Model
        fields = "__all__"

