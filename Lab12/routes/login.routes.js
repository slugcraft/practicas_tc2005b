const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/login', (request, response, next) =>{
    response.render('login');
});

router.post('/login', (request, response, next) =>{
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