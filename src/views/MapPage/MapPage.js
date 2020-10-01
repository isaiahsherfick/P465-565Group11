import React from 'react'
import Input from 'components/CustomInput/CustomInput.js'

const mapboxURL = 'https://api.mapbox.com/styles/v1/sneakbots/ckfg8aias0fui19s07ubr19sx.html?fresh=true&title=view&access_token=pk.eyJ1Ijoic25lYWtib3RzIiwiYSI6ImNrZmZzajh2azBmMnUydG83ZHlteDVqZGQifQ.ekQc9lMhLZop23CsTobsPA#11.09/33.7785/-118.256'

const MapPage = () => { 
    return (
        <div>
            <div className="iframe">
                <iframe src={mapboxURL} width="100%" height="100%"></iframe>
            </div>
            <div className="search-bar">
                <Input labelText="Search" />
            </div>
        </div>
    )
}

export default MapPage