const express = require('express');

const app = express();

const books = [
    "Mobi Dik", "Pinocchio", "The Great Gatsby", "Pride and Prejudice", "Frankenstein"
];
app.get("/books", (req, res) => {
    const filter = req.query.filter;
    return res.json({"books": books.filter(book => book.toLowerCase().includes(filter.toLowerCase()))});
})

app.listen(5000, () => {
    console.log("Server started on port 3000");
});
