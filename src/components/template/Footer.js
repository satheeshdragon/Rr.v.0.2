import React, { Component } from "react";

class Footer extends Component {
  constructor(){
    super();
    this.state = {
        box_data : "Im Big box"
    }
  }
  render() {
    return (
        <div>
            <p> Iam Footer {this.props.name} </p>
            <p> Iam States {this.state.box_data} </p>
         </div>
    );
  }
}

export default Footer;