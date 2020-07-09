import React, { Component } from 'react'
import { get } from '../../api/BooksAPI'
import { withRouter } from 'react-router-dom';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      book: null
    }
  }
  componentDidMount() {
    const { history, location } = this.props;
    const id = location.search.replace('?id=', '');
    if (id === '') return history.goBack();
    get(id).then((book) => this.setState({ book }))
  }

  render() {
    const { book } = this.state;
    console.log(book);

    return (
      <div>
        {
          book !== null ? (
            <div className='book-details'>
              <h1>{book.title}</h1>
              <img src={
                book.imageLinks ?
                  book.imageLinks.thumbnail :
                  'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png'
              } alt="" />
              <p className='book-description'>Description: <span>{book.description}</span></p>
              <p className='book-page-count'>page count: {book.pageCount}</p>
              <div className="book-author">
                {(book.authors) ?
                  book.authors.map((author, index) => {
                    return <div key={index}>{author}</div>
                  })
                  : book.authors}
              </div>

            </div>
          ) : 'Loading...'
        }
      </div>
    )
  }
}


export default withRouter(Details);
