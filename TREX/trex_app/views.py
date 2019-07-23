from django.shortcuts import render
#import matplotlib.pyplot as plt
#import numpy as np
from sklearn import linear_model
from sklearn.metrics import mean_squared_error, r2_score
import json
import numpy as np
from django.http import JsonResponse
import re

# Create your views here.

def index(request):
    return render(request, 'trex_app/index.html')

def createmodel(request):
    #print('hello world')
    #print(request.POST['code'])
    _locals = locals()
# def my_exec(code,i):
#     exec('global i; i = %s' % code, globals(), _locals)
#     global i
#     return i
        #print(i)
        #print(_locals) #prints _locals
        #print(_locals.items()) #prints items of dictionary


    try:    
        # my_exec(request.POST['code'])
        exec('global i; i = %s' % request.POST['code'], globals(), _locals)
        
        #print(_locals.items())
            #print(_locals['regr'].coef_)
            #Assign Results to variables
        try:
            temptest = _locals['Y_test']
            temptrain = _locals['Y_train']
            tempred = _locals['Prediction']
            tempregr = _locals['regr']
            if tempred.shape == temptrain.shape:
                tempy = temptrain
            elif tempred.shape == temptest.shape:
                tempy = temptest
        except Exception:
            tempy = 0
            tempred = 0
            tempregr = 0
        
        if tempy is not 0 and tempred is not 0 and tempregr is not 0:
            y_test = np.concatenate(tempy, axis=None).tolist()
            pred = np.concatenate(tempred, axis=None).tolist()
            regcoef = _locals['regr'].coef_.tolist()
            mse =  mean_squared_error(tempy, tempred)
            scoreR2 = r2_score(tempy, tempred)
        else:
            y_test = 0
            pred = 0
            regcoef = 0
            mse = 0
            scoreR2 = 0 



        #     #print results in console to check 
        # print('Y_test', y_test)
        # print('Prediction', pred)
        # print('Reg_coef', regcoef)
        # print('Mean Squared Error', mse)        
        # print('scoreR2', scoreR2)

        #for printing actual print outputs from the code
        regex = "print\(.*\)"
        queue = re.findall(regex, request.POST['code'])
        output = [] 
        for q in queue:
            q = re.sub("print", "", q)
            q = re.sub('[( )]', "", q)
            q = re.sub('\'', '', q)
            print(q)
            output.append(q)

        data = {}
        #For json
        data = { 
            'y_test': y_test,
            'pred': pred,
            'reg_coef':  regcoef,
            'mean_sq_err': mse,
            'output': output,
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

