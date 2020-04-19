import React, { Component } from "react";


class Conditional extends Component {

	constructor(){
	    super(); 

	    let h_array = [ {'name': '1'} ,{ 'name' : '2'},{ 'name' : '3'} ];
	    let type = [ {'type': 'fruit'} ,{ 'type' : 'vegitable'},{ 'type' : 'Non-veg'},{ 'number' : h_array} ];

	    this.state = {
	        isLoggedIn: false,
	        result: 0,
	        familyname: ['sathesh','sd','kumar'],
	        number_set: h_array,
	        type: type,
	    }

	  }


  render() {

  	console.log(this.state.type);

  	let result;

  	if(this.state.result === 1){
  		result = <h1> Im One </h1>
  	}else{
  		result = <h1> No Data </h1>
  	}

    return (
       <div ClassName="">
        <p className="text-center"> Iam Conditional</p>
        <div style={{'padding':'20px'}}></div>

        <div className="row text-center">
        	<div className="col-md-6">if condition test</div>
        	<div className="col-md-6">
        		 The user is <b>{this.state.isLoggedIn ? 'currently' : 'not'}</b> logged in.
        		 <br />
        		 {result}
        	</div>
        </div>

        <div className="row text-center">
        	<div className="col-md-6">Array Constion</div>
        	<div className="col-md-6">
        		 {
        		 	this.state.familyname.map(e =>   <li>{e}</li> )
        		 }
        		 <br/>
        		 {
        		 	this.state.number_set.map(e =>   <li>{e.name}</li> )
        		 }

        		  <br/>
        		 {
        		 	this.state.type.map(e =>   
        		 		<li>{e.type}</li> 
        		 	)
        		 }        		 
        	</div>
        </div>
        

         <div style={{'padding-top':'40%'}}></div>
       </div>
    );
  }



}

export default Conditional;
