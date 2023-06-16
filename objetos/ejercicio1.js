//Crea un objeto con las propiedades: nombre, apellido, edad, email, dirección y muestra los valores de cada propiedad. (por consola).
const persona = {
    nombre: 'Ara',
    apellido: 'Vasquez',
    edad: 26,
    email: '314aracelly@gmail.com',
    direccion: 'Elm street Freddy Krueger, Renca',
    mostrarInfo: function (){
        console.log(`El nombre de la persona es${this.nombre}, el apellido es ${this.apellido}, su edad es ${this.edad}, su email ${this.email}, su dirección es ${this.direccion} `);
    }
}

persona.mostrarInfo();

const nombre1 = persona.nombre;
console.log(nombre1);

const { nombre, apellido, edad, email, direccion } = persona;

console.log(`El nombre ${nombre}, apellido ${apellido}, ${edad}, ${email}, ${direccion}`);