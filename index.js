const configExpress = require('./config/server');
const conexao = require('./config/dbServer');


conexao.connect(error => {
    if (error) {
        throw error;
    };
    app = configExpress();
    app.get("/")
});
