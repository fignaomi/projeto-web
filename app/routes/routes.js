const Joi = require('joi');
const Oleo = require('../controllers/Oleo');

module.exports = app => {

    app.get('/', (req, res) => {
        res.render('aroma.ejs');
    });

    app.get('/oleos', (req, res) => {
        Oleo.listar(res);
    });

    app.get('/oleo/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Oleo.buscaPorId(id, res)
    });

    app.put('/oleo/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const oleo = req.body;
        const schema = Joi.object({
            nome: Joi.string().min(1).max(50).required(),
            nomeCientifico: Joi.string().min(1).max(50).required(),
            foto: Joi.string().max(200).required(),
            descricao: Joi.string().min(1).max(200).required(),

        });

        const result = schema.validate(req.body);

        if (result.error) return res.status(400).send(result.error.details[0].message);
        Oleo.alteraPorId(id, oleo, res);
    });
    
    app.post('/oleo', (req, res) => {

        const schema = Joi.object({
            nome: Joi.string().min(1).max(50).required(),
            nomeCientifico: Joi.string().min(1).max(50).required(),
            foto: Joi.string().max(200).required(),
            descricao: Joi.string().min(1).max(200).required()

        });

        const result = schema.validate(req.body);

        if (result.error) return res.status(400).send(result.error.details[0].message);
        const oleo = req.body;
        res.send(oleo);
        Oleo.inserir(oleo, res); 
        
    })

    app.delete('/oleo/:id', (req,res) => {
        const id = parseInt(req.params.id);
        Oleo.remover(id, res);
    });

};
