const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://curso:curso@cluster0-3c4z3.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
});

module.exports = mongoose;