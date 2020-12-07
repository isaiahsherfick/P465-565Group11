//import { Restaurant } from '@material-ui/icons';
import Header2 from './Header2';
import Header from './Header'
import React, {useState} from 'react'
import { getExploreData } from '../../helpers/common';
import { getUserId } from '../../helpers/common';

import './Explore.css'



const Explore = (props) => {

    const cityData = getExploreData()
    


             const [myData, setMyData] = useState(cityData.hotels)

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
                        name: myData.name,
                        userId: getUserId()

                    })
                })
                .then(res => res.json())
                .then(() => alert("Added successfully to Itinerary"))
                .then(() => console.log())
                .catch(err => console.log(err, "Unable to Post!"))
                }

             

             var apiKey = "AIzaSyCqflolF2b4aNNcyQs0XdbcoAFwtby7Muw";      
            //  var str1 = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${placeId}&key=${apiKey}`;
                
             var photo_reference_goes_here = cityData.hotels.results[0]['photos'][0]['photo_reference']
             var str1 = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference_goes_here}&key=AIzaSyANxvSPyPXr2rMPMSUjCqvBQ6_PS2cOs3Q`; 
        
console.log(photo_reference_goes_here, "<== city data" )


const navigate = (data) => {
    props.history.push({
        pathname: '/viewreviews',
        data
      })
 }

             
             
             const renderData = 
                 myData.results.map(result => (
                     
                     <div style={{background: "lightBlue"}} > 
                    <img style={{display:"unset"}} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${result.photos[0].photo_reference}&key=AIzaSyANxvSPyPXr2rMPMSUjCqvBQ6_PS2cOs3Q`}/>

                         <p>{result.name} </p>
                         <p>Rating : {result.rating}</p>
                         <p>{result.vicinity}</p>
                
                         {/* <p onClick={() => addJson(result)}> <a href={"#"}>Add to Itinerary</a> </p> */}
                         <p><button onClick={() => addJson(result)}>Add to Itinerary</button></p>
                         <p onClick={() => navigate(result.name)}> <a href={"#"}>View Reviews</a> </p>

                         {/* <img src={str1} /> */}
                         {/* <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&amp;photoreference=${result.photos[0].photo_reference}&amp;key=AIzaSyCqflolF2b4aNNcyQs0XdbcoAFwtby7Muw`}/> */}
                         </div>
                 ))
             
            

            

   
    return (
        <div>
            <Header/>
           <Header2 /> 
        
       <div class='flex-container'>

           {renderData}
       </div>
       </div>
    )
}

export default Explore
