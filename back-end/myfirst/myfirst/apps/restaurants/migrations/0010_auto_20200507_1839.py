# Generated by Django 3.0.5 on 2020-05-07 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0009_auto_20200502_2218'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='alcoholic_drinks',
        ),
        migrations.RemoveField(
            model_name='category',
            name='dessert',
        ),
        migrations.RemoveField(
            model_name='category',
            name='drinks',
        ),
        migrations.RemoveField(
            model_name='category',
            name='main_course',
        ),
        migrations.RemoveField(
            model_name='category',
            name='menu',
        ),
        migrations.RemoveField(
            model_name='category',
            name='pizza',
        ),
        migrations.RemoveField(
            model_name='category',
            name='restaurant',
        ),
        migrations.RemoveField(
            model_name='category',
            name='salads',
        ),
        migrations.RemoveField(
            model_name='category',
            name='sushi',
        ),
        migrations.AddField(
            model_name='category',
            name='name',
            field=models.CharField(default='main course', max_length=350, verbose_name='name_category'),
        ),
        migrations.AddField(
            model_name='menu',
            name='category',
            field=models.ManyToManyField(to='restaurants.Category'),
        ),
    ]
