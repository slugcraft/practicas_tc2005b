const http = require('http');   
const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(`
        <!DOCTYPE html>
        <html>
            <script>
                let num;
                let array = [];
                do{
                    num = prompt("Ingresa un numero");
                   
                }while(num != "");
                
            </script>
            <body>
                <p>
                    Soy un parrafo
                </p>
            </body>
    </html>`);
    response.end();
    
});

server.listen(3000);