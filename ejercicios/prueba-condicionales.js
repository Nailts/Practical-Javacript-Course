/*  
¿Que es un condicional?
Es una validacion de una condicion impuesta a un dato o grupo de datos las cuales 
en cuanto la condicion sea verdadera se ejecutara el argumento que se le impuso

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
Existen if/else, switch y el operador ternario.
Entre sus muchas difrencias esta el tipo de validacion de la condicion su sintaxis
si estructura y su forma de recibir la condicion.

¿Puedo combinar funciones y condicionales?
Si, es posible
*/

function suscripcion(tipoDeSuscripcion){

    if (tipoDeSuscripcion == "free") {
        console.log("Solo puedes tomar los cursos gratis");
    }
    else if (tipoDeSuscripcion == "basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    else if (tipoDeSuscripcion == "expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    else if (tipoDeSuscripcion == "expertplus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}

suscripcion("expert");
