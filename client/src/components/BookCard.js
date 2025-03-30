export const BookCard = ({ book }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="border-2 border-gray-300 rounded-lg shadow-lg p-4 w-[250px] bg-white hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-lg font-bold text-gray-800 mb-2">{book.BookName}</h2>
                <p className="text-sm text-gray-600 mb-4">{book.BookDescription}</p>
                <p className="text-md font-semibold text-gray-700 mb-2">Price: ${book.Price}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    {book.BookType}
                </span>
            </div>
        </div>
    );
};
