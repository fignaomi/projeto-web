module.exports = {
    
    get: function (connection, callback) {
        let querysql = 'select * from oleo';
        connection.query(querysql, callback);
    },

    getId: function(connection, id, callback) {
        let querysql = `SELECT * FROM oleo WHERE id_oleo = ${id}`;
        connection.query(querysql, callback);
    },
    
    create: function (connection, oleo, callback) {
        
            querysql = `INSERT INTO oleo (nome_comum, nome_cientifico, foto, descricao) 
            VALUES ("${oleo.nome_comum}", "${oleo.nome_cientifico}", "${oleo.foto}", "${oleo.descricao}");`
            connection.query(querysql, callback);

    },
    update: function (connection, oleo,id, callback) {
        let querysql = `UPDATE oleo SET nome_comum = "${oleo.nome_comum}", nome_cientifico = "${oleo.nome_cientifico}", foto = "${oleo.foto}", descricao = "${oleo.descricao}" WHERE id_oleo = ${id}`;
        connection.query(querysql, callback);
    },
    delete: function (connection, id, callback) {
        let querysql = `DELETE FROM oleo WHERE id_oleo = ${id}`;
        connection.query(querysql, callback);
    }
}