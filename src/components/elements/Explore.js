import Header2 from './Header2';
import Header from "./Header";
import React, {useState} from 'react';
import { getExploreData } from '../../helpers/common';
import { getCityData } from '../../helpers/common';
import { Link } from 'react-router-dom';


// import './Explore.css'

//const Explore = () => {
export default class Explore extends React.Component{
    constructor(){
        super()
  
        this.cityData = { city: "Chicago", 
        images: ["https://miro.medium.com/max/2000/1*siqenXUFvg4iinAWF7o-ow.jpeg",
        "https://www.momondo.com/discover/wp-content/uploads/sites/260/2019/04/119a0ce5-bf97-3674-9c1d-03addd0c1a86.jpg",
        "https://ssl.tzoo-img.com/images/tzoo.1.0.570478.C-astMinuteVacations-Tulum-iStock-136559958.jpg?width=1080"
    ]
    }

    }

    render(){
    //     const cityData = { city: "Atlanta", 
    //     images: ["https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "https://i.pinimg.com/236x/39/9a/42/399a42619d2ac5e1b648bd5c69d2a361.jpg",
    //     "https://image.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238584.jpg"
    // ]
    // }
        const cityData = getExploreData()
        console.log("raass explore data",cityData)
        const cityname = getCityData()
        console.group("ras city name",cityname)
        //const [Cityname] = useState(cityname);

        //const [data] = useState(cityData);
        require("./Explore.css")
   
        return (
            <div style={{marginTop: "2%"}}>
                <Header/>
                <Header2 />
                <h1 id="city">{cityname}</h1>
       {/* {
        this.cityData.images.map(image => ( <img className="heroImage" style={{display:"inline-grid"}} src={image} alt="test image"></img>))

       } */}
       <div class='flex-container'>
<div>
<img style={{display:"unset"}} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${cityData.attractions.results[0].photos[0].photo_reference}&key=AIzaSyANxvSPyPXr2rMPMSUjCqvBQ6_PS2cOs3Q`}/>
<p><Link to="./attractions"><a href='#' data-item='Hotels'>Explore City Attractions</a></Link></p>
</div>
<div>
<img style={{display:"unset"}} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${cityData.hotels.results[0].photos[0].photo_reference}&key=AIzaSyANxvSPyPXr2rMPMSUjCqvBQ6_PS2cOs3Q`}/>

    <p>
    <Link to="./hotels"><a href='#' data-item='Hotels'>Explore Hotels</a></Link>

    </p>
</div>
<div>
<img style={{display:"unset"}} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${cityData.restaurants.results[0].photos[0].photo_reference}&key=AIzaSyANxvSPyPXr2rMPMSUjCqvBQ6_PS2cOs3Q`}/>

    <p>
    <Link to="./restaurants"><a href='#' data-item='Hotels'>Explore Restaurants</a></Link>

    </p>
</div>

</div>

               
            </div>
        );

    }

}


//export default Explore