const http = require('http');
const path = require('path');
const fs   = require('fs');

const server = http.createServer( (request, response) => {    

    switch(request.url){
        case "/":
            response.setHeader('Content-Type', 'text/plain');
            response.write("URL index /");
            response.end();   
            break;
        case "/login":
            if(request.method == "GET"){
                response.setHeader('Content-Type', 'text/html');
                const html = fs.readFileSync(path.resolve(__dirname, './login.html'), 'utf8')
                response.write(html);
                response.end(); 

            }else if(request.method == "POST"){
                let body = [];
                request
                .on('data', chunk => {
                    body.push(chunk);
                })
                .on('end', () => {
                    body = Buffer.concat(body).toString();
                    console.log(body)
                
                    const indice = body.split('&')[0].split('=')[1];
                    console.log(indice);
                    const imprimir = body.split('&')[1].split('=')[1];
                    console.log(imprimir);
                
                    for(var i = 1; i <= indice; i++){
                        console.log(imprimir)
                    }
                
                    response.setHeader('Content-Type', 'application/json');
                    response.statusCode = 200;
                    response.write('{code:200, msg:"Ok POST"}');
                    response.end();
                });
            }
            break;
        case "/home":
            response.setHeader('Content-Type', 'text/html');
            const html = fs.readFileSync(path.resolve(__dirname, './home.html'), 'utf8')
            response.write(html);
            response.end(); 
        case "/about":
            response.setHeader('Content-Type', 'text/html');
            const html2 = fs.readFileSync(path.resolve(__dirname, './about.html'), 'utf8')
            response.write(html2);
            response.end(); 
        break;
        default:
            response.setHeader('Content-Type', 'html');
            response.write('<html><body><h1>code:404   msg:"PAGE NOT FOUND :(</h1></body></html>');
            response.statusCode = 404;
            response.end();
        break;
    }
})

server.listen(3000);