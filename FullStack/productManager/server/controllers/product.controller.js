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