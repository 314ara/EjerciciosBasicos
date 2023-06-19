/*Escriba una función con el nombre de esVocal() que tome un carácter, devuelva
True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.*/
function esVocal(caracter) {
    var vocalMinuscula = caracter.toLowerCase();
  
    if (
      vocalMinuscula === "a" ||
      vocalMinuscula === "e" ||
      vocalMinuscula === "i" ||
      vocalMinuscula === "o" ||
      vocalMinuscula === "u"
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  // Ejemplo de uso de la función
  console.log(esVocal("a")); // true
  console.log(esVocal("E")); // true
  console.log(esVocal("z")); // false
  console.log(esVocal("B")); // false