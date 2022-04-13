/*
En este ejercicio debes crear una función para calcular la altura 
de un triángulo isósceles.

La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.

La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
La función debe retornar la altura del triángulo.
*/

function alturaIsoseles(lado1, lado2, base){
    if (lado1 === lado2 && lado1 !== base) {
        const altura = Math.sqrt(
            (lado1*lado1)-((base*base)/4)
        );
        console.log("Es un triangulo isoseles y su altura es: "+ altura);
    }
    else {
        console.log("No es un triangulo isoseles")
    }
}

alturaIsoseles(11,11,5);
