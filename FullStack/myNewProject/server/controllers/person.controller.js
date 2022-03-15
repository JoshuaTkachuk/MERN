const Person = require('../models/person.model');
module.exports.index = (req,res) =>{
    res.json({
        message: "hello world"
    });
}
module.exports.createPerson = (req, res) =>{
    Person.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
}
module.exports.findPeople = (req,res) => {
    Person.find()
        .then(result => res.json(result))
        .catch(err => res.json(err))
}
module.exports.getPerson = (req,res) =>{
    Person.findOne({_id:req.params.id})
        .then(result => console.log(result.data))
        .catch(err => console.log(err))
}