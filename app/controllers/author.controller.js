const Author = require('../models').author;
module.exports = {

    async getAllAuthors(req,res) {
        try {
            const authorCollection = await Author.findAll({});
            res.status(201).send(authorCollection);
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    },

    async create(req,res) {
        try {
            const authorsCollection = await Author
                .create({
                    name: req.body.name,
                    surname: req.body.surname,
                    birth_date: req.body.birth_date
                });
            res.status(201).send(authorsCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }

    },

    async update(req,res) {
        try{
            const authorsCollection = await Author.find({
                id : req.params.id
            });
            if(authorsCollection){
                const updatedAuthor = await Author.update({
                    name: req.body.name,
                    surname: req.body.surname,
                    birth_date: req.body.birth_date
                }, {
                    where: {
                        id: req.params.id
                    }
                });
                res.status(201).send(updatedAuthor)
            }
            else{
                res.status(404).send("Author Not Found");
            }
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    }
}