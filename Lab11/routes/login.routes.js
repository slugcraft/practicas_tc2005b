const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/login', (request, response, next) =>{
    response.setHeader('Content-Type', 'text/html');
    const html = fs.readFileSync(path.resolve(__dirname, './../login.html'), 'utf8')
    response.write(html);
    response.end(); 
});

router.post('/login', (request, response, next) =>{
    console.log("nell");

    const login = request.body.login;
    console.log(login);
    
    const password = request.body.password;
    console.log(password);


    let cadena = login + " " + password;
        
    fs.writeFileSync('texto.txt', cadena);

    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write('{code:200, msg:"Ok POST"}');
    response.end()
});

module.exports = router;