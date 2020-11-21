import Header2 from './Header2';
import Header from './Header'
import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
//import React, { useState } from 'react'
import './Itinerary.css'
import { getUsername } from '../../helpers/common';
//import Header from '../layout/Header';

import { getExploreData } from '../../helpers/common';
import { Link } from 'react-router-dom';
import { getUserId } from '../../helpers/common';

const LS_DATA = 'ITERNARY';
const myData =  [
  {userId: "3", hotelName: "maria de france"},
  {userId: "3", hotelName: "maria de spain"},
  {userId: "3", hotelName: "maria de italy"},
]




function Itinerary() {

 const [myData, setMyData] =  useState([])
 const [myComment, setMyComment] = useState([])

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
        userId: getUserId(),
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
  <p>Here's what others think about your itinerary</p>
{myComment.map((comment) => (
         <p> {comment}</p>
    ))}
     
     </div>
   

)




  return (
    <div className="container">
      <Header />
      <Header2 />
      <h1> Welcome to your Itinerary, {getUsername()} </h1>

{myData.length < 1 ? <p>oops! no itinerary </p> : renderData}
    <div>Finalize your Itinerary by booking <Link to="/book">here</Link></div>
    <div>Comment on other itineraries by clicking <Link to="/comment">here</Link></div>

   
    </div>
  )

}

export default Itinerary;
