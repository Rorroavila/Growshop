from django.shortcuts import render
from django.shortcuts import render, redirect

def index(request):
    return render(request, 'index.html')

def iniciarSesion(request):
    return render(request, 'iniciar-sesion.html')

def registro(request):
    return render(request, 'registro.html')

def registrar_view(request):
    if request.method == 'post':
        nombre = request.POST['nombre']
        apaterno = request.POST['apaterno']
        amaterno = request.POST['amaterno']
        email = request.POST['email']
        numero = request.POST['numero']
        password = request.POST['password']

        return redirect('pagina_exitosa')
    return render(request, 'registro.html')