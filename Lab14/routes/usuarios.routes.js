const express = require('express');
const router = express.Router();
const controller=require("../controllers/usuarios.controller.js");

router.get('/test_json', (req, res)=>{
    res.status(200).json({code: 200, msg: "Ok"});
});
router.get('/login',controller.render_login);
router.post('/login', controller.do_login);
router.get('/registro', ()=>{});
router.post('/registro', ()=>{});
router.get('/obtener_usuarios', ()=>{});
router.post('/obtener_usuarios', ()=>{});
router.get('/buscar_usuario', ()=>{});
router.post('/buscar_usuario', ()=>{});
router.get('/editar_usuario', ()=>{});
router.post('/editar_usuario', ()=>{});
router.post('/eliminar_usuario', ()=>{});

module.exports = router;