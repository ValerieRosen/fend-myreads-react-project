import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import { Route } from 'react-router-dom'

import Mainpage from './components/pages/Mainpage'
import Searchpage from './components/pages/Searchpage'

class BooksApp extends React.Component {
  render() {
    return ( 
      <div>
        <Route exact path="/" component={ Mainpage } />
        <Route exact path="/search" component={ Searchpage } />
      </div>
    );
  }
}
  
export default BooksApp
