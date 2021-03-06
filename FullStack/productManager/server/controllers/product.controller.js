const Product = require('../models/product.model');
module.exports.index = (req,res) =>{
    res.json("sup chmir");
}
module.exports.createProduct = (req,res) =>{
    Product.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err));
}
module.exports.findProduct = (req,res) => {
    Product.find()
        .then(result => res.json(result))
        .catch(err => res.json(err))
}
module.exports.getOne = (req,res) =>{
    Product.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => console.log(err))
}
module.exports.updateProduct = (req,res) =>{
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(result=> res.json(result))
        .catch(err => console.log(err))
}
module.exports.delete = (req,res) =>{
    Product.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => console.log(err))
}