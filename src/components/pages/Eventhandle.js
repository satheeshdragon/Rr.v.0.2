import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class EventhandleComponent
**/

class EventhandleComponent extends Component {
 
  constructor(){
    super(); 

    this.state = {
        persons: 'satheesh',
    }
  }

 render() {

    function show_fruitname(){
        alert('Apple is a fruit');
    }

    function show_whatiam_typeing(typing_value){
        alert(typing_value);
    }

  return(
    <div>
        <div className="row">
            <div className="col-lg-6">onclick</div>
            <div className="col-lg-6">
                <button onClick={show_fruitname}>Fruits</button>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-6">onchange</div>
            <div className="col-lg-6">
                <input type="text" className="form-control"></input>
            </div>
        </div>
        EventhandleComponent
    </div>
    )
   }
 }


EventhandleComponent.propTypes = {}
export default EventhandleComponent