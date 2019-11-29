const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PostSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        maxlength: 120
    },
    texto: {
        type: String,
        required: true,
        maxlength: 500
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId, // FK
        ref: 'Usuario',
        require: true
    },
    comentarios: [{
        type: mongoose.Schema.Types.ObjectId, // FK
        ref: 'Comentario',
        require: true
    }]
}, {timestamps: true});

PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Post',PostSchema)