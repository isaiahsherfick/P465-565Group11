import React from 'react';
import './search.css'
//import Input from 'components/CustomInput/CustomInput.js'

const mapboxURL = 'https://api.mapbox.com/styles/v1/sneakbots/ckfg8aias0fui19s07ubr19sx.html?fresh=true&title=view&access_token=pk.eyJ1Ijoic25lYWtib3RzIiwiYSI6ImNrZmZzajh2azBmMnUydG83ZHlteDVqZGQifQ.ekQc9lMhLZop23CsTobsPA#11.09/33.7785/-118.256'

const MapPage = () => {
    return (
        <div>
            <div className="iframe">
            <iframe

  frameborder="0" 
  style={{border:0}}
  src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA" allowfullscreen>
</iframe>
            </div>
            <form onsubmit="event.preventDefault();" role="search" className="form">
                <label for="search">Search for stuff</label>
                <input id="search" type="search" placeholder="Search..." autofocus required />
                <button type="submit">Go</button>
            </form> 
        </div>
    )

}

export default MapPage
