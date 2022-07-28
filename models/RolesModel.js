const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
    name : String,
    description : String
})

exports.rolesModel = mongoose.model('Roles',rolesSchema);
