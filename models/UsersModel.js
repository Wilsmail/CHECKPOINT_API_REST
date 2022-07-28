const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    username : String,
    email : String,
    password : String,
    adresse : {
        state: String,
        city: String,
        street: String,
        require : true,

    },
    roles : [{type : Schema.Types.ObjectId, ref : 'Role'}],
})

exports.usersModel = mongoose.model('Users',usersSchema);
