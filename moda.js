//Encontrar la oda dentro una lista de numeros

function moda(lista) {
    
    /*Comvertimos el array de numeros en un obeto para poder enumerar 
    las veces que aparece cada uno*/
    const listaCount = {}
  
    lista.map(function (elemento) {
      if (listaCount[elemento]) {
        listaCount[elemento] += 1
      } else {
        listaCount[elemento] = 1
      }
    })
    
   /*
    Ya teniendo la lista de veces que aparece cada elemento en un objeto  lo 
    comvertimos nuevamente en un array que contienen otro array cuyos valores son
    en la posicion[0] el respectivo elemento y en su posicion [1] el numero de veces
    que se encuentra cada elemento enla lista incial
    */  
    const listaArray = Object.entries(listaCount).sort(function (elementoA,
        elementoB) {
        return elementoA[1] - elementoB[1]
        }
    )
  
    const moda = listaArray[listaArray.length - 1]
    console.log(moda)
}