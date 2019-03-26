from django.shortcuts import render
#import matplotlib.pyplot as plt
#import numpy as np
from sklearn import linear_model
import json
from django.http import HttpResponse


# Create your views here.

def index(request):
    return render(request, 'trex_app/index.html')

def createmodel(request):
    #print('hello world')
    #print(request.POST['code'])
    def my_exec(code):
        exec('global i; i = %s' % code)
        global i
        return i

    data = my_exec(request.POST['code'])

    #print(exec(request.POST['code'])) #Pass this through JSON
    return HttpResponse(json.dumps(data), content_type='application/json')
