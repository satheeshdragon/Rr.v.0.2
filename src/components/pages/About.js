import React, { Component } from "react";
import NewComponent from "./Hoc";


class About extends Component {  
  render() {
    // Destructive props
    const { func } = this.props
    return (
       <div ClassName="text-center">
         <p> Iam About count Data  : {this.props.count}</p>
         <button onClick={func}>Count</button>
       </div>
    );
  }
}

export default NewComponent(About);
