//Escribe un programa que pida un número y diga si es divisible por 2(consola)
const numero = prompt("Ingrese un número:");
const esDivisiblePorDos = numero % 2 === 0;

console.log(`El número ${numero} ${esDivisiblePorDos ? 'es' : 'no es'} divisible por 2.`);
