/*
    4.-
    Función: promedios. 
    Parámetros: Un arreglo de arreglos de números. 
    Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.
*/

function promedio(x){
    let resultados = [];

    for(let i=0; i<x.length; i++){
        let subarreglo = x[i];
        let contador=0;
        for(let j=0; j<subarreglo.length; j++){
            contador+=subarreglo[j];
        }
        resultados.push(contador/subarreglo.length);
        
    }

    return resultados;
}

numeros = [[1,2,5,6],[8,5,4,1]];

respuesta = promedio(numeros);

for(let i =0; i<respuesta.length; i++){
    document.write(`<p>Promedio: `+respuesta[i]+`<br></p>`);
}