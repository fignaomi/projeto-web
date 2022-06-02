const Joi = require('joi');
const oleoController = require('../controllers/oleo');


module.exports = app => {
    app.get('/', (req, res) => {
        res.render("aroma.ejs")
    });
    app.get('/oleos', (req, res) => {
        oleoController.lista(req, res);
    });
    app.get('/insere-oleo', (req, res) => {
        oleoController.insere(req,res); 
    });
    app.post('/salva', (req, res) => {
        oleoController.salva(req,res);
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
