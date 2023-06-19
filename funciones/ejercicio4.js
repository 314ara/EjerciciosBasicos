/*Crear una función sumaArreglo() que tome como parámetro un arreglo de números,
 retornar la longitud del arreglo + la suma de todos los números del arreglo.
[1,2,3,4] = 
longitud = 4 */
function sumaArreglo(arreglo) {
    var longitud = arreglo.length;
    var suma = 0;
    
    for (var i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    
    var resultado = longitud + suma;
    return resultado;
  }
  