# a package to return the metrics based off a particular model's prediction
from sklearn import metrics

def regression_eval(y_test, y_pred):
    """
    This function outputs regression evaluation metrics such as r2_score, residual sum of squares, mean square error, 
    mean absolute error, median absolute error and explained variance score
    """
    r2_score = metrics.r2_score(y_test, y_pred)
    rsos = sum((y_test - y_pred)**2)
    mse = metrics.mean_squared_error(y_test, y_pred)
    mean_ae = metrics.mean_absolute_error(y_test, y_pred)
    median_ae = metrics.median_absolute_error(y_test, y_pred)

    return {
        "r2_score": r2_score,
        "rsos": rsos,
        "mse": mse,
        "mean_ae": mean_ae,
        "median_ae": median_ae
    }

def classification_eval(y_test, y_pred):
    '''
    This function prints out classification evaluation metrics such as accuracy, f1_score, precision, 
    recall, true negative rate, auc_roc and the receiver operating curve(roc).
    It also gives the precision-recall trade off graph and the classification report.
    
    '''

    CM = metrics.confusion_matrix(y_test, y_pred)

    TN = CM[0][0]
    FN = CM[1][0]
    TP = CM[1][1]
    FP = CM[0][1]

    accuracy = metrics.accuracy_score(y_test,y_pred)

    precision = metrics.precision_score(y_test, y_pred, average='micro')
    recall = metrics.recall_score(y_test, y_pred, average='micro')
    f1_score = metrics.f1_score(y_test,y_pred, average='micro')
    tnr = TN/(TN+FP)
    # precision_x, recall_y, _ = metrics.precision_recall_curve(y_test, y_pred)
    # roc_auc = metrics.roc_auc_score(y_test, y_pred, average='micro')

    # fpr, tpr, thresholds = metrics.roc_curve(y_test, y_pred)
    
    return {
        'true_negative': str(TN),
        'false_negative': str(FN),
        'true_positive': str(TP),
        'false_positive': str(FP),
        'accuracy': str(accuracy),
        'precision': str(precision),
        'recall': str(recall),
        'f1_score': str(f1_score),
        'tnr': str(tnr),
        # 'precision_x': precision_x,
        # 'recall_y': recall_y,
        # 'roc_auc': roc_auc,
        # 'fpr' : fpr,
        # 'tpr' : tpr,
    }
    # plt.plot(fpr, tpr, color='darkorange', label='Model Performace')
    # plt.plot([0, 1], [0, 1], color='gray', label='Random Performace')
