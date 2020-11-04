import Header2 from './Header2';
import Header from './Header'
import React, {useState} from 'react'
//import React, { useState } from 'react'
import './Itinerary.css'
import { getUsername } from '../../helpers/common';
//import Header from '../layout/Header';

import { getExploreData } from '../../helpers/common';



const data = [(0, ['10:00AM Indianapolis airport', '2:00PM Los Angeles', '4:30PM Check in at Mariott', '8:00 Dinner'])]

const cityData = getExploreData()

let placeId = ""


function Itinerary() {
  const [myData, setMyData] = useState(cityData.attractions)
  const myData1 = myData.tasks
  const [notes, setNotes] = useState(myData1)
  const Username = getExploreData()

  const addJson = (myData) => {
    placeId = myData.place_id;
    fetch("https://roadmappr.herokuapp.com/removeFromItinerary", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        // name:  JSON.stringify(myData.name),
        name: myData.name,
        userId: "1"

        //array called "tasks"
      })
    })
      .then(res => res.json())
      .then(() => alert("Added removed from Itinerary"))
      .then(() => console.log())
      .catch(err => console.log(err, "Unable to Post!"))
  }

  const renderData =
    myData.results.map(result => (

      <div>

        <p className="notes">{notes}</p>
        <p onClick={() => addJson(result)}> <a href={"#"}>Remove From Itinerary</a> </p>


      </div>))

  fetch('https://roadmappr.herokuapp.com/retrieveItinerary')
    .then(response => response.json())
    .then(data => console.log(data));


  return (
    <div className="container">
      <Header2 />
      <h1> Welcome to your Itinerary, {{Username}} </h1>


      <ul> {renderData} </ul>

    </div>
  )


}

export default Itinerary;




