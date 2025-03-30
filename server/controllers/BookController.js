import BookModel from "../models/BooksModel"


export const AllBooks = async (req, res) => {
    try {
        const Books = await BookModel.find({
            BookId
        })
        return res.status(201).status("fetch all books successfully",Books);
    } catch (e) {
        console.error("Internal server error")
        return res.status("500")
    }
}

export const AddBooks = async (req, res) => {
    try {
        const { BookName, BookDescription, BookPrice, BookType } = req.body;
        const newBook = await BookModel.create({
            BookName,
            BookDescription,
            BookPrice,
            BookType
        })
        return res.status("201").json("Book add successfully",newBook);
    } catch (e) {
        return res.status("500").json("Internal server error");        
    }
}