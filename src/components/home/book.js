import React from 'react';
import { update } from '../../api/BooksAPI';
import { Link } from "react-router-dom";

export default ({ book, fetchBooks }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <Link to={`/details?id=${book.id}`}>
            <div className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(
                    ${book.imageLinks ?
                    book.imageLinks.thumbnail :
                    'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png'
                  })`
              }}
            >
            </div>
          </Link>
          <div className="book-shelf-changer">
            <select
              onChange={e => {
                update(book, e.target.value).then(() => fetchBooks())
              }}
              defaultValue={book.shelf}
            >
              <option value="move" disabled>Move to...</option>
              <option value="none">None</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {(book.authors) ?
            book.authors.map((author, index) => {
              return <div key={index}>{author}</div>
            })
            : book.authors}
        </div>
      </div>
    </li >
  )
}
