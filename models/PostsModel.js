const mongoose = require('mongoose');
const {Schema} = mongoose;

const postsSchema = new mongoose.Schema({
    title : String,
    description : String,
    type : String,
    image : String,
    video : String,
    publishdate : Date,
    category : [{type : Schema.Types.ObjectId, ref : 'Category'}]
})

exports.postsModel = mongoose.model('Posts',postsSchema);
