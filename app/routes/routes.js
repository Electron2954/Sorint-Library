const bookController = require('../controllers/book.controller.js');
const authorController = require('../controllers/author.controller.js');
module.exports = (app) => {

    // Books routes
    app.get('/api/v1/books',bookController.getAllBooks);
    app.get('/api/v1/books/:id',bookController.getBook);
    app.post('/api/v1/books/create',bookController.create);
    app.put('/api/v1/books/:id',bookController.update);

    // Authors routes
    app.get('/api/v1/authors',authorController.getAllAuthors);
    app.post('/api/v1/authors/create',authorController.create);
    app.put('/api/v1/authors/:id',authorController.update);
}