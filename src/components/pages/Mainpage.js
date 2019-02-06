import React from 'react'
import * as BooksAPI from '../../BooksAPI'
import { Link } from 'react-router-dom'
import'../../App.css'
import Shelf from '../Shelf'
import Book from '../Book'

class Mainpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    componentDidMount() {
        BooksAPI.getAll()
        .then(resp => {
            console.log(resp);
            this.setState({ books: resp });
        });
        }
    
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                
                <Shelf name="Currently Reading" books={this.state.books.filter(b => b.shelf === "currentlyreading")} />
                <Shelf name="Want To Read" books={this.state.books.filter(b => b.shelf === "wantstoread")} />
                <Shelf name="Read" books={this.state.books.filter(b => b.shelf === "read")} />
            
                </div>
                </div>
   
            <div className="open-search">
             <Link to="/search"><button>Add a book</button></Link>
            </div>
          </div>
     )
  };
}
 

export default Mainpage
    