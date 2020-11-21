import React , {useState, useEffect} from 'react'
import Header2 from './Header2';
import Header from './Header'

const ViewReviews = () => {

    const [reviews, setReviews] =  useState([])

  useEffect(() => {
    fetch('https://roadmappr.herokuapp.com/gatherReview', {
      method: "POST",
       headers: {
        "content-type" : "application/json"
       },
       body: JSON.stringify({
        unique_location_key: "ChIJkyqbhMvt6IgRi-51ty3Jz-E"
       })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
       setReviews(data)
    }
    )
    .catch(err => console.log(err))
  }, [])
    return (
        <div>
          <Header/>
          <Header2 />

{/* <div>
  {reviews.map(item => (
   <ul key={item.id}>
    <li>{item.reviewBody}</li>
    <li>{item.reviewHeader}</li>
    <li>{item.starOutOffFive}</li>
    </ul>
  ))

  }
</div> */}


          {/* reviewBody
reviewHeader
starsOutOfFive
 */}



          

        </div>
    )
}

export default ViewReviews
