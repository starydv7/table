import React, { Component } from 'react'

class Table3 extends Component {
  constructor() {
    super();
    this.state = { items: [] };
    console.log("test");
  }

  componentDidMount() {
    fetch("https://swapi.co/api/planets")
      .then((res) => res.json())
      .then((res) => {
        console.log("result",res.results);
        if (res.results && res.results.length > 0) {
          this.setState({ items: res.results });
        }
      });
  }

  render() {
    return (
      <div>
        <div>Items:</div>
        {this.state.items.map((item) => {
          return <div>{item.name}</div>;
        })}
      </div>
    );
  }
}
export default Table3;
