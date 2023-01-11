import React, { Component } from "react";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/aspsnippets/test/master/Customers.json"
    )
      .then((res) => res.json())
      .then(
        (customers) => {
          this.setState({ customers: customers });
        },
        (error) => {
          alert(error);
        }
      );
  }




  render() {
    return (
      <table cellPadding="0" cellSpacing="1">
        <thead>
          <tr>
            <th>CustomerId</th>
            <th>Name</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          {this.state.customers.map((customer) => (
            <tr>
              <td>{customer.CustomerId}</td>
              <td>{customer.Name}</td>
              <td>{customer.Country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default Home;
