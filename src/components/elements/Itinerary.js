import Header2 from './Header2';
import Header from './Header'
import React, {useState, useEffect} from 'react'
//import React, { useState } from 'react'
import './Itinerary.css'
import { getUsername } from '../../helpers/common';
//import Header from '../layout/Header';

import { getExploreData } from '../../helpers/common';


const myData =  [
  {userId: "3", hotelName: "maria de france"},
  {userId: "3", hotelName: "maria de spain"},
  {userId: "3", hotelName: "maria de italy"},
]




function Itinerary() {

 const [myData, setMyData] =  useState([])

  useEffect(() => {
    fetch('https://roadmappr.herokuapp.com/retrieveItinerary', {
      method: "POST",
       headers: {
        "content-type" : "application/json"
       },
       body: JSON.stringify({
         userId: "3"
       })
    })
    .then(response => response.json())
    .then(data => setMyData(data.tasks))
    .catch(err => console.log(err))
  }, [])
  
  console.log(typeof myData)

  //https://roadmappr.herokuapp.com/removeFromItinerary
const handleDelete =(name) => {
  
  fetch('https://roadmappr.herokuapp.com/removeFromItinerary', {
    method: "POST",
     headers: {
      "content-type" : "application/json"
     },
     body: JSON.stringify({
        userId: "3",
         name
     })
  })
  .then(response => response.json())
 .then(res => console.log(res))
.catch(err => console.log(err))

setMyData(myData.filter(data => data !== name))
}

const renderData = (
 
   <div>
    {myData.map((data) => (
      <div key={data}>
         <p> {data}</p>
          <button onClick={() => handleDelete(data)}>delete </button>
        </div>
    ))}
     
     </div>
   

)




  return (
    <div className="container">
      <Header2 />
      <h1> Welcome to your Itinerary, {getUsername()} </h1>

{myData.length < 1 ? <p>oops! no itenerary </p> : renderData}

   

    </div>
  )

}

export default Itinerary;
