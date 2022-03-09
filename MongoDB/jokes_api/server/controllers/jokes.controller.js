const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req,res) =>{
    Joke.find()
        .then((allJokes) =>{
            res.json({jokes: allJokes})
        })
        .catch((err) =>{
            res.json({error: err})
        });
}
module.exports.findOneJoke =(req,res) =>{
    Joke.findOne({_id: req.params._id})
        .then(oneJoke =>{
            res.json({joke: oneJoke})
        })
        .catch((err) =>{
            res.json({error: err})
        });
}
module.exports.createJoke = (req,res) =>{
    Joke.create(req.body)
        .then(newJoke =>{
            res.json({joke: newJoke})
        })
        .catch((err) =>{
            res.json({error: err})
        });
}
module.exports.updateJoke = (req,res) =>{
    Joke.updateOne({_id: req.params._id}, req.body)
        .then(result =>{
            res.json({updatedJoke: result})
        })
        .catch((err) =>{
            res.json({error: err})
        });
}
module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(result =>{
            res.json(result)
        })
        .catch((err) =>{
            res.json({error: err})
        });
}
module.exports.deleteAll = (req,res) => {
    Joke.deleteMany({})
        .then(result => {
            res.json(result)
        })
        .catch((err) =>{
            res.json({error: err})
        });
}