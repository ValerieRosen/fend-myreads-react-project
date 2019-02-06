import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book'

class Searchpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          books: [],
          results: [],
          query: ""
        }
      }

      componentDidMount() {
        BooksAPI.getAll()
        .then(resp => {
          this.setState({ books: resp });
        });
      }

    render() {
        return (
              <div className="search-books">
                <div className="search-books-bar">
                  <Link className="close-search" to="/">Close</Link>
                  <div className="search-books-input-wrapper">
                      <input type="text" placeholder="Search by title or author"/>
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid"></ol>
                  {
                    this.state.results.map((book, key) => 
                    <Book updateBook={this.updateBook} book={book} key={key} />)
                  }
                </div>
              </div>
        );
    }
}

export default Searchpage