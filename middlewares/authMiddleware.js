const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;
     if (!authHeader) {
        return res.status(401).json({ error: 'Token não fornecido '});
    }
    //const [, token] = authHeader.split(' ');
    const token = authHeader;
    console.log(authHeader)
    console.log('o token é')
    console.log(token)
    try {
        const tokenDecodificado = await promisify(jwt.verify)(token, authConfig.secret);
        req.usuarioId = tokenDecodificado.id;
        return next();
    } catch (err) {
        console.log(err)
        return res.status(401).json({ error: 'Token inválido' });
    }





}