import Header2 from 'Header2';
import React, {useState} from 'react'
import './Itinerary.css'



 const data = [(0,['10:00AM Indianapolis airport', '2:00PM Los Angeles', '4:30PM Check in at Mariott', '8:00 Dinner'])]


function App() {
  const myData = ['10:00AM Indianapolis airport', '2:00PM Los Angeles', '4:30PM Check in at Mariott', '8:00 Dinner']  
  const [notes, setNotes] = useState(myData)
  return (
    <div className="container">
      <h1> Welcome to your Itinerary, Mike </h1>
  <ul className="notes">{notes.map((note) => <li>{note}</li>)}</ul>
  </div>
)
}

export default App;



// const Explore = () => {
//     const cityData = { city: "Atlanta", 
//     images: ["https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     "https://i.pinimg.com/236x/39/9a/42/399a42619d2ac5e1b648bd5c69d2a361.jpg",
//     "https://image.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238584.jpg"

// ]
// }

//     const [data] = useState(cityData);

   
//     return (
        
//         <div style={{marginTop: "2%"}}>
//             <Header2 />
//             <h1 id="city">{data.city}</h1>
//    {
//     data.images.map(image => ( <img className="heroImage" src={image} alt="test image"></img>))
//    }
           
//         </div>
//     )
// }

// export default Explore
