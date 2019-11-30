
require('./config/mongoose');
const express = require('express');
const validator = require('express-joi-validation').createValidator({passError:true});
const UsuarioValidator = require('./validators/UsuarioValidator');
const AuthValidator = require('./validators/AuthValidator');

const PostRoutes = require('./routes/PostRoutes');
const ComentarioRoutes = require('./routes/ComentarioRoutes');
const UsuarioController = require('./controllers/UsuarioController');
const AuthController = require('./controllers/AuthController');

const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
app.use(express.json());

//SOLUCAO nao carregara .js .css etc...
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
    res.sendFile('public/index.html', { root: __dirname });
});

app.post('/auth',validator.body(AuthValidator),AuthController.store);
app.post('/usuarios', validator.body(UsuarioValidator) ,UsuarioController.store);

app.use(authMiddleware); //protege rotas abaixo

app.use('/posts',PostRoutes);
app.use('/comentarios',ComentarioRoutes);

app.use((err, req, res, next) => {
    if(err && err.error && err.error.isJoi){
        res.status(400).json({
            tipo: err.type,
            mensagem: err.error.toString()
        });
    } else {
        next(err);
    }
});

app.listen('3000');


