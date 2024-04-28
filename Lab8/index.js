const readline = require('node:readline');
const fileSystem = require('fs');

//-----------------------------------------------------------------------------------------------------------
console.log("1.- función que reciba un arreglo de números y devuelva su promedio.")
let array = [1, 2 , 3, 4, 5];
let suma = 0;

for(let i = 0; i<array.length; i++){
    suma = suma + parseInt(array[i]);
}

console.log(suma/array.length);
//-----------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------
console.log("2- Una función que reciba un string y escriba el string en un archivo de texto.");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Escribe lo que sea: `, cadena => {
    console.log(`Creando archivo con la cadena: ${cadena}!`);
    filesystem.writeFileSync('texto.txt', cadena);
    rl.close();
});
//-----------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------
console.log("3.- Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.");
function fibonacci(n) {
    // Casos base: Fibonacci(0) = 0, Fibonacci(1) = 1
    if (n <= 1) {
        return n;
    }
    // Llamadas recursivas para calcular Fibonacci(n-1) y Fibonacci(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

rl.question(`Escribe el numero para fibonnaci `, num => {
    console.log(`Finonacci del num ${num}: ${fibonacci(num)}`);
    rl.close();
});

//Side note: se que los readline son asyncronos al codigo entonces para que se ejecute con normalidad uno de los dos codigos que ocupan readline tienen que ser comentados 
//-----------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------
const http = require('http');
const path = require('path');

const server = http.createServer( (request, response) => {    
    response.setHeader('Content-Type', 'text/html');
    response.write(`<!DOCTYPE html>
    <html>
        <head>
            <meta lang="utf-8">
            <title>laboratorio6</title>
        </head>
        <body style="text-align: center; font-family: Arial;">
            <h1 style="color: brown;">Verificador de constrasenas</h1>
    
            <p><strong>Ingrese la contrasena</strong></p>
            <input type="text" id="password" style="size: 40px;"><br>
            <p><strong>Ingrese nuevamente la contrasena</strong></p>
            <input type="text" id="password2"><br><br>
    
            <button onclick="verificar()" id="boton" style="background-color: rgb(215, 245, 215);">Verificar password</button>
            
            <div id = "change">
    
            </div>
            <script>
            function verificar(){
                let p1 = document.getElementById("password").value;
                let p2 = document.getElementById("password2").value;
                let campo = document.getElementById("change");
            
                if(!p1 || !p2){
                    campo.innerHTML = "Porfavor, llene los campos correctamente";
                    campo.style="color: gray";
                }else if(p1 == p2){
                    campo.innerHTML = "Password igual";
                    campo.style="color:green";
                }else{
                    document.getElementById("change").innerHTML = "Password diferente, intente otra vez"
                    campo.style="color:red";
                }
                
            }
            </script>
        </body>
    </html>`);
    response.end();
    
});

server.listen(3000);
//-----------------------------------------------------------------------------------------------------------