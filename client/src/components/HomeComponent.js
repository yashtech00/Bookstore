import axios from "axios";
import { useEffect, useState } from "react"
import { BookCard } from "./BookCard";


export const BookHome =  () => {


    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get("/book/AllBook");
            console.log(res.data);
            setBooks(res);
        }
        fetch();
    },[])

    return (
        <div>
            <div>
                <h1>Book Store</h1>
                {books.map((book) => (
                    <div key={books.BookId}>
                        <BookCard book={book} />
                    </div>
                ))}
            </div>
        </div>
    )
}