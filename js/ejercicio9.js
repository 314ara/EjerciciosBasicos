const frase = prompt("Escribe una frase y te dire cuantas A hay:");
var conteo = 0;
for (var i = 0; 1 < frase.length; i++) {
    if(frase[i].toLowerCase() === "a"){
        conteo++;
    }

}
console.log("La letra a aparece"+ conteo + "veces en la frase" + frase);

