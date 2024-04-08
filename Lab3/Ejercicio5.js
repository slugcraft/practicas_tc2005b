/*
    Función: inverso. 
    Parámetros: Un número. 
    Regresa: El número con sus dígitos en orden inverso.
*/

function inverso(numero){
    valor = numero.toString().split('').reverse().join('');
    return valor;
}

miNumero = 98765;

nuevo = inverso(miNumero);

document.write(`<p>Numero original: `+miNumero+`</p>`);
document.write(`<p>Numero invertido: `+nuevo+`</p>`);
