import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

import Book from "../Book"
import Shelf from "../Shelf"

class Mainpage extends React.Component {
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                
                <Shelf />
                <Shelf />
                <Shelf />
            
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
    