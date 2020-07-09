import React, { Component } from 'react';
import * as BooksAPI from '../api/BooksAPI';
import BooksComponent from '../components/home';

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      shelfs: [],
      isLoading: false
    }
    this.fetchBooks = this.fetchBooks.bind(this);
  };

  componentDidMount() {
    this.setState(({ isLoading: true }));
    this.fetchBooks();

  }

  fetchBooks() {
    BooksAPI.getAll().then((books) => this.setState({
      shelfs: [
        {
          title: "Currently Reading",
          data: books.filter(({ shelf }) => shelf === 'currentlyReading')
        },
        {
          title: "Want to read",
          data: books.filter(({ shelf }) => shelf === 'wantToRead')
        },
        {
          title: "Read",
          data: books.filter(({ shelf }) => shelf === 'read')
        }
      ],
      isLoading: false
    }));
  }

  // fetchBookByID() {
  //   BooksAPI.get('sJf1vQAACAAJ').then((book) => (
  //     console.log(book)
  //   ))
  // }

  render() {
    const { shelfs, isLoading } = this.state;

    return (
      isLoading ? (
        <div className='center-img'>
          <img alt='Loading' src="https://i.pinimg.com/originals/78/e8/26/78e826ca1b9351214dfdd5e47f7e2024.gif" />
        </div>
      ) : (
          <BooksComponent
            shelfs={shelfs}
            fetchBooks={this.fetchBooks}
          />
        )
    )
  }
};

export default HomeContainer;
