/* 
¿Que es un arrya?
Es una estructura de datos de tipo objeto

¿Que es un objeto?
Es un ente estructurado normalmente referido a objetos del mundo real que con contiene 
propiedades y tpos acorde al tipo de objeto

¿Cuándo es mejor usar objetos o arrays?
Depende de la necesidad de establecer un tipo de estructura u otro

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Si, es posible
*/

//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let array = [];

function lista (array){
    console.log(array[0]);
}

lista([1, 2, 3]);

/*Crea una función que pueda recibir cualquier array como 
parámetro e imprima todos sus elementos uno por uno 
(no se vale imprimir el array completo).*/

let herramientas = [];

function lista (herramientas){

    for (let i = 0; i < herramientas.length; i++) {
       console.log(herramientas[i]);
    }

}

lista(["martillo", "llave", "destornillador", "gato", "taladro"]);



