const Post = require('../models/Post');

class PostController {

    async index (req,res){
        return res.send(await Post.paginate({},{
            page: req.query.page || 1,
            limit: 2,
            sort: 'createdAt',
            populate: [
                {
                    path: 'autor',
                    select: 'nome email'
                }
            ]
        }));
        //return res.send(await Post.find({}).populate('autor','nome email'));
    
    }

    async show (req,res){
        const postEncontrado = await Post.findById(req.params.postId)
        .populate('autor','nome email')
        .populate({
            path: 'comentarios',
            populate: {
                path: 'autor',
                select: 'nome email'
            }
        })
        
        if(postEncontrado){
            return res.send(postEncontrado);
        }
        return res.sendStatus(404);
    }

    async store (req,res){
        await Post.create({...req.body, autor: req.usuarioId});
        return res.sendStatus(201);
    }

    async update (req,res){
        await Post.findByIdAndUpdate(req.params.postId,req.body);
        return res.sendStatus(200);
    }

    async delete (req,res){
        await Post.findByIdAndDelete(req.params.postId);
        return res.sendStatus(200);
    }

}

module.exports = new PostController();