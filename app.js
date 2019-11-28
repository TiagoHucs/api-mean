
require('./config/mongoose');
const express = require('express');
const validator = require('express-joi-validation').createValidator({passError:true});
const UsuarioValidator = require('./validators/UsuarioValidator');
const AuthValidator = require('./validators/AuthValidator');

const PostRoutes = require('./routes/PostRoutes');
const UsuarioController = require('./controllers/UsuarioController');
const AuthController = require('./controllers/AuthController');

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.post('/auth',validator.body(AuthValidator),AuthController.store);
app.post('/usuarios', validator.body(UsuarioValidator) ,UsuarioController.store);

app.use('/posts',PostRoutes);

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