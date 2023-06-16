/*Define un objeto, que tenga dos propiedades: precio y descuento y un método neto. 
El método calculará el precio con el descuento aplicado. Mostrar por consola. Por ejemplo objeto vestido,
 precio 400 y descuento 10. El método devolverá como resultado 360 (400 - 10*400/100).*/
 const telescopio = {
    precio: 500,
    descuento: 20,
    neto: function() {
      return this.precio - (this.descuento * this.precio / 100);
    }
  };
  
  console.log(telescopio.neto());
