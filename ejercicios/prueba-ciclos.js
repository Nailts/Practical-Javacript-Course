/* 
¿Qué es un ciclo?
Es un blique de codigo que se repite de manera especificada en elmsimo

¿Qué tipos de ciclos existen en JavaScript?
for con sus variantes y while junto con do-while

¿Qué es un ciclo infinito y por qué es un problema?
Es bloque ed codigo repetidode manera indefinida y esto puede causar un exceso
en el consumo de recursos

¿Puedo mezclar ciclos y condicionales?
Si, es posible
*/

//Incremento con while en vez de for
let contador = 0;

while (contandor < 5) {
    console.log("El valor de i es: " + contador );
    contador++;
}

//Decremento con while en vez de for


let contador2 = 10;

while (contandor2 >= 2) {
    console.log("El valor de i es: " + contador2 );
    contador2--;
}

//¿Cuanto es 2 + 2?

let respuestaUsuario = 0;

while (respuestaUsuario !== 4) {
    respuestaUsuario = prompt('¿Cual es el resultado de 2 + 2?');
    respuestaUsuario *= 1;
}


