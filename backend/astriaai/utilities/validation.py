# a repository of utilities which will be used for the validation fo inputs and properties

def validate_properties(properties, dictionary):
    """
    A function which confirms of if all a set of keys are present in a dict
    Param:
        properties{list}: A List of properties to check for
        dictionary{Dict}: A dict in which we want to check for aforementioned properties
    Returns:
        Bool: a boolean value which indicates if all the properties passed as a list are present in the dict
    """
    return all([
        prop in dictionary
        for prop in properties
    ])