const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});


app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.write("URL index /");
    response.end();
});

const rutasHome = require('./routes/home.routes');
app.use('/home', rutasHome);

app.get('/about', (request, response, next) => {
    response.render('about');
});

app.get('/preguntas', (request, response, next) => {
    response.render('preguntas');
});

app.get('/contact', (request, response, next) => {
    response.render('contacts');
});

const rutasLogin = require('./routes/login.routes');
app.use('/login', rutasLogin);

app.get((request, response, next) => {
    response.setHeader('Content-Type', 'html');
    response.write('<html><body><h1>code:404   msg:"PAGE NOT FOUND :(</h1></body></html>');
    response.statusCode = 404;
    response.end();
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);
