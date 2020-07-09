import React, { Component } from 'react'
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Shelf from './shelf'
import Search from './search'
import Details from './details'

class BooksComponent extends Component {

  render() {
    const { shelfs, fetchBooks } = this.props;
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        </div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <div className="list-books-content">
                  <div>
                    {
                      shelfs.map(item => (
                        <Shelf
                          key={item.title}
                          books={item.data}
                          shelfTitle={item.title}
                          fetchBooks={fetchBooks}
                        />
                      ))
                    }
                  </div>
                </div>
                <div className="open-search">
                  <Link to='/search'>
                    <button>Add a book</button>
                  </Link>
                </div>
              </Route>
              <Route path='/search'>
                <Search fetchBooks={fetchBooks} />
              </Route>
              <Route path='/details'>
                <Details />
              </Route>
            </Switch>
          </div>
        </Router>
      </div >
    )
  }
}

export default BooksComponent
