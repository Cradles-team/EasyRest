from django.http import HttpResponse
from rest_framework import viewsets

from myfirst.apps.restaurants.models import Restaurant, Comment, Menu, Category
from myfirst.apps.restaurants.serializers import RestaurantSerializer, CommentSerializer, MenuSerializer, \
    CategorySerializer


def index(request):
    return HttpResponse("Hey, guys")


def test(request):
    return HttpResponse("Test Page")


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


