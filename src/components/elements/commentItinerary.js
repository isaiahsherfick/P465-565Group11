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
import Modal from './CommentModal';


const myData =  [
  {userId: "3", hotelName: "maria de france"},
  {userId: "3", hotelName: "maria de spain"},
  {userId: "3", hotelName: "maria de italy"},
]




function Itinerarycomment() {
    // state = {
    //     show: false
    //   };
    //   showModal = e => {
    //     this.setState({
    //       show: !this.state.show
    //     });
    //   };

 const [myData, setMyData] =  useState([])
//  const [show, setShow] = useState(false)
 const [show, setShow] = useState(false);
 const openModal = () => setShow(true);
 const closeModal = () => setShow(false);
//  const showModal = (show) => {
//      setShow(!show)
//  }

  useEffect(() => {
    fetch('https://roadmappr.herokuapp.com/allItineraries', {
      method: "GET",
       headers: {
        "content-type" : "application/json"
       },

    })
    .then(response => response.json())
    .then(data => setMyData(data.Itineraries))
    .catch(err => console.log(err))
  }, [])
  
  console.log(typeof myData)
  console.log(show)
  //https://roadmappr.herokuapp.com/removeFromItinerary
const handleDelete =(name) => {
//   <Modal></Modal>
  fetch('https://roadmappr.herokuapp.com/addToItinerary', {
    method: "POST",
     headers: {
      "content-type" : "application/json"
     },
     body: JSON.stringify({
        userId: getUserId(),
         name
     })
  })
  .then(response => response.json())
 .then(res => console.log(res))
.catch(err => console.log(err))

setMyData(myData.filter(data => data !== name))
}

const renderData = (
 
   <div>
    {myData.map((data) => (
      <div key={data}>
         {/* <p> UserID : {data.owner_id}</p> */}
         <p>Itinerary of {data.owner_id} is as follows :</p>
         {data.tasks.map((task) => (<p> {task}</p>))}
         <p>Here is what other users commented</p>
         {/* <p> {data.comments}</p> */}
         {data.comments.map((comment) => (<p> {comment}</p>))}

          {/* <button onClick={()=> showModal(show)}>Add Comment</button> */}
          {!show && <button onClick={openModal}>Add Comment</button>}
          {/* <button onClick={() => handleDelete(data)} onClick={e => {this.showModal(e);}}>Add Comment</button> */}
          {/* <Modal onClose={this.showModal} show={this.state.show}>
            </Modal> */}
            {/* <Modal onClose={()=> showModal(show)} setShow>
            </Modal> */}
            {/* <Modal closeModal={closeModal} show={show} /> */}
        </div>
    ))}
     
     </div>
   

)




  return (
    <div /*className="container"*/>
        <Header/>
      <Header2 />
      {/* <h1> Welcome to your Itinerary, {getUsername()} </h1> */}
      <h1> Add suggestions to other Itineraries </h1>
      {renderData}
   
    </div>
  )

}

export default Itinerarycomment;
