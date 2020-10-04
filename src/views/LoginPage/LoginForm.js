import React from "react";
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
import {Link} from "react-router-dom";

import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = makeStyles(styles);
//const classes = useStyles();

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
 
    axios.post('http://localhost:5000/users/register', { 
      name: this.state.name, 
      email: this.state.email, 
      password: this.state.password
    }).then(response => {
     
      //setUserSession(response.data.token, response.data.user);
      //if(response.result.email){return(alert("Sucessfully Registered. Please signin back!"));}
      this.props.history.push('/map-page');
      //return(alert("Sucessfully Registered. Please signin back!"));

      
    }).catch(error => {
      alert(error)
      //if (error.response.status === 401) setError(error.response.data.message);
      //else setError("Something went wrong. Please try again later.");
    });
  }


  render() {
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
<CardFooter className={useStyles.cardFooter} style={{justifyContent: 'center'}}>
<Link to="/map-page">
  <Button simple color="primary" size="lg" onClick={this.handleLogin}>
    Get started
  </Button>
  </Link>
</CardFooter>
</form>
    );
  }
}