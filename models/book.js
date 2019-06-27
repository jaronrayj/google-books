import mongoose from "mongoose"
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: Array, required: true },
    description: { type: String },
    image: { type: String, default: "https://via.placeholder.com/50x50" },
    link: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
