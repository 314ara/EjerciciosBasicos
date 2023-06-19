/*Crea una función llamada numeroMayor() que toma tres números como entrada y retornar
 el número mayor de ellos, si son iguales, devolver un String «Los números son iguales».*/
 function numeroMayor(num1, num2, num3){
if(num1===num2 && num2===num3){
    return "Los números son iguales"
}else{ var mayor = Math.max(num1, num2, num3);
    return mayor; }

 }