import React, {Component} from 'react';
import axios from 'axios'

class BookDetail extends Component{
  state = {
    bookInfo: {}
  }

  componentDidMount(){
    this.getBookDetail()
  }

  getBookDetail(){
    axios.get(`/api/books/${this.props.match.params.title}`).then( response => {
      this.setState({bookInfo: response.data})
    })
  }

  render(){
    let { title, cover, author, summary} = this.state.bookInfo
    return(
      <div>
        <h1>{title}</h1>
        <h3>{author}</h3>
        <img src={cover} alt={title}/>
        <p>{summary}</p>
      </div>
    )
  }
}

export default BookDetail;