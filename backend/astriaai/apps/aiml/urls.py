from django.conf.urls import url
from django.urls import path, include
from rest_framework import routers

from .views import ProjectApiView, ModelApiView

projectRouter = routers.DefaultRouter()
projectRouter.register(r"", ProjectApiView, basename="project")

modelRouter = routers.DefaultRouter()
modelRouter.register(r"", ModelApiView, basename="model")

urlpatterns = [
    url(r"^projects/", include(projectRouter.urls)),
    url(r"^models/", include(modelRouter.urls))
]
