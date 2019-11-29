const mongoose = require('mongoose');
const Post = require('./Post');

const ComentarioSchema = new mongoose.Schema({
    texto: {
        type: String,
        required: true,
        maxlength: 500
    },
    likes: {
        type: Number,
        required: true
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId, // FK
        ref: 'Usuario',
        require: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId, // FK
        ref: 'Post',
        require: true
    },

}, {timestamps: true});

module.exports = mongoose.model('Comentario',ComentarioSchema)