const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    const array = req.originalUrl.split('.');
    const extencao = array[array.length-1];
    if(extencao == 'css' || extencao == 'js'){
        return next();
    }

    if (!authHeader) {
        //console.log(req.protocol + "://" + req.get('host') + req.originalUrl);
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const tokenDecodificado = await promisify(jwt.verify)(token, authConfig.secret);
        req.usuarioId = tokenDecodificado.id;
        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido' });
    }





}