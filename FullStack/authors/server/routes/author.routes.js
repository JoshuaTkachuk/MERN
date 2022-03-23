const AuthorController = require('../controllers/author.controller')
module.exports = (app) =>{
    app.get('/api', AuthorController.index)
    app.post('/api/author', AuthorController.createAuthor)
    app.get('/api/author' , AuthorController.getAuthor)
    app.get('/api/author/:id', AuthorController.getAuthorById)
    app.delete('/api/author/:id', AuthorController.deleteAuthor)
    app.put('/api/author/:id', AuthorController.updateAuthor)
}