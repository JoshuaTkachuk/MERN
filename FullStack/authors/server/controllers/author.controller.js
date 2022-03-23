const Author = require('../models/author.model')
module.exports = {
    index: (req,res) =>{
        res.json('sup chmir');
    },
    createAuthor:(req,res) =>{
        Author.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err))
    },
    getAuthor:(req,res) =>{
        Author.find()
            .then(result => res.json(result))
            .catch(err => console.log(err))
    },
    getAuthorById:(req,res) =>{
        Author.findById(req.params.id)
            .then(result=> res.json(result))
            .catch(err => console.log(err))
    },
    deleteAuthor:(req, res) =>{
        Author.deleteOne({id: req.params.id})
        .then(result => res.json(result))
        .catch(err => console.log(err))
    },
    updateAuthor:(req,res) =>{
        Author.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
    }
}