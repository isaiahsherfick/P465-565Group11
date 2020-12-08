import Header2 from './Header2';
import Header from './Header'
import React, {useState, useEffect} from 'react'
//import React, { useState } from 'react'
import './Itinerary.css'
import { getUsername } from '../../helpers/common';
//import Header from '../layout/Header';

import { getExploreData } from '../../helpers/common';
import { Link } from 'react-router-dom';
import { getUserId } from '../../helpers/common';
import { withScriptjs } from "react-google-maps";
import Footer from './footer'

import IMap from './ItineraryMap';


const myData =  [
  {userId: "3", hotelName: "maria de france"},
  {userId: "3", hotelName: "maria de spain"},
  {userId: "3", hotelName: "maria de italy"},
]




function Itinerary(props) {

 const [myData, setMyData] =  useState([])
 const [myComment, setMyComment] = useState([])

  useEffect(() => {
    fetch('https://roadmappr.herokuapp.com/retrieveItinerary', {
      method: "POST",
       headers: {
        "content-type" : "application/json"
       },
       body: JSON.stringify({
         userId: getUserId()
       })
    })
    .then(response => response.json())
    .then(data => setMyData(data.tasks))
    .then(comment => setMyComment(comment.comments))
    .catch(err => console.log(err))
  }, [])
  
  console.log('tasks',myData)
  console.log('comments', myComment)
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
  
  const renderData = (
   
   <div>
      {  console.log('tasks',myData)}
      {console.log('comments',myComment)}
    {myData.map((data) => (
      <div key={data}>
         <p> {data}</p>
          <button onClick={() => handleDelete(data)}>Delete </button>
          <span> </span>
          <button /*className="whitetb"*/ onClick={()=>reviewHandler(data)}>Write a review</button>
        </div>
    ))}
  <p>Here's what others think about your itinerary</p>
{myComment.map((comment) => (
         <p> {comment}</p>
    ))}
     
     </div>
   

)

const MapLoader = withScriptjs(IMap);



  return (
    <div class="alldiv">
      <Header />
      <Header2 />
      <h1> Welcome to your Itinerary, {getUsername()} </h1>

    <div class="flex-container" style={{display:"flex"},{flexDirection:"row"}}>

      {/* <div className="container" > */}


{myData.length < 1 ? <p>oops! no itinerary </p> : renderData}
{/* </div> */}
<MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCqflolF2b4aNNcyQs0XdbcoAFwtby7Muw"
      loadingElement={<div style={{ height: `100%` }} />}
  />

</div>
<br></br>
    <div>Finalize your Itinerary by booking here <Link to='/book'><button type="submit">Book</button>
</Link>
</div>
<br/>
    <div>Comment on other itineraries here <Link to='/comment'>
      <button type="submit">Comment</button>
</Link></div>

   
    {/* <Footer/> */}
    </div>
  )

}

export default Itinerary;