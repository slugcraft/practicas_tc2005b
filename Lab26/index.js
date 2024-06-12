//EL juego ejs si es jugable pero hice lo que pude profe

const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
const log = console.log;

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const globalVars = require('./gameVariables.js');
const gameController = require("./controllers/game.controllers.js")
const playerController = require("./controllers/player.controllers.js")

app.get('/barco', (req,res)=>{
    res.render('main');
});

app.get('/random', (req,res) =>{
    var playerTurn = Math.random() < 0.5 ? 1 : 2;;
    return res.status(200).json({code: 200,msg:playerTurn})
})

app.get('/dice', (req,res) =>{
    console.log("Tirando moneda");
    if(globalVars.gameState == null){
        return res.status(400).json({code:400,msg:"No se puede tirar la moneda"})
    }

    if(globalVars.gameState == globalVars.PLAYING || globalVars.gameState == globalVars.ENDING){
        return res.status(400).json({code:400,msg:"El juego no esta en setting, no se tira la moneda."})
    }

    if(globalVars.playerStart != 0){
        return res.status(400).json({code:400,msg:"Ya se decidio el turno. No se puede tirar otra moneda"})
    }

    globalVars.playerStart = Math.random() < 0.5 ? 1 : 2;

    var firstMessage = "El jugador " + globalVars.playerStart + " empieza el juego."
    return res.status(200).render('main', {mensaje: firstMessage, jugador: globalVars.playerStart})
});



app.get('/game/create', gameController.game_create);
app.get('/game/resume', gameController.game_resume);
app.get('/game/status', gameController.game_status);
app.get('/game/create/:player', gameController.game_cPlayer);

app.get('/player/:playerNumber', playerController.player_resume);

app.post('/game/turn', gameController.game_turn);
  

// Iniciar el servidor
app.listen(3000, () => {
    log('Server listening to port 3000');
});