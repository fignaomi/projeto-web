const { render } = require('express/lib/response');
const conexao = require('../../config/dbServer');

class Oleo {

    listar(res) {
        const sql = 'SELECT * FROM oleo';

        conexao.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error)
            }
            //res.status(201).json(results);
            res.render('listarOleos.ejs', { dados : results });
        });
    };
    buscaPorId(id, res){
        const sql = `SELECT * FROM oleo WHERE id = ${id}`; 
        conexao.query(sql, id, (error, result) =>{
            if(error){
                res.status(400).json(error);
            }
            res.status(201).json(result);
            
        });
    }
    alteraPorId(id, valores, res){
        const sql = `UPDATE oleo SET ? WHERE id = ${id}`;        
        conexao.query(sql, [valores,id], (error, result) =>{
            if(error){
                res.status(400).json(error);
            }
            res.status(201).json(result);
        });
    }
    remover(id, res){
        const sql = `DELETE FROM oleo WHERE id = ${id}`;

        conexao.query(sql, id, (error, results) => {
            if(error){
                res.status(400).json(error)
            }
            res.status(201).json(results)
        });
    };

    inserir(oleo,req) {
        const sql = `INSERT INTO oleo SET ?`;
        //const sql = `INSERT INTO oleo (nome, nomeCientifico, foto, descricao) VALUES ("${req.body.nome}", "${req.body.nomeCientifico}","${req.body.foto}", "${req.body.descricao}")`;

        conexao.query(sql, oleo, (res, error, results) => {
            // if(error){
            //     res.status(400).json(error)
            // }
            //     res.status(201).json(results)
           
        });

    }
}

module.exports = new Oleo; 