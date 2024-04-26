const http = require('http');   
const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(`
        <!DOCTYPE html>
        <html>
            <div id ="texto">
            </div>
            
            <body>
                <p>
                    Soy un parrafo
                </p>
            </body>

            <script>
                let num;
                let array = [];
                while(num != ""){
                    num = prompt("Introduce un numero");
                    if(!isNaN(num)){
                        array.push(parseInt(num));
                    }else{
                        alert("Introduce un digito valido");
                    }
                }

                let change = document.getElementById("texto");
                
                let suma = 0;

                for(let i = 0; i < array.length-1 ; i++){

                    suma = suma + array[i];

                } 
                
                console.log(suma / (array.length-1));
                
                suma = (suma / (array.length-1));

                
                
                
                let text = document.createElement("p");

                text.textContent = suma;


                change.appendChild(text);
                
            </script>
    </html>`);
    response.end();
    
});

server.listen(3000);