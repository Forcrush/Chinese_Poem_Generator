from django.shortcuts import render

# Create your views here.
from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
import re


import poetry


class HomeView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html')

class GetData(APIView):
    def get(self, request, format=None):
        data = {}
        print(request.GET)
        # 一共八个：result1 ... result8
        for i in range(1, 9):
            data['result{}'.format(i)] = ''
        headinfo = request.GET.get('headinput', '')
        headresult = poetry.begin_gen(headinfo)
        if headresult:
            if headresult == "None":
                data['result1'] = '暂时没有灵感，让我酝酿一会...'
            else:
                headseg = [i for i in re.split('\\n', headresult) if i]
                for i in range(0, len(headseg)):
                    data['result{}'.format(i+1)] = headseg[i]
        else:
            data['error_message'] = '请输入正确的文本格式！'

        return Response(data)

