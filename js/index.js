const personajesSimpsons = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucón" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
    ];

//ej1 
const personajesMenores = personajesSimpsons.filter((personaje) => personaje.edad < 18)
personajesMenores.forEach((p) => console.log(p));


/*ej2
const suma = personajesSimpsons.reduce((acumulador,valorActual) => acumulador + valorActual.edad, 0);
console.log(suma)
*/

/*ej3
const nombres = personajesSimpsons.map((personaje) => personaje.nombre)
nombres.forEach((nombre)=>console.log(nombre))
*/


console.log("--------------ejercicio 5----------------------")
const nuevosPersonajes = personajesMenores.map(({ nombre, edad, rol }) => {
    return { nombre, edad, rol: "Estudiante" }; 
});

nuevosPersonajes.forEach((p) => console.log(p));

console.log("--------------ejercicio 6----------------------")

const otrosPersonajes = [
    { nombre: "Carl", edad: 39, rol: "Amigo de Homero" },
    { nombre: "Lenny", edad: 45, rol: "Amigo de homero" },
    { nombre: "Moe", edad: 52, rol: "Amigo de Homero" },
]

const combiado = [...personajesSimpsons,...otrosPersonajes]
console.log(combiado)