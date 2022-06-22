const express = require('express');
// const expressSession = require('express-session');
var session = require('cookie-session');
const consign = require('consign');

const port = process.env.PORT || 3000; 
const app = express();

app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(express.static('public')) //Define em qual pasta estarão os arquivos estáticos.

app.use(session({
        secret: 'sorriu', //Segredo que pode ser qq string
        resave: false, //Regrava do lado do servidor toda vez
        saveUninitialized: false //cria uma sessão nova toda vez
    }));
    
module.exports = () =>{

    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))
    
    consign()
    .include('./app/routes')
    .into(app)
    
    

    return app;
    
};
app.listen(port, () => console.log(`servidor rodando na porta ${port}`));
