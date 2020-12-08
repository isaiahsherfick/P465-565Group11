import React , {useState, useEffect} from 'react'
import Header2 from './Header2';
import Header from './Header'

const ViewReviews = (props) => {

  const arr = []
    const [reviews, setReviews] =  useState([])

    const {data} = props.location;

    console.log(data);

  useEffect(() => {
    fetch('https://roadmappr.herokuapp.com/gatherReview', {
      method: "POST",
       headers: {
        "content-type" : "application/json"
       },
       body: JSON.stringify({
        unique_location_key: data
       })
    })
    .then(response => response.json())
    .then(data => {
     console.log(data.reviews);
       setReviews(data.reviews)
       
    }
    )
    .catch(err => console.log(err))
  }, [])

  var myData = Object.keys(reviews).map(key => {
    return reviews[key];
  })

//   if(reviews){
//   console.log(reviews, "<=====reviews");
//   var myData = Object.keys(reviews).map(key => {
//     return reviews[key];
// })
// console.log(myData, "myData");
//   }

const displayReviews =  reviews && myData.map((item, index) => (
  <ul key={index}>
   <li>{item.reviewBody}</li>
   <li>{item.reviewHeader}</li>
   <li>{item.starOutOffFive}</li>
   </ul>
 ))
  

 
    return (
        <div class="alldiv">
          <Header/>
          <Header2 />

 <div>
   {
   displayReviews
  }  
</div> 


          {/* reviewBody
reviewHeader
starsOutOfFive
 */}



          

        </div>
    )
}

export default ViewReviews