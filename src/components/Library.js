import React, {Component} from 'react';
import axios from 'axios'

class Library extends Component{
  state = {
    books: []
  }

  componentDidMount(){
    this.getBooks();
  }

  getBooks(){
    axios.get(`/api/books`).then( response => {
      this.setState({books: response.data})
    })
  }

  render(){
    let mappedBooks = this.state.books.map( book => {
      return(
        <div key={book.id} onClick={() => this.props.history.push(`/library/${book.title}`)} >
          <h1>{book.title}</h1>
          <img src={book.cover} alt={book.title}/>
        </div>
      )
    })
    return(
      <div>
        <h1>library</h1>
        {mappedBooks}
      </div>
    )
  }
}

export default Library;