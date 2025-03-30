import BookModel from "../models/BooksModel.js"


export const AllBooks = async (_, res) => {
    try {
        const Books = await BookModel.find();
        return res.status(201).json({ message:"fetch all books successfully", Books });
    } catch (e) {
        console.error("Internal server error",e.message)
        
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
        return res.status(201).json({ message: "Book add successfully", newBook });
    } catch (e) {
        // return res.status(500).json("Internal server error",e.message); 
        console.error(e.message);
        
    }
}