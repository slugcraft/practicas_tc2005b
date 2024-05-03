const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/home', (request, response, next) =>{
    response.render('home', {nombre: null, edad: null});
});

router.post('/home', (request, response, next) =>{
    const nombre = request.body.nombre;
    console.log(nombre);
    
    const edad = request.body.edad;
    console.log(edad);

    response.render('home', {nombre: nombre, edad: edad});
});

module.exports = router;