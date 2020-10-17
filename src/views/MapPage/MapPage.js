import React from 'react';
 import './search.scss'
//import Input from 'components/CustomInput/CustomInput.js'
import axios from "axios";

const mapboxURL = 'https://api.mapbox.com/styles/v1/sneakbots/ckfg8aias0fui19s07ubr19sx.html?fresh=true&title=view&access_token=pk.eyJ1Ijoic25lYWtib3RzIiwiYSI6ImNrZmZzajh2azBmMnUydG83ZHlteDVqZGQifQ.ekQc9lMhLZop23CsTobsPA#11.09/33.7785/-118.256'

//const MapPage = () => {
//export default function MapPage() {
export default class MapPage extends React.Component{

    constructor(){
      super()

      this.state = {
          name: null,
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange =this.handleChange.bind(this)
  }


    handleSubmit= event =>{
      event.preventDefault();
      const user = {
        city: this.state.name
      } 
      axios.post('http://localhost:5000/search', { user })
        .then(res=>{
          console.log(res);
          console.log(res.data);
          // window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
        })
    }



  handleChange = event =>{
      this.setState({ name: event.target.value});
    }
    render(){
      return (
          <div>
              <div className="iframe">
              <iframe

    frameborder="0" 
    style={{border:0}}
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDAwFRjZJPeT3I9R4nGBap0gJorBu9aHLc
      &q=Space+Needle,Seattle+WA" allowfullscreen>
  </iframe>
              </div>
              <form  role="search" className="form">
                  <label for="search">Search for stuff</label>
                  <input id="search" type="search" name = "name" onChange= {this.handleChange} placeholder="Search..." autofocus required />
                  {/* <input type = "text" name = "name" onChange= {this.handleChange}/> */}
                  <button type="submit" onClick={this.handleSubmit}>Go</button>
              </form> 
          </div>
      );
    }

  
}

//export default MapPage
