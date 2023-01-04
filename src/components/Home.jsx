import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentDidMount() {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        const data2 = data.results;
        this.setState({ users: data2 });
      });
  }
    render() {
        console.log(this.data.users);
    return <div>Home</div>;
  }
}
export default Home;
