import ImporterAPI from './api';
import React, { Components } from "react";
const API = new ImporterAPI();

class Home extends Components {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
  }}

  componentWillMount() {
    this.setState({ data: API.getData()}, () => {
      console.log("data fetched");
      var mapData = []
      this.state.data.map( (object, i) => {
        mapData.push(<p key={i}>{object}</p>)
      })
  }) 
  }
  render() {
    return (
      <div className="home">
        {this.mapData}
      </div>
    )
  }
}
export default Home;