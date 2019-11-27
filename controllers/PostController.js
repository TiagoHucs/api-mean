const Post = require('../models/Post');

class PostController {

    async index (req,res){
        return res.send(await Post.find({}));
    }

    async show (req,res){
        const postEncontrado = await Post.findById(req.params.postId);
        if(postEncontrado){
            return res.send(postEncontrado);
        }
        return res.sendStatus(404);
    }

    async store (req,res){
        await Post.create(req.body);
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