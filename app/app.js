const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const bookRoutes = require("./routes/BookRoutes")
// import bookRoutes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

require('./routes/routes.js')(app);

const port = process.env.PORT || 8000;

// app.use('/api/v1/books', bookRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to this API.'
}));

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});

// export default app;



// const Pool = require("pg").Pool;
// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "SORINT_LIBRARY",
//     password: "admin",
//     port: 5432
// });
//
// // Add new Book to BOOK table
// app.post("/api/v1/books", (req, res) => {
//     const { title, genre } = req.body;
//
//     pool.query(
//         'INSERT INTO "BOOK" ("TITLE", "GENRE") VALUES ($1, $2)',
//         [title, genre],
//         (error, results) => {
//             if (error) {
//                 throw error;
//             }
//
//             res.sendStatus(201);
//         }
//     );
// });
//
// // Read Books from BOOK table
// app.get("/api/v1/books", (req, res) => {
//     pool.query(
//         'SELECT "ID", "TITLE", "GENRE" FROM "BOOK"',
//         [],
//         (error, results) => {
//             if (error) {
//                 throw error;
//             }
//
//             res.status(200).json(results.rows);
//         }
//     );
// });
//
// // Get a single book from BOOK table
// app.get("/api/v1/books/:id", (req, res) => {
//     const { id } = req.params;
//
//     pool.query(
//         'SELECT "ID", "TITLE", "GENRE" FROM "BOOK" WHERE "ID" = $1',
//         [id],
//         (error, results) => {
//             if (error) {
//                 throw error;
//             }
//
//             res.status(200).json(results.rows);
//         }
//     );
// });
//
// // Update a book from BOOK table
// app.put("/api/v1/books/:id", (req, res) => {
//     const { id } = req.params;
//     const { title, genre } = req.body;
//
//     pool.query(
//         'UPDATE "BOOK" SET "TITLE" = $1, "GENRE" = $2 WHERE "ID" = $3',
//         [title, genre, id],
//         (error, results) => {
//             if (error) {
//                 throw error;
//             }
//
//             res.sendStatus(200);
//         }
//     );
// });