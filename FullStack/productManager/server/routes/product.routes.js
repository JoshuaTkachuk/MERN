const ProductController = require('../controllers/product.controller');

module.exports = (app) =>{
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product', ProductController.findProduct);
    app.get('/api/product/:id', ProductController.getOne);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.delete);
}