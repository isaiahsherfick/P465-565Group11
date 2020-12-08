import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Reviews.css'
import { getUserId } from '../../helpers/common';
import Header from './Header'


function Reviews(props) {

  const {data} = props.location;

 

  const [value, setValue] = React.useState(2);
  const [review, setReview] = useState({reviewTitle: "", reviewBody: "", reviewRating: value})
  var x = document.createElement("INPUT");
      x.setAttribute("type", "text");

      const styles = {
        color: "red",
        background: "#0f0",
        fontSize: "32px",
        allign: 'center'
    };

    const handleChange = e => {
    setReview({...review, [e.target.name]: e.target.value})
    }



    const handleSubmit = e => {
        e.preventDefault();
        console.log(data)
        fetch("https://roadmappr.herokuapp.com/postReview", {
            method: "POST",
            headers:{
                'Accept': 'application/json',
                "Content-type": "application/json",
            },
            body:JSON.stringify({
               owner_id: 3,
               unique_location_key: data,
               stars_out_of_five: review.reviewRating,
               review_header: review.reviewTitle,
               review_body: review.reviewBody,
               

            })
        })
        .then(res => res.json())
        .then(res => {
          props.history.push({
            pathname: '/viewreviews',
            data
          })
        })
        .catch(err => console.log(err))
    }


  return (
    <div class="alldiv">
     
       <Header/>
      
      <form onSubmit={handleSubmit} className="reviewForm" >
      <Box style={{allign: styles.allign}} component="fieldset" mb={3} borderColor="transparent">
        <Typography className="typography" component="legend">Reviews</Typography>
        <Rating
          name="simple-controlled"
          style={{color:"none"}}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            

          }}
        />
      </Box>

       <input onChange={handleChange} name
       ="reviewTitle" type="text" placeholder="Review Title"/>
       <input onChange={handleChange}  name="reviewBody"   type="text" placeholder="Review body"/>
       <button>submit</button>
       </form>
      
    </div>
  );

        }
export  default withRouter(Reviews);