import React,{useState} from "react";
import axios from 'axios';
// material-ui components
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CardFooter from "components/Card/CardFooter";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import {Link, useHistory} from "react-router-dom";

import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

const useStyles = makeStyles(styles);
//const classes = useStyles();
//const history = useHistory();
//const[isAutheticated, setisAutheticated] = useState(false);

export default class SignupButton extends React.Component {
  
  constructor() {
    super();
    this.state = {

      email: "",
      password: "",
      name: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);

    this.handleLogin = this.handleLogin.bind(this);
  }


  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleFirstNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleLogin = () => {
 
    axios.post('https://roadmappr.herokuapp.com/', { 
      name: this.state.name, 
      email: this.state.email, 
      password: this.state.password
    }).then(response => {
      //setisAutheticated(true);
      //console.log("loggedInUser:" + isAutheticated)
      //setUserSession(response.data.token, response.data.user);
      //console.log(response.result)
      //if(response.result){
        alert("Sucessfully Registered. Please signin back!")
        //this.props.history.push('/map-page');
      //}
      //return(alert("Sucessfully Registered. Please signin back!"));

      
    }).catch(error => {
      alert(error)
      //if (error.response.status === 401) setError(error.response.data.message);
      //else setError("Something went wrong. Please try again later.");
    });
  }

  // handlefacbookSubmit = () =>{
  //   //event.preventDefault();
  
  //   try {
  //     //userHasAuthenticated(true);
  //     if (getToken()) {
  //       this.props.history.push('/map-page');
  //     }
  //   } catch (e) {
  //     alert(e.message);
  //   }
  // }


  render() {

    const responseFacebook = (response) => {
      console.log(response);
      //setUserSession(response.accessToken, response.email);
      //this.handlefacbookSubmit
      try {
        //userHasAuthenticated(true);
        if (response.accessToken) {
          this.props.history.push('/map-page');
        }
      } catch (e) {
        alert(e.message);
      }
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <form className={useStyles.form} style={{textAlign: 'center'}} >
<CardHeader color="primary"  className={useStyles.cardHeader} >
  <h4>Login</h4>
  <div className={useStyles.socialLine} >
    <Button
      justIcon
      href="#pablo"
      target="_blank"
      color="transparent"
      onClick={e => e.preventDefault()}
    >
      <i className={"fab fa-twitter"} />
    </Button>
    <Link to="/map-page">
    <FacebookLogin
        appId="350321539653216" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      />
      </Link>
      <br />
      <br />


      <GoogleLogin
        clientId="" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    <Button
      justIcon
      href="#pablo"
      target="_blank"
      color="transparent"
      onClick={e => e.preventDefault()}
    >
      <i className={"fab fa-facebook"} />
    </Button>
    <Button
      justIcon
      href="#pablo"
      target="_blank"
      color="transparent"
      onClick={e => e.preventDefault()}
    >
      <i className={"fab fa-google-plus-g"} />
    </Button>
  </div>
</CardHeader>
<p className={useStyles.divider} >Or Be Classical</p>
<CardBody>
  <CustomInput
    labelText="First Name..."
    id="first"
    formControlProps={{
      fullWidth: true
    }}
    inputProps={{
      type: "text",
      onChange: this.handleFirstNameChange,
      endAdornment: (
        <InputAdornment position="end">
          <People className={useStyles.inputIconsColor} />
        </InputAdornment>
      )
    }}
  />
  <CustomInput
    labelText="Email..."
    id="email"
    formControlProps={{
      fullWidth: true
    }}
    inputProps={{
      type: "email",
      onChange: this.handleEmailChange,
      endAdornment: (
        <InputAdornment position="end">
          <Email className={useStyles.inputIconsColor} />
        </InputAdornment>
      )
    }}
  />
  <CustomInput
    labelText="Password"
    id="pass"
    formControlProps={{
      fullWidth: true
    }}
    inputProps={{
      type: "password",
      onChange: this.handlePasswordChange,
      endAdornment: (
        <InputAdornment position="end">
          <Icon className={useStyles.inputIconsColor}>
            lock_outline
          </Icon>
        </InputAdornment>
      ),
      autoComplete: "off"
    }}
  />
</CardBody>
<Link to='/map-page'>
<CardFooter className={useStyles.cardFooter} style={{justifyContent: 'center'}}>
  <Button simple color="primary" size="lg" onClick={this.handleLogin}>
    Get started
  </Button>
</CardFooter>
</Link>
</form>
    );
  }
}
