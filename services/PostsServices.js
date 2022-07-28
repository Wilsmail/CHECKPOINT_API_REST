const categoryModel = require("../models/PostsModel")

exports.create = async (req, res) =>{

    const data = new PostsModel({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        image: req.body.image,
        video: req.body.video,
        //publishdate: Date.now(),
        //category: req.body.title,
    })

  posts = await data.save();

  return req.body;
}

exports.all = async(req, res) =>{
 const data = await PostsModel.find();
 return data;
}

exports.find = async (req, res) =>{

const posts = await PostsModel.findById(req.params.id);
if(posts){
    return posts;
}
return {message: "Data not found"};
}

exports.update = async (req, res) =>{

    console.log(req.params.id, req.body)
    const posts = await PostsModel.findByIdAndUpdate(req.params.id, req.body)
    if(posts){
    return res.status(200).json(posts);
    }
    res.status(404).json({message: 'Data not found', data: posts});
}

exports.destroy = async (req, res) =>{
    
    const data = await PostsModel.findByIdAndDelete(req.params.id);
    if(data) return {message: "successful"};
    return {message: 'Data not found'};
}
