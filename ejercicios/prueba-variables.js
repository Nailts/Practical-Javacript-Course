/*
¿Que es una variable?
Una variable es un espacio reservado en memoria donde podemos anexar distintos tipos de dato para su uso continuo 

Difrenecia entre declarar  e inicializar una variable
Declarar una variable es reservar el espacio de memoria con el nombre de dicha variable. Inicializarla se refiere a asignarle un tipo de dato

Difrenecia entre sumar numeros y concatenar strings
Sumar numeros es una operacion arimetica concatenar strings se refiere a unirlos.

¿Que operador puede sumar y concatenar?
El operador de suma permite tanto sumar como concatenar



*/

let nombre = "Andres";
let apellido = "Corona";
let edad = 25;
let usuario = "AnCorona12";
let mayorDeEdad = true;
let dineroAhorrado = 250000;
let deudas = 60000;

let nombreCompleto = nombre + " " + apellido;
let dineroReal = dineroAhorrado - deudas;

console.log(nombreCompleto);
console.log(dineroReal);