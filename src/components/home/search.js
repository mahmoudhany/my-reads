import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { search } from '../../api/BooksAPI';
import Book from './book'

class Search extends Component {
  state = {
    books: []
  }
  handleSearch(query) {
    if (query !== '') {
      search(query).then((books) => {
        if (Array.isArray(books)) {
          this.setState({
            books: books
          })
        } else {
          console.log('error')
        }
      })
    }
  }
  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/'>
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(e) => {
                  this.handleSearch(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
                (Array.isArray(this.state.books) && this.state.books.length >= 1) ?
                  this.state.books.map((book) =>
                    (
                      <Book
                        key={book.id}
                        book={book}
                        fetchBooks={this.props.fetchBooks}
                      />
                    )
                  )
                  : <h1>Discover Books</h1>
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
