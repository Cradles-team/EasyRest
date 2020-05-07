from django.conf.urls import url
from django.urls import include
from rest_framework import routers

from myfirst.apps.restaurants.views import RestaurantViewSet, CommentViewSet, MenuViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register(r'restaurant', RestaurantViewSet)

router.register(r'comment', CommentViewSet)

router.register(r'menu', MenuViewSet)

router.register(r'category', CategoryViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
