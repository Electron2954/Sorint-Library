const Book = require('../models').book;
module.exports = {

    async getAllBooks(req,res) {
        try {
            const bookCollection = await Book.findAll({});
            res.status(201).send(bookCollection);
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    },

    async getBook(req, res) {
        try {
            const book = await Book.findByPk(req.params.id);
            res.status(201).send(book);
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    },

    async create(req,res) {
        try {
            const booksCollection = await Book
                .create({
                    title : req.body.title,
                    genre: req.body.genre
                });
            res.status(201).send(booksCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }

    },

    async update(req,res) {
        try{
            const booksCollection = await Book.find({
                id : req.params.id
            });
            if(booksCollection){
                const updatedBook = await Book.update({
                    title : req.body.title,
                    genre: req.body.genre
                }, {
                    where: {
                        id: req.params.id
                    }
                });
                res.status(201).send(updatedBook)
            }
            else{
                res.status(404).send("Book Not Found");
            }
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    }
}