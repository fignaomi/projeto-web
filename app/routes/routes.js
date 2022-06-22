const oleoController = require('../controllers/oleo');
const userController = require('../controllers/user');


module.exports = app => {
    app.get('/', (req, res) => {
        res.render("index.ejs")
    });
    app.get('/cadastrausuario', function (req, res) {
        userController.cadastra(req,res);
    });
    app.post('/salvarusuario', (req, res) => {
        userController.salvauser(req,res);
    });
    app.get('/login', function (req, res) {
        userController.valida(req,res);
    });
    app.post('/autentica', (req, res) => {
        userController.autentica(req,res);
    });
    app.get('/oleos', (req, res) => {
        oleoController.lista(req, res);
    });
    app.get('/insereoleo', (req, res) => {
        oleoController.insere(req,res); 
    });
    app.post('/salvaoleo', (req, res) => {
        oleoController.salva(req,res);
    });
    app.get('/edita/:id', (req, res) => {
        oleoController.edita(req,res); 
    });
    app.post('/atualiza/:id', (req, res) => {
        oleoController.atualiza(req,res)
    });
    app.get("/remove/:id", (req, res) => {
        oleoController.remove(req,res)
        res.redirect('/oleos')

    });
};
