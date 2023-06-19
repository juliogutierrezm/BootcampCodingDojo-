

var editProfileLink = document.getElementById('edit-profile-link');
var nombrePerfil = document.getElementById('nombre-perfil');

editProfileLink.addEventListener('click', () => {
  var nuevoNombre = prompt('Ingrese el nuevo nombre:'); // Solicita al usuario que ingrese un nuevo nombre

  if (nuevoNombre) { // Verifica si se ingresó un nuevo nombre
    nombrePerfil.innerText = nuevoNombre; // Actualiza el texto del elemento con el nuevo nombre ingresado
  }
});


var botones = document.querySelectorAll(".icon");

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    var fila = boton.closest("li");
    fila.remove();
  });
});


function subtract1(image) {
  var contador = image.closest(".card").querySelector(".badge");
  var count = parseInt(contador.innerText);
  count--;
  contador.innerText = count;
}
