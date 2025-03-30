

export const BookCard = ({book}) => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div>
                {book.BookName}
                {book.BookDescription}
                {book.Price}
                    {book.BookType}
                    
                    </div>
            </div>
        </div>
    )
}