const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host:"127.0.0.1",
    user:"mikey",
    password:"mikey",
    database: "test",
    connectionLimit:5
});

/*------Preguntas a responder-------
¿Qué ventajas tiene escribir el código SQL únicamente en la capa del modelo?
    Nos ayuda a reutilizar y a simplificar el codigo, pues al segmentar en capaz el codigo es facil de darle mantenimiento y de comprender su complejidad y
    de esta manera no tenemos consultas de sql repartidas a lo largo de nuestro codigo.

¿Qué es SQL injection y cómo se puede prevenir?
    El SQL injection es un tipo de ataque cibernético en una aplicación web el cual consta en insertar código SQL malicioso en las consultas SQL que se ejecutan en la base de datos. 
    Esto puede permitir que se manipule la base de datos, acceder a información confidencial, modificar datos o incluso eliminar datos.

    Esto se puede prevenir teniendo verificadores en los envios de los formularios que interactuan con la base de datos, como puede ser hacer una lista negra con
    los querys de sql para que los usuarios no puedan realizar modificaciones al discriminar las palabras reservadas.


*/

app.get('/test_db', async(request, response, next) => {
    let conn;

    try{
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM books")
        console.log(rows);
        const jsonS = JSON.stringify(rows);
        response.writeHead(200, {'Content-type':'text/html'});
        response.end(jsonS);
    }catch(e){
        console.log(e)
    }
});

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