const configExpress = require('./config/server');
const conexao = require('./config/dbServer');
const Tabelas = require('./config/Tabelas');

conexao.connect(error => {
    if (error) {
        throw error;
    };

    Tabelas.init(conexao);

    app = configExpress();

});
