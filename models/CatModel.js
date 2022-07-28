const mongoose = require('mongoose');

const catsSchema = new mongoose.Schema({
    title : String,
    image : String,
    description : String
})

exports.catsModel = mongoose.model('Categories',catsSchema);
