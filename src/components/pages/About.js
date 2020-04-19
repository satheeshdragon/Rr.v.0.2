import React, { Component } from "react";
import NewComponent from "./Hoc";


class About extends Component {
  render() {
    return (
       <div ClassName="text-center">
         <p> Iam About count Data  : {this.props.count}</p>
         <button onClick={this.props.func}>Count</button>
       </div>
    );
  }
}

export default NewComponent(About);
