from django.contrib import admin
from django.urls import path
from Growshop.views import index
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('index/', index),
    path('', views.index, name='index'),
    path('iniciar-sesion/', views.iniciarSesion, name='iniciarSesion'),
    path('registro/', views.registro, name='registro'),
]
