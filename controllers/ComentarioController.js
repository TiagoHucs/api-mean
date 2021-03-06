const Comentario = require('../models/Comentario');
const Post = require('../models/Post');

class ComentarioController {

    async store (req,res){
        const comentarioCadastrado = await Comentario.create({
            ...req.body,
            likes: 0,
            autor: req.usuarioId,
            post: req.params.postId
        });

        const post = await Post.findById(req.params.postId);
        post.comentarios.push(comentarioCadastrado.id);
        await post.save();

        return res.sendStatus(201);
    }

    async like (req,res){
        await Comentario.findByIdAndUpdate(req.params.comentarioId,{
            $inc : {
                likes: 1
            }
        });
        return res.send();
    }

}

module.exports = new ComentarioController();