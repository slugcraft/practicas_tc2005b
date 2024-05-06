const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

/*  ------PREGUNTAS A RESPONDER-------
¿Qué beneficios encuentras en el estilo MVC?
    La mayor ventaja que tiene el modelo vista-controlador es la segmentacion que hay en los 3 componentes, siendo que la vista separa la interfaz,
    el modelo la parte de los datos y el controlador como intermediario, todo esto nos ayuda a tener un aislamiento en el codigo que nos facilita el mantenimiento al
    igual que nos ayuda a reutilizar codigo.

¿Encuentras alguna desventaja en el estilo arquitectónico MVC?
    Puede llegar a ocurrir una sobre carga de controladores en paginas que tengan un gran manejo logico de datos, lo que puede dificultar el mantenimiento de los mismos; del
    lado contrario el MVC no resulta muy util en aplicaciones pequeñas pues puede ser inecesario y añade una complejidad mas grande al codigo.

*/
app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("Hola Mundo");
    response.end(); 
});

app.get("/test_ejs",(request,response,next)=>{
    response.render("usuarios/login");
});

const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);

/*COOKIES*/
app.get('/test_cookie', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Set-Cookie', 'mi_cookie=123');
    response.send("Hola Mundo");
    response.end(); 
});

app.get('/test_value_cookie', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send(request.cookies.mi_cookie);
    response.end(); 
});

app.get('/test_session', (request, response, next) => {
    request.session.mi_variable = "valor"
    response.setHeader('Content-Type', 'text/plain');
    response.send(request.session.mi_variable);
    response.end(); 
});

app.get('/test_session_variable', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send(request.session.mi_variable);
    response.end(); 
});

app.get('/logout', (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3002);