
require('./config/mongoose');
const express = require('express');

const PostRoutes = require('./routes/PostRoutes');

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
});

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