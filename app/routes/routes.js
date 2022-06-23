const userController = require('../controllers/user');
const adminAuth = require("../middlewares/adminAuth");
const controllerOleo = require('../controllers/oleo')

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
        controllerOleo.lista(req, res);
    });
    app.get('/insereoleo',adminAuth, (req, res) => {
        controllerOleo.insere(req,res); 
    });
    app.post('/salvaoleo',adminAuth, (req, res) => {
        controllerOleo.salva(req,res);
    });
    app.get('/edita/:id',adminAuth, (req, res) => {
        controllerOleo.edita(req,res); 
    });
    app.post('/atualiza/:id',adminAuth, (req, res) => {
        controllerOleo.atualiza(req,res)
    });
    app.get("/remove/:id", adminAuth,(req, res) => {
        controllerOleo.remove(req,res)
        //res.redirect('/oleos')

    });
    app.get("/logout", (req, res) => {
        req.session.autorizado = false;
        res.redirect("/");
    })
};
