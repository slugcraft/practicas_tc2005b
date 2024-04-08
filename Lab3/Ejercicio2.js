/*
    Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
    Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let respuesta = prompt("Adivina la suma de dos numeros aleatorios entre el 0 y 10");

console.time("tiempo de ejecucion");
let num1 = getRandomInt(11);
let num2 = getRandomInt(11);

if(respuesta == (num1+num2)){
    document.write(`<p>Adivinaste correctamente. Los numeros fueron: `+num1+` y `+num2+` </p><br>`)
}else{
    document.write(`<p>Fallaste. Los numeros fueron: `+num1+` y `+num2+` </p><br>`)
}
console.timeEnd("tiempo de ejecucion");