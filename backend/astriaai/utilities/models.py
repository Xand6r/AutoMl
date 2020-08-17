# a repository which contains utilities for our models
import os
import json
import pickle
import datetime
from pandas import read_csv
from django.conf import settings
from sklearn.model_selection import train_test_split
from datetime import timedelta, datetime

from astriaai.apps.aiml.models import Model
from astriaai.utilities.models_map import MODEL_MAP

from astriaai.model_package.metrics import  classification_eval, regression_eval


# dummy section
from sklearn.datasets import load_iris
# dummy section


def save_model(ml_model, model_name, db_model):
    """
    A function to save the model to a pickle file
    Parameters:
        ml_model: The sklearn object of the model
        model_name:  The name of the object
        db_model: A django.models.Model object of the model to be saved
    """
    # generate the file name
    model_filename = f'{model_name}_{datetime.now()}.pkl'
    path_to_model_file = os.path.join(settings.BASE_DIR, 'saved_models', model_filename)
    # generate the file name

    # write to the filename
    with open(path_to_model_file, mode='wb') as model_file:
        pickle.dump(ml_model, model_file)
    # write to the filename

    # add the new characteristics to the db
    db_model.status = 'MODEL_COMPLETED'
    db_model.saved_model_path = model_filename
    db_model.save()
    # add the new characteristics to the db

def retrieve_dataframe_from_url(url):
    """
    retrieve a csv data and return it as a pandas dataframe
    Param:
        url: the url location of where the data is stored
    Returns:
        df{DataFrame}: returns a dataframe containing the csv data in the link
    """
    df = read_csv(url)
    return df

def save_metrics(model_type, actual_value, models_prediction, db_model):
    """
    save the metrics of a model
    """
    if model_type == "classification":
        metrics = classification_eval(actual_value, actual_value)
    elif model_type == "regression":
        metrics = regressioneval(actual_value, actual_value)
    else:
        metrics = {}
    # json_metrics = json.dumps(metrics)

    db_model.metrics = metrics
    db_model.save()
    


def create_new_model(parameters, project, db_model):
    """
    The root model which is called to create a model
    Param:
        parameters{Dict}: A dictionary which contains the parameters which we would use in determinig the model to build
        project{Model}: A model object which can contains the properties of the project this model belongs to
    """
    # get and create the model based on the name passed in
    model_name = parameters['model_name']
    file_link = parameters['file_link']
    target_variable = parameters['target']
    model_type = parameters['model_type']
    

    # create the models representation in the db
    # db_model = Model.objects.create(
    #     name = model_name,
    #     project = project,
    #     status = 'MODEL_TRAINING',
    #     type = model_type
    # )
    # get and create the model based on the name passed in

    # get the specific model from the passed in name
    ml_model = MODEL_MAP[model_name]
    # get the specific model from the passed in name

    
    # try:
    # retrieve the dataset from the filelink
    dataset = retrieve_dataframe_from_url(file_link)
    # retrieve the dataset from the filelink

    # extract the target and train variable
    X = dataset.drop(target_variable,1)
    y = dataset[target_variable]
    # extract the target and train variable

    # train and save the model
    # temp
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42) 
    # temp
    ml_model = ml_model(random_state=0, multi_class="auto", solver="lbfgs").fit(X_train, y_train)
    # temp
    models_prediction = ml_model.predict(X_test)
    actual_value = y_test
    # temp
    
    save_model(ml_model, model_name, db_model)
    save_metrics(model_type, actual_value, models_prediction, db_model)
    # train and save the model
    # except:
    #     # if there was an error indicate
    #     db_model.status = 'MODEL_ERROR'
    #     db_model.save()
        # if there was an error indicate



    

    
    