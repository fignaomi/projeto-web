const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: '1234',
    database: 'aroma',
});

module.exports =  conexao;
