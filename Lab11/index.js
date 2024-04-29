const http    = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


                 

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.use(bodyParser.urlencoded({extended: false}));

app.use('/alguna-ruta', (request, response, next) => {
    console.log(request.body);
});

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});

app.listen(3000);