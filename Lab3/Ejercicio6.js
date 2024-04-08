/*
    6.-
    Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, 
    alguna problemática que hayas identificado en algún ámbito, 
    un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM, entre otros). 
    El problema debe estar descrito en un documento HTML, y la solución implementada en JavaScript, 
    utilizando al menos la creación de un objeto, el objeto además de su constructor deben tener al menos 2 métodos.
    Muestra los resultados en el documento HTML.
*/
function calculadora(num1, num2){
    this.x = num1;
    this.y = num2;

    this.suma = function(){
        let res = this.x+this.y;
        return res;
    };

    this.resta = function(){
        let res = this.x-this.y;
        return res;
    };

    this.mult = function(){
        let res = this.x*this.y;
        return res;
    };
    
    this.div = function(){
        let res = this.x/this.y;
        return res;
    }
}

let miCalculadora = new calculadora(Number(prompt("introduce num1")), Number(prompt("introduce num2")));

document.write(`Suma: ${miCalculadora.suma()}<br>`);
document.write(`Resta: ${miCalculadora.resta()}<br>`);
document.write(`Multiplicacion: ${miCalculadora.mult()}<br>`);
document.write(`Division: ${miCalculadora.div()}<br>`);
