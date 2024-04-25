const model = require("../models/usuarios.model.js");

module.exports.render_login = async(req,res)=>{
    const usuariologeado = 
        model. login("user","pass");
    res.render("./usuarios/login",{
        user:usuariologeado
    });
}

module.exports.do_login = async(req,res)=>{
    res.status(200).json({
        code: 200,
        msg: "Inicio de sesion correcto!"
    })
}