import mongoose from "mongoose";
import { randomUUID } from "crypto";

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    BookId: {
        type: 'UUID',
        default: () => randomUUID()
    },
    BookName: {
        type: String,
        required: true
    },
    BookDescription: {
        type: String,
        required: true
    },
    BookType: {
        type: String,
        required: true
    },
    BookPrice: {
        type: Number,
        required: true
    }
});

const BookModel = mongoose.model("book", BookSchema);

export default BookModel;