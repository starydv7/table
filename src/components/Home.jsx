import React, { Component } from 'react'
import ReactTable from "react-table";
class Home extends Component {
  state = {
    books: [],
  };
  componentDidMount() {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((booksList) => {
        this.setState({ books: booksList });
        //console.log(booksList);
      });
  }
    render() {
        console.log("Books",this.state.books.users);
    return (
      <ul>
        {this.state.books.map((book) => (
          <li key={book.id}>{book.firstName}</li>
        ))}
      </ul>
    );
  }
}
export default Home;
