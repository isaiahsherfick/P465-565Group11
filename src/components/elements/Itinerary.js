import Header2 from './Header2';
import Header from './Header'
import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
//import React, { useState } from 'react'
 
import { getUsername } from '../../helpers/common';
//import Header from '../layout/Header';

import { getExploreData } from '../../helpers/common';

const LS_DATA = 'ITERNARY';
const myData =  [
  {userId: "3", hotelName: "maria de france"},
  {userId: "3", hotelName: "maria de spain"},
  {userId: "3", hotelName: "maria de italy"},
]




function Itinerary(props) {

 const [myData, setMyData] =  useState([])

  useEffect(() => {

    setMyData(JSON.parse(localStorage.getItem(LS_DATA)));
    // fetch('https://roadmappr.herokuapp.com/retrieveItinerary', {
    //   method: "POST",
    //    headers: {
    //     "content-type" : "application/json"
    //    },
    //    body: JSON.stringify({
    //      userId: "3"
    //    })
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setMyData(data.tasks)
    // console.log("RESPONSE DATA===>", data)
    // })
    // .catch(err => console.log(err))
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
const reviewHandler = (data)=>{
props.history.push({
  pathname: '/reviews',
  data
})
}
console.log("MY DATA=====>", myData);
const renderData = (
 
   <div>
    {myData.map((data, index) => (
      <div key={index}>
         <p>Name: {data.name}</p>
          <button className="whitetb" onClick={()=>reviewHandler(data)}>Reviews</button>
          <button onClick={() => handleDelete(data)}>  Delete  </button>
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

export default withRouter(Itinerary);

