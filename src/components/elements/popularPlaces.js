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




function Places() {

 const [myData, setMyData] =  useState([])

  useEffect(() => {
    fetch('https://roadmappr.herokuapp.com/topPlaces', {
      method: "GET",
       headers: {
        "content-type" : "application/json"
       },

    })
    .then(response => response.json())
    .then(data => setMyData(data.Top_Places))
    .catch(err => console.log(err))
  }, [])

  
  console.log('popplaces', myData)



// const renderData = (
 
//    <div>
//     {myData.map((data) => (
//       <div key={data}>
//          <p> {data}</p>
//         </div>
//     ))}

     
//      </div>
   

// )

const renderData = myData.map(result => (
                     
  <div style={{background: "lightBlue"}} > 
  {console.log(result.result.name)}
  <img style={{display:"unset"}} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${result.result.photos[0].photo_reference}&key=AIzaSyANxvSPyPXr2rMPMSUjCqvBQ6_PS2cOs3Q`}/>

      <p>{result.result.name} </p>
      <p>{result.result.rating}</p>
      <p>{result.result.vicinity}</p>

      {/* <p onClick={() => addJson(result)}> <a href={"#"}>Add to Itinerary</a> </p> */}
      {/* <img src={str1} /> */}
      {/* <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&amp;photoreference=${result.photos[0].photo_reference}&amp;key=AIzaSyCqflolF2b4aNNcyQs0XdbcoAFwtby7Muw`}/> */}
      </div>
))




  return (
    <div className="container">
      <Header />
      <Header2 />
      <h1> Hey {getUsername()}, checkout some popular places suggested by RoadMappr </h1>
        {renderData}
{/* {myData.length < 1 ? <p>oops! no itinerary </p> : renderData} */}


   
    </div>
  )

}

export default Places;
