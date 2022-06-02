const connection = require('../../config/dbServer');
const oleoModel = require('../models/oleo');
const Joi = require("joi");

module.exports = {
    lista: function (req, res) {
        oleoModel.get(connection, function (error, result) {
            if (error) {
                res.send("Problemas com a conexão!!!");
            } else {
                res.render('oleo/home', { oleo: result });
            }
        });
    },
    insere: function (req, res) {
        res.render('oleo/insere')
    },
    salva: function (req, res) {
        const schema = Joi.object({
            nomecomum: Joi.string().min(1).max(50).required(),
            nomecientifico: Joi.string().min(1).max(50).required(),
            foto: Joi.string().max(200).required(),
            descricao: Joi.string().min(1).max(500).required()
        });

        const result = schema.validate(req.body);
        const oleo = req.body;
        if (result.error) {
            res.send(result.error.details[0].message);
        } else {
            oleoModel.create(connection, oleo, function (error) {
                if (error) {
                    res.send("Problemas com a conexão!!!");
                } else {
                    res.render('oleo/home');
                }
            });
        }
    },
    edita: function (req, res) {
        oleoModel.getId(connection, req.params.id, function (error, result) {
            res.render('oleo/edita', { oleo: result[0] })
        })
    },
    atualiza: function (req, res) {
        const id = parseInt(req.params.id)
        const oleo = req.body;
        const schema = Joi.object({
            nomecomum: Joi.string().min(1).max(50).required(),
            nomecientifico: Joi.string().min(1).max(50).required(),
            foto: Joi.string().max(200).required(),
            descricao: Joi.string().min(1).max(200).required(),
        });
        const result = schema.validate(req.body);

        if (result.error) {
            res.status(400).send(result.error.details[0].message);
        } else {
            oleoModel.update(connection, oleo, id, function (error) {
                if (error) {
                    res.send("Problemas com a conexão!!!");
                } else {
                    res.redirect("/home")
                }
            })
        }
    },
    remove: function (req, res) {
        oleoModel.delete(connection, req.params.id, function (error) {
            if (error) {
                res.send("Problemas com a conexão!!!");
            } else {
                res.redirect("/home")
            }
        })
    }
}
