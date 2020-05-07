from django.db import models


class Restaurant(models.Model):
    name = models.CharField("Назва ресторану", max_length=200)
    description = models.TextField("текст ресторану")

    def __str__(self):
        return self.name


class Comment(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    author_name = models.CharField("автор", max_length=50)
    comment_text = models.CharField("текст комент", max_length=300)
    rating = models.FloatField(null=True)


class Category(models.Model):
    name = models.CharField("name_category", max_length=350, null=False, default="main course")

    def __str__(self):
        return self.name


class Menu(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    dish_name = models.CharField("назва страви", max_length=100)
    dish_description = models.TextField("опис страви")
    dish_price = models.FloatField("ціна")
    dish_time_cook = models.FloatField("час приготування", null=True)
    dish_weight = models.FloatField("вага", null=True)
    category = models.ManyToManyField(Category)
