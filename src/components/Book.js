import React from 'react'
//import { Link } from 'react-router-dom'
//import * as BooksAPI from '../BooksAPI'


class Book extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                book: props.book
            }
        }
    
    componentDidMount() {
        console.log(this);
    }

    render() {
        return (
                <li>
                   <div className="book">
                     <div className="book-top">
                     <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail || ""}")` }}></div>
                       <div className="book-shelf-changer">
                         <select value={this.state.book.shelf} onChange={(event) => this.addToShelf(this.props.book, event.target.value)}>
                           <option value="move" disabled>Move to...</option>
                           <option value="currentlyReading">Currently Reading</option>
                           <option value="wantToRead">Want to Read</option>
                           <option value="read">Read</option>
                           <option value="none">None</option>
                         </select>
                       </div>
                     </div>
                     <div className="book-title">{this.state.book.title}</div>
                     <div className="book-authors">{this.state.book.authors[0]}</div>
                   </div>
                 </li>
        );
    }
}

export default Book 