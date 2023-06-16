/*Crear un objeto que se usa para guardar información sobre las calificaciones de un alumno.
 El curso contiene tres materias: Inglés, programación y HTM, yel objeto contendrá el nombre del alumno y la calificación 
 en cada una de ellas. El script imprimirá el nombre y la media(promedio) de sus calificaciones.
 Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programación: 8,
  HTML: 7. Sacará Nota media de Juan 8*/
  const alumno = {
    nombre: 'Celula',
    edad: 7,
    materia : {
        ingles: 7,
        programacion: 5,
        html: 6,

    },
    promedioNotas: function (){
        const promedio = ((this.materia.ingles + this.materia.programacion + this.materia.html) / 3);
        console.log(`El promedio de la alumna ${this.nombre} es ${promedio}`);

    }
}

alumno.promedioNotas();