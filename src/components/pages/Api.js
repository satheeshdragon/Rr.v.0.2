import React, { Component } from "react";
import axios from "axios";

class Api extends Component {
  constructor(){
    super(); 

    this.state = {
        persons: []
    }
  }

  componentDidMount()
  {
    axios.get(`http://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
       <div>
         <p> Iam Api Classs </p>
         <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
       </div>
    );
  }
}

export default Api;
