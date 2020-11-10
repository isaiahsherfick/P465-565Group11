//import { Restaurant } from '@material-ui/icons';
import Header2 from './Header2';
import Header from './Header'
import React, {useState} from 'react'
import { getExploreData } from '../../helpers/common';
import { getUserId } from '../../helpers/common';

import './Explore.css'



const Explore = () => {

    const cityData = getExploreData()
    


             const [myData, setMyData] = useState(cityData.restaurants)

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
                        userId: "3"

                    })
                })
                .then(res => res.json())
                .then(() => alert("Added successfully to Itinerary"))
                .then(() => console.log())
                .catch(err => console.log(err, "Unable to Post!"))
                }

                

             

             var apiKey = "AIzaSyCqflolF2b4aNNcyQs0XdbcoAFwtby7Muw";      
            //  var str1 = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${placeId}&key=${apiKey}`;
                
             var photo_reference_goes_here = cityData.restaurants.results[0]['photos'][0]['photo_reference']
             var str1 = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference_goes_here}&key=AIzaSyANxvSPyPXr2rMPMSUjCqvBQ6_PS2cOs3Q`; 
        
console.log(photo_reference_goes_here, "<== city data" )

             
             
             const renderData = 
                 myData.results.map(result => (
                     
                     <div style={{background: "lightBlue"}} > 
                         <p>{result.name} </p>
                         <p>{result.rating}</p>
                         <p>{result.vicinity}</p>
                
                         <p onClick={() => addJson(result)}> <a href={"#"}>Add to Itinerary</a> </p>
        <img style={{display:"unset"}} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${result.photos[0].photo_reference}&key=AIzaSyANxvSPyPXr2rMPMSUjCqvBQ6_PS2cOs3Q`}/>
                         {/* <img src={str1} /> */}
                         {/* <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&amp;photoreference=${result.photos[0].photo_reference}&amp;key=AIzaSyCqflolF2b4aNNcyQs0XdbcoAFwtby7Muw`}/> */}
                         </div>
                 ))
             
            

            

   
    return (
        
       <div style={{marginTop:"20%"}}>
           <Header/>
           <Header2 /> 
           {renderData}
           hello
       </div>
    )
}

export default Explore
