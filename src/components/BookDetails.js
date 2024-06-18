import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";

export default function BookDetails() {
    const books = useContext(BooksContext);
  const {bookId} = useParams();

  const book = books.find((book) => book.id === parseInt(bookId));
  console.log("book", book);
  return (
    <div>
        Hello{book}
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <h4>{book.description}</h4>
    </div>
  );
}
