const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log('chegou no middleware')
     if (!authHeader) {
        //console.log(req.protocol + "://" + req.get('host') + req.originalUrl);
        return res.status(401).json({ error: 'Token não fornecido ' + extencao });
    }

    const [, token] = authHeader.split(' ');

    try {
        const tokenDecodificado = await promisify(jwt.verify)(token, authConfig.secret);
        req.usuarioId = tokenDecodificado.id;
        console.log('verifiquei o token')
        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido' });
    }





}