from django.db import models
from django.contrib.postgres.fields import JSONField

# the different states which a project can have
PROJECT_CREATED = 'PROJECT_CREATED'
PROJECT_TRAINING = 'PROJECT_TRAINING'
PROJECT_COMPLETED = 'PROJECT_COMPLETED'
PROJECT_STATUSES = (
    (PROJECT_CREATED, PROJECT_CREATED),
    (PROJECT_TRAINING, PROJECT_TRAINING),
    (PROJECT_COMPLETED, PROJECT_COMPLETED)
)
# Create your models here.
class Project(models.Model):
    """
    A project which acts as the head in the heirachy of a model or set of models
    """
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    status = models.CharField(choices=PROJECT_STATUSES, max_length=60, default=PROJECT_CREATED)

    @property
    def trained_models(self):
        return Model.objects.filter(
            project = self
        )


# The different states which a model can have
MODEL_CREATED = 'MODEL_CREATED'
MODEL_TRAINING = 'MODEL_TRAINING'
MODEL_COMPLETED = 'MODEL_COMPLETED'
MODEL_ERROR = 'MODEL_ERROR'
MODEL_STATUSES = (
    (MODEL_CREATED, MODEL_CREATED),
    (MODEL_TRAINING, MODEL_TRAINING),
    (MODEL_COMPLETED, MODEL_COMPLETED),
    (MODEL_ERROR, MODEL_ERROR)
)

# the statistics associated with a model
STATS_CLASSIFICATION = 'classification'
STATS_REGRESSION = 'regression'

STATS_TYPES = (
    (STATS_CLASSIFICATION, STATS_CLASSIFICATION),
    (STATS_REGRESSION, STATS_REGRESSION),
)

class Model(models.Model):
    """
    A representation of a model in the database 
    """
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    saved_model_path = models.CharField(max_length=200, null=True)
    message = models.CharField(max_length=200, null=True)
    status = models.CharField(choices=MODEL_STATUSES, max_length=60, default=PROJECT_CREATED)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    type = models.CharField(choices=STATS_TYPES, max_length=60, default=STATS_CLASSIFICATION)
    metrics = JSONField(null=True)

