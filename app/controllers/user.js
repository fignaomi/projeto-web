const connection = require('../../config/dbServer');
const crypto = require('crypto');
const userModel = require('../models/user');
const joi = require("joi");

module.exports = {
    cadastra: function (req, res) {
        res.render('users/cria')
    },
    salvauser: function (req, res) {

        const schema = joi.object({
            email: joi.string().email({ tlds: { allow: false } }).required(),
            password: joi.string().min(3).max(15).required(),
            confirmpassword: joi.string().min(3).max(15).required(),
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            res.send(validationResult.error.details[0].message);
        } else {
            let email = req.body.email;
            let password = req.body.password;
            let confirmPassword = req.body.confirmpassword;
            if (password != confirmPassword) {
                
                res.status(300).render('users/cria',{title:"foi"})
               

            } else {
                let passwordCrypted = crypto.createHash("md5").update(password).digest("hex");

                userModel.create(connection, email, passwordCrypted, function (error) {
                    if (error) {
                        res.send("Problemas com a conexão!!!");
                    } else {
                        res.redirect('/login');
                    }
                });
            }

        }
    },
    valida: function (req, res) {
        res.render('users/login')
    },
    autentica: function (req, res) {

        const schema = joi.object({
            email: joi.string().email({ tlds: { allow: false } }).required(),
            password: joi.string().min(3).max(15).required(),
        });
        const result = schema.validate(req.body);

        if (result.error) {
            res.send(result.error.details[0].message);
        } else {
            let email = req.body.email;
            let password = req.body.password;
            let passwordCrypted = crypto.createHash("md5").update(password).digest("hex");
            userModel.autenticar(connection, email, passwordCrypted, function (error, result) {
                if (error) {
                    console.log("Erro");
                    console.log(error);
                    console.error("usuário não autenticado");
                }
                if (result.length > 0) {
                    //console.log("Usuário logado");
                    // console.log("Resultado da query",result);
                    req.session.autorizado = true;
                    res.redirect('/oleos');
                } else {
                    console.log("Usuário ou password inexistente");
                    res.render('users/login');
                }

            });

        }
    }
}
