import Header2 from './Header2';
import Header from "./Header";
import React, {useState} from 'react';
import { getExploreData } from '../../helpers/common';
import { getCityData } from '../../helpers/common';
//import './Explore.css'

//const Explore = () => {
export default class Explore extends React.Component{
    constructor(){
        super()
  
        this.cityData = { city: "Chicago", 
        images: ["https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://i.pinimg.com/236x/39/9a/42/399a42619d2ac5e1b648bd5c69d2a361.jpg",
        "https://image.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238584.jpg"
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
       {
        this.cityData.images.map(image => ( <img className="heroImage" style={{display:"inline-grid"}} src={image} alt="test image"></img>))
       }
               
            </div>
        );

    }

}


//export default Explore