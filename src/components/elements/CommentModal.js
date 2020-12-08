import React, { useState } from "react";
import "./modal.css";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
//import Map from './Map';
import PlacesAutocomplete from './City';
import { getstartCity } from '../../helpers/common';
import { getCityData } from '../../helpers/common';
import { setFlightData } from '../../helpers/common';
import moment from 'moment';
import axios from 'axios';
 

export default class Modal extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          startDate: new Date()
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
        let mainDate = this.state.startDate;
        const dateObj = {
          //sDate: mainDate.format('L'),
          startDate:moment(mainDate).format('YYYY-MM-DD'),
          //sDate: mainDate,
          startCity:getstartCity(),
          destinationCity:getCityData()
        }
        axios.post('https://roadmappr.herokuapp.com/flightDetails', dateObj)
            .then(res => {console.log(res.data); 			
              setFlightData(res.data);
              //this.props.history.push('/flights')
              // window.location = './comment'
            });
            window.location = './comment'

      }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
    console.log('closing', this.props.onClose)
  };
  
  render() {
    if (!this.props.show) {
      return null;
    }
    console.log('showing', this.props.show)
    return (
      <div class= "modalblurContainer">
      <div class="flightmodal ">
        <h3 style={{color:"black"}}>Post a Comment</h3>
        <div class="flightcontent">

        <form onSubmit={ this.handleSubmit }>
          {/* <div className="form-group"> */}
          <div>

          <label>Comment: </label>
          <input onChange={this.handleChange}  name="reviewBody"   type="text" placeholder="Comment"/>

          <br></br>

          </div>
          <br></br>

          {/* <div className="form-group"> */}
          <div >
            <button className="btn btn-success">Post</button>
          </div>
        </form>
      
        </div>
        {/* <div class="flightactions">
          <button class="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div> */}
      </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
