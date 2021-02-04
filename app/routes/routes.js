const bookController = require('../controllers/book.controller.js');
const authorController = require('../controllers/author.controller.js');
module.exports = (app) => {

    // Books routes
    app.get('/api/v1/books',bookController.getAllBooks);
    app.get('/api/v1/books/:id',bookController.getBook);
    app.post('/api/v1/books',bookController.create);
    app.put('/api/v1/books/:id',bookController.update);
    app.delete('/api/v1/books/:id',bookController.delete);

    // Authors routes
    app.get('/api/v1/authors',authorController.getAllAuthors);
    app.get('/api/v1/authors/:id',authorController.getAuthor);
    app.post('/api/v1/authors',authorController.create);
    app.put('/api/v1/authors/:id',authorController.update);
    app.delete('/api/v1/authors/:id',authorController.delete);

}