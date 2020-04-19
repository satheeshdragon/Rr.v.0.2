import React from "react";

const MyComponent = ImplementComponent => {

  class NewComponent extends React.Component
  {
    constructor()
    {
      super();
      this.state = {
         count: 0
      }
    }
  

  myCount = () => {
    this.setState({
      count:this.state.count + 1
    })
  }

  render()
  {
    return <ImplementComponent count={this.state.count}
    func={this.myCount} 
    />
  }

  }
  return NewComponent
}


export default MyComponent;
