const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ifsp',
    database: 'aroma',
});

module.exports =  conexao;
