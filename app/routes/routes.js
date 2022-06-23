const oleoController = require('../controllers/oleo');
const userController = require('../controllers/user');
const adminAuth = require("../middlewares/adminAuth");

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
    app.get('/oleos',adminAuth, (req, res) => {
        oleoController.lista(req, res);
    });
    app.get('/insereoleo',adminAuth, (req, res) => {
        oleoController.insere(req,res); 
    });
    app.post('/salvaoleo',adminAuth, (req, res) => {
        oleoController.salva(req,res);
    });
    app.get('/edita/:id',adminAuth, (req, res) => {
        oleoController.edita(req,res); 
    });
    app.post('/atualiza/:id',adminAuth, (req, res) => {
        oleoController.atualiza(req,res)
    });
    app.get("/remove/:id", adminAuth,(req, res) => {
        oleoController.remove(req,res)
        res.redirect('/oleos')

    });
    app.get("/logout", (req, res) => {
        req.session.autorizado = false;
        res.redirect("/");
    })
};
