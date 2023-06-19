//Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”(pantalla)
const nombre = prompt("¿Cual es tu nombre?");
document.querySelector(".container").innerHTML =`Hola ${nombre}`;