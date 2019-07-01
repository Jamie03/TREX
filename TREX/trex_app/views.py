from django.shortcuts import render
#import matplotlib.pyplot as plt
#import numpy as np
from sklearn import linear_model
import json
import numpy as np
from django.http import JsonResponse
#from django.http import HttpResponse
#from django.core import serializers


# Create your views here.

def index(request):
    return render(request, 'trex_app/index.html')

def createmodel(request):
    #print('hello world')
    #print(request.POST['code'])
    _locals = locals()
    def my_exec(code):
        
        exec('global i; i = %s' % code, globals(), _locals)
        #global i
        #print(i)
        #print(_locals) #prints _locals
        #print(_locals.items()) #prints items of dictionary
    try:    
        #my_exec(request.POST['code'])
        exec('global i; i = %s' % request.POST['code'], globals(), _locals)
            #print(_locals.items())
            #print(_locals['regr'].coef_)
            #Assign Results to variables
        y_test = np.concatenate(_locals['Y_test'], axis=None).tolist()
        pred = np.concatenate(_locals['Prediction'], axis=None).tolist()
            #Coefficients
        regcoef = _locals['regr'].coef_.tolist()
            #Mean Square Error
        mse =  _locals['mean_squared_error'](_locals['Y_test'], _locals['Prediction'])
            #r2 Score        
        scoreR2 = _locals['r2_score'](_locals['Y_test'], _locals['Prediction'])


            #print results in console to check 
        print('Y_test', y_test)
        print('Prediction', pred)
        print('Reg_coef', regcoef)
        print('Mean Squared Error', mse)        
        print('scoreR2', scoreR2)

        data = { 
            'y_test': y_test,
            'pred': pred,
            'reg_coef':  regcoef,
            'mean_sq_err': mse,
            'r2_score': scoreR2,
            'executed':True
        }
    
    except Exception as e:
        print(e) 
        data ={
            'error_message': str(e),
            'executed': False
        }
    
    return JsonResponse(data)

