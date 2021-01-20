const bookController = require('../controllers/book.controller.js');
module.exports = (app) => {

    app.get('/api/books',bookController.getAllBooks);
    app.post('/api/books/create',bookController.create);
    app.put('/api/books/:id',bookController.update);

}