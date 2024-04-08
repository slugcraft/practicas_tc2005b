/*
    3.-
    Función: contador. 
    Parámetros: Un arreglo de números. 
    Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.  
*/
function contador(array){
    let negativos=0;
    let positivos=0;
    let iguales=0;


    for(let i=0;i<array.length;i++){
        let x = array[i];
        if(x<0){
            negativos+=1;
        }else if(x>0){
            positivos+=1;
        }else{
            iguales+=1;
        }
    }

    document.write(`<p>Negativos: `+negativos+`<br>Positivos: `+positivos+`<br>Ceros: `+iguales+`<br></p>`);
}

let arreglo=[-4,3,0,-2,22,0,6,1,-8];

contador(arreglo);
