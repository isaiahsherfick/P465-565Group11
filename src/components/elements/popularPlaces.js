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
 const [myComment, setMyComment] = useState([])

  useEffect(() => {
    fetch('https://roadmappr.herokuapp.com/topPlaces', {
      method: "GET",
       headers: {
        "content-type" : "application/json"
       },

    })
    .then(response => response.json())
    .then(data => setMyData(data.locations))
    .catch(err => console.log(err))
  }, [])

  
  console.log(typeof myData)



const renderData = (
 
   <div>
    {myData.map((data) => (
      <div key={data}>
         <p> {data}</p>
        </div>
    ))}

     
     </div>
   

)




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
