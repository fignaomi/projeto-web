const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'database-1.chw2xg6yedfk.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'tangerino',
    database: 'aroma',
});

module.exports =  conexao;
