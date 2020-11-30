from rest_framework import serializers

from myfirst.apps.restaurants.models import Restaurant, Comment, Menu, Category


class RestaurantSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Restaurant
        fields = ["id", "name", "description"]


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'author_name', 'comment_text', "rating"]


class MenuSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Menu
        fields = ['id', 'dish_name', 'dish_description', "dish_price",
                  "dish_time_cook", "dish_weight"]


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "drinks", "alcoholic_drinks", "pizza",
                  "salads", "dessert", "sushi", "main_course"]
