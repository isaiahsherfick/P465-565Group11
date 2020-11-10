import React, { useState } from "react";
import "./modal.css";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
//import Map from './Map';
import PlacesAutocomplete from './City';
import moment from 'moment';
import axios from 'axios';
 
import "react-datepicker/dist/react-datepicker.css";

export default class Modal extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(date) {
        this.setState({
          startDate: date
        })
      }
    
      handleSubmit(e) {
        e.preventDefault();
        let mainDate = Date.parse(this.state.startDate);
        const dateObj = {
          sDate: mainDate.format('L')
        }
        axios.post('http://localhost:4000/dates/add', dateObj)
            .then(res => console.log(res.data));
      }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="flightmodal" id="flightmodal">
        <h2>Modal Window</h2>
        <div class="flightcontent">

        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
          {/* <PlacesAutocomplete/> */}
            <label>Select Date: </label>
            <DatePicker
              selected={ Date.parse(this.state.startDate) }
              onChange={ this.handleChange }
              name="startDate"
              dateFormat="MM/dd/yyyy"
            />
          </div>
          {/* <div className="form-group">
            <button className="btn btn-success">Add Date</button>
          </div> */}
        </form>
      
        </div>
        <div class="flightactions">
          <button class="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
