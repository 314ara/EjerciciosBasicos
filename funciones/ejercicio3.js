/*Crea una función llamada generar_caracteres() que tome como parámetro
 un número entero (n) y un carácter, retornar el carácter multiplicado por n.
  Por ejemplo, generar_caracteres(5,x), debería retornar “String” «xxxxx»*/
  function generar_caracteres(n, caracter){
    var resultado = "";
    for (var i = 0; i < n; i++) {
      resultado += caracter;
    }
    return resultado;
  }
  
  // Ejemplo de uso de la función
  console.log(generar_caracteres(8, "x")); // Retorna "xxxxxxxx"
  console.log(generar_caracteres(4, "*")); // Retorna "****"
  console.log(generar_caracteres(0, "a")); // Retorna ""


  