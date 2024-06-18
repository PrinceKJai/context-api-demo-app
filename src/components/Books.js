import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

export default function Books() {
  const books = useContext(BooksContext);
  //   console.log("booksbooks", books);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{listStyle: 'none'}}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
