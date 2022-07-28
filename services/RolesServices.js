const RolesModel = require ('../models/RolesModel');

exports.create = async (req, res)=>{
    const rolesModel = new RolesModel();
    rolesModel.name = req.body.name
    rolesModel.description = req.body.description

    const data = await rolesModel.save();

    return data;
}

exports.update = async (req, res)=>{
    const roleId = req.params.id;
    const 
}