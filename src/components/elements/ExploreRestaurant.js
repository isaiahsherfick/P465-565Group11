//import { Restaurant } from '@material-ui/icons';
import Header2 from './Header2';
import Header from './Header'
import React, {useState} from 'react'
import { getExploreData } from '../../helpers/common';
import './Explore.css'
import { getUserId } from '../../helpers/common';

const LS_DATA = 'ITERNARY';

const Explore = (props) => {

    const cityData = getExploreData()
    


             const [myData, setMyData] = useState(cityData.restaurants)

             let placeId = "" 
             const addJson = (myData) => {
                 const dataToAdd = {placeId: myData.place_id, name: myData.name};
                 saveToLocalStorage(dataToAdd);
           
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
                        placeId: placeId,
                        userId: getUserId()

                    })
                })
                .then(res => res.json())
                .then(() => alert("Added successfully to Itinerary"))
                .then(() =>console.log(""))
                .catch(err => console.log(err, "Unable to Post!"))
                }

                const saveToLocalStorage = (data) =>{
           
                   let myLSData = JSON.parse(localStorage.getItem(LS_DATA)) || [];
                  myLSData.push(data)

                   localStorage.setItem(LS_DATA, JSON.stringify(myLSData));
                }

                

             

             var apiKey = "AIzaSyCqflolF2b4aNNcyQs0XdbcoAFwtby7Muw";      
            //  var str1 = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${placeId}&key=${apiKey}`;
                
             var photo_reference_goes_here = cityData.restaurants.results[0]['photos'][0]['photo_reference']
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
                     
                     <div /*style={{background: "white"}}*/ > 
                    <img style={{display:"unset"}} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${result.photos[0].photo_reference}&key=AIzaSyANxvSPyPXr2rMPMSUjCqvBQ6_PS2cOs3Q`}/>

                         <p>{result.name} </p>
                         <p>{result.rating}</p>
                         <p>{result.vicinity}</p>
                
                         {/* <p onClick={() => addJson(result)}> <a href={"#"}>Add to Itinerary</a> </p> */}
                         <p><button onClick={() => addJson(result)}>Add to Itinerary</button></p>
                        
                         <p onClick={() => navigate(result.name)}> <a href={"#"}>View Reviews</a> </p>

                         {/* <img src={str1} /> */}
                         {/* <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&amp;photoreference=${result.photos[0].photo_reference}&amp;key=AIzaSyCqflolF2b4aNNcyQs0XdbcoAFwtby7Muw`}/> */}
                         </div>
                 ))
             
            

            

   
    return (
        
       <div class="alldiv">
           <Header/>
           <Header2 /> 
        <div class='flex-container'>
        {renderData}

        </div>
       </div>
    )
}

export default Explore