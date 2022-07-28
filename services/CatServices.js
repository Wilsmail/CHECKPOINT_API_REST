const categoryModel = require("../models/CatModel")

exports.create = async (req, res) =>{

    const data = new CatModel({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        //createdAt: Date.now()
    })

  cat = await data.save();

  return req.body;
}

exports.all = async(req, res) =>{
 const data = await CatModel.find();
 return data;
}

exports.find = async (req, res) =>{

const cat = await CatModel.findById(req.params.id);
if(cat){
    return cat;
}
return {message: "Data not found"};
}

exports.update = async (req, res) =>{

    console.log(req.params.id, req.body)
    const cat = await CatModel.findByIdAndUpdate(req.params.id, req.body)
    if(cat){
    return res.status(200).json(cat);
    }
    res.status(404).json({message: 'Data not found', data: cat});
}

exports.destroy = async (req, res) =>{
    
    const data = await CatModel.findByIdAndDelete(req.params.id);
    if(data) return {message: "successful"};
    return {message: 'Data not found'};
}
