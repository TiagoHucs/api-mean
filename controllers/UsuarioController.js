const Usuario = require('../models/Usuario');

class UsuarioController {

    async store (req,res) {
        const { email } = req.body;

        if(await Usuario.findOne({email})){
            return res.status(400).json({error:"email já cadastrado"});
        }
        const usuarioCadastrado = await Usuario.create(req.body);
        return res.status(201).json(usuarioCadastrado);
    }

}

module.exports = new UsuarioController();