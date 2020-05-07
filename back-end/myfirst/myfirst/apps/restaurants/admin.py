from django.contrib import admin

from .models import Restaurant, Comment, Menu, Category

admin.site.register(Restaurant)
admin.site.register(Comment)
admin.site.register(Menu)
admin.site.register(Category)
