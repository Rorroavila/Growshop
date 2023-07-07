const nombre = document.getElementById("nombre");
const apaterno = document.getElementById("apaterno");
const amaterno = document.getElementById("amaterno");
const correo = document.getElementById("email");
const celular = document.getElementById("numero");
const password = document.getElementById("password");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("nombre", "Campo no valido*");
    condicion = false;
  }
  if (apaterno.value.length < 1 || apaterno.value.trim() == "") {
    mostrarMensajeError("apaterno", "campo no valido");
    condicion = false;
  }
  if (amaterno.value.length < 1 || amaterno.value.trim() == "") {
    mostrarMensajeError("amaterno", "Campo no valido");
    condicion = false;
  }
  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("email", "Campo no valido");
    condicion = false;
  }
  if (
    celular.value.length != 9 ||
    celular.value.trim() == "" ||
    isNaN(celular.value)
  ) {
    mostrarMensajeError("numero", "Campo no valido*");
    condicion = false;
  }
  if (password.value.length < 1 || password.value.trim() == "") {
    mostrarMensajeError("password", "Campo no valido*");
    condicion = false;
  }
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "Listo !!";
}