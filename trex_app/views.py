from django.shortcuts import render
#import matplotlib.pyplot as plt
#import numpy as np
from sklearn import linear_model
import json

# Create your views here.

def index(request):
    return render(request, 'trex_app/index.html')

def createmodel(request):
    print('hello world')
    print(request.POST['code'])
    print(exec(request.POST['code'])) #Pass this through JSON
    return json.dumps(exec(request.POST['code']))
