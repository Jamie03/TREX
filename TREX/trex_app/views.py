from django.shortcuts import render
#import matplotlib.pyplot as plt
#import numpy as np
from sklearn import linear_model
import json
from django.http import JsonResponse


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
        
    my_exec(request.POST['code'])
    #print(_locals.items())
    #print(_locals['regr'].coef_)
    
    #Assign Results to variables
    #Coefficients
    regcoef = _locals['regr'].coef_[0]
    #Mean Square Error
    mse =  _locals['mean_squared_error'](_locals['y_test'], _locals['y_pred'])
    #r2 Score
    scoreR2 = _locals['r2_score'](_locals['y_test'], _locals['y_pred'])


    #print results in console to check 
    print('Reg_coef', regcoef)
    print('Mean Squared Error', mse)
    print('scoreR2', scoreR2)

    data = { 
        'reg_coef':  regcoef,
        'mean_sq_err': mse,
        'r2_score': scoreR2
   }
    #print(exec(request.POST['code'])) #Pass this through JSON
    return JsonResponse(data)
