/*
¿Que es una funcion?
Es un bloque de codigo establecido par arealizar una serie de procedimentos

¿Cuando me sirve una funcion en mi codigo?
Cuando se repite en numeras ocasiones un bloque de codigo

¿Cuál es la diferencia entre parámetros y argumentos de una función?
Un parametro es un variable que se le otorga a la funcion desde su implementacion
mientras que el argumento son los datos que se aplican a la vairable
anteriormente mencionada

*/
function miFuncion (name, lastName, nickname){
	
    let fullName = `${name} ${lastName}`;
	return `Mi nombre es: ${fullName}, pero prefiero que me digas ${nickname}`;
}
console.log(miFuncion('Andres', 'Corona Castillo', 'Andrew'));