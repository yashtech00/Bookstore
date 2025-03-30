import axios from "axios";
import { useEffect, useState } from "react"
import { BookCard } from "./BookCard";


export const BookHome =  () => {


    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get("http://localhost:8000/book/AllBook");
            console.log(res.data.Books);
            setBooks(Array.isArray(res.data.Books) ? res.data.Books : []);
        }
        fetch();
    },[])

    return (
        <div>
            <div className="flex justify-center items-center m-14 w-full">
                <div className="w-[80%] border-2 border-gray-300 ">
                    <div className="flex justify-evenly">
                    <h1 className="flex justify-center text-2xl font-bold mt-4">Book Store</h1>
                        <div><button className="py-4 px-6 text-lg bg-black text-white rounded-lg m-2">Cart</button></div>
                        </div>
                    <div className="flex flex-wrap justify-evenly mt-10">
                {books.map((book) => (
                    <div key={books._id}>
                        <BookCard book={book} />
                    </div>
                ))}
                        </div>
                    </div>
            </div>
        </div>
    )
}