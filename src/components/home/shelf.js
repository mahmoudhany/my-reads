import React from 'react'
import Book from './book'

const Shelf = ({ books, shelfTitle, fetchBooks }) => (
  <div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
    </div>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (<Book key={book.id} book={book} fetchBooks={fetchBooks} />))}
      </ol>
    </div>
  </div>
);

export default Shelf
