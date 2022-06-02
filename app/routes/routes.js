const Joi = require('joi');
const oleoController = require('../controllers/Oleo');


module.exports = app => {
    app.get('/', (req, res) => {
        res.render("aroma.ejs")
    });
    app.get('/oleos', (req, res) => {
        oleoController.lista(req, res);
    });
    app.get('/insereoleo', (req, res) => {
        oleoController.insere(req,res); 
    });
    app.post('/salvaoleo', (req, res) => {
        oleoController.salva(req,res);
        //res.send("foi");
    });
    app.get('/edita/:id', (req, res) => {
        oleoController.edita(req,res); 
    });
    app.put('atualiza/:id', (req, res) => {
        oleoController.atualiza(req,res)
    });
    app.delete('/deleta/:id', (req,res) => {
        oleoController.remove(req,res)
    });
};
