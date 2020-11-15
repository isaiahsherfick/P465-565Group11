//import { Restaurant } from '@material-ui/icons';
import Header2 from './Header2';
import Header from './Header'
import React, {useState} from 'react'
import { getFlightData } from '../../helpers/common';
import './Explore.css'



const Flight = () => {

    const flightData = getFlightData()
    console.log(flightData)


             const [myData, setMyData] = useState(flightData.flight_details)

             let placeId = "" 
             const addJson = (myData) => {
                 placeId = myData.place_id;
                fetch("https://roadmappr.herokuapp.com/addToItinerary", {
                    method: "POST",
                    headers:{
                        'Accept': 'application/json',
                        "Content-type": "application/json"
                    },
                    body:JSON.stringify({
                        // name:  JSON.stringify(myData.name),
                        name: myData.carrierName,
                        userId: "3"
                        

                    })
                })
                .then(res => res.json())
                .then(() => alert("Added successfully to Itinerary"))
                .then(() => console.log())
                .catch(err => console.log(err, "Unable to Post!"))
                }

             



             
             
             const renderData = 
                 myData.map(result => (
                     
                     <div style={{background: "lightBlue"}} > 
                         <p>{result.carrierName} </p>
                         <p>${result.price}</p>
                         <p>{result.departureDate}</p>
                
                         <p onClick={() => addJson(result)}> <a href={"#"}>Add to Itinerary</a> </p>
        {/* <img style={{display:"unset"}} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${result.photos[0].photo_reference}&key=AIzaSyANxvSPyPXr2rMPMSUjCqvBQ6_PS2cOs3Q`}/> */}
                         {/* <img src={str1} /> */}
                         {/* <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&amp;photoreference=${result.photos[0].photo_reference}&amp;key=AIzaSyCqflolF2b4aNNcyQs0XdbcoAFwtby7Muw`}/> */}
                         </div>
                 ))
             
            

            

   
    return (
        
       <div style={{marginTop:"20%"}}>
           <Header/>
           <Header2 /> 
           {renderData}
       </div>
    )
}

export default Flight
