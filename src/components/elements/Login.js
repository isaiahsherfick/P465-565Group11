import React, {Component} from 'react';

// import '../../assets/scss/core/sections/app.css'
// import '../../assets/scss/core/sections/app.scss'
// import '../../assets/scss/core/sections/_font.scss'
// import '../../assets/scss/core/sections/_reset.scss'
// import '../../assets/scss/core/sections/_variable.scss'
import classNames from 'classnames';
//import '../../assets/scss/core/sections/fonts'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


import _ from 'lodash';
import {isEmail} from '../../helpers/email';
import {createUser, login} from '../../helpers/user';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component{

	constructor(props){
		super(props);

		this.state = {
			message: null,
			isLogin: true,
			user: {
				name: "",
				email: "",
				password: "",
				confirmPassword: ""
			},

			error: {
				name: null,
				email: null,
				password: null,
				confirmPassword: null,
			}
		}


		this._onSubmit = this._onSubmit.bind(this)
		this._onTextFieldChange = this._onTextFieldChange.bind(this);
		this._formValidation = this._formValidation.bind(this)
	}

	_formValidation(fieldsToValidate = [], callback = () => {}){
		const {isLogin, user} = this.state;

		const allFields = {

			name: {
				message: "Your name is required.",
				doValidate: () => {
					const value = _.trim(_.get(user, 'name', ""));

				
					if(value.length > 0){
						return true;
					}

					return false;
				}
			},

			email: {
				message: "Email is not correct",
				doValidate: () => {

					const value = _.get(user, 'email', '');

					if(value.length >0 && isEmail(value)){

						return true;
					}
					return false;
				}
			},

			password: {
				message: "Password shoud has more than 3 characters.",
				doValidate: () => {


					const value = _.get(user, 'password', '');


					if(value && value.length > 3){

							return true;
					}

					return false;

				}
			},

			confirmPassword: {
				message: "Password does not match.",
				doValidate: () => {


					const passwordValue = _.get(user, 'password');
					const value = _.get(user, 'confirmPassword', '');


					if(passwordValue === value){
							return true;
					}

					return false;

				}
			}

		};



		let errors = this.state.error;

		_.each(fieldsToValidate, (field) => {

				const fieldValidate = _.get(allFields, field);
				if(fieldValidate){

					errors[field] = null;

					const isFieldValid = fieldValidate.doValidate();

					if(isFieldValid === false){
						errors[field] = _.get(fieldValidate, 'message');
					}
				}

		});



		this.setState({
			error: errors,
		}, () => {
		
			console.log("After processed validation the form errors", errors);

			let isValid = true;

			_.each(errors, (err) => {

				if(err){
					isValid = false;

				}
			});

			callback(isValid);

		})

		

	}
	_onSubmit(event){

		const {isLogin,user} = this.state; 
		event.preventDefault();


		let fieldNeedToValidate = ['email', 'password'];

		if(!isLogin){

			fieldNeedToValidate = ['name', 'email', 'password', 'confirmPassword'];
		}


		this._formValidation(fieldNeedToValidate,(isValid) => {


				console.log("The form is validated? ", isValid);


				if(isValid){

					// send request to backend
					if(isLogin){
						// do send data for login endpoint

						login(this.state.user.email, this.state.user.password).then((response) => {

							/// login success

			
							console.log("Hey i got data after login post", response);
							if(response.data.status == 'Login Success'){
								this.setState({
									message: {
										type: 'success',
										message: 'Login successful.'
									}
								});
								this.props.history.push('/map-page')
							}
							else{
								this.setState({
									message: {
										type: 'failure',
										message: 'Please enter valid username and password.'
									}
								});

							}

						}).catch((err) => {


							// login not success.
							this.setState({
								message: {
									type: 'error',
									message: 'An error login!'
								}
							});
							console.log(err);
						})


					}else{

						createUser(this.state.user).then((response) => {

							console.log("Hey i got data after send post", response);
						});
					}
					

				}
				//console.log("FOrm is submitted as: ", isLogin  ? "Login" : "Register", 'data:', user);

		});

		
	}

	_onTextFieldChange(e){

		let {user} = this.state;


		const fieldName = e.target.name;
		const fieldValue = e.target.value;


		user[fieldName] = fieldValue;

		this.setState({user: user});



	}
	render(){
		require("../../assets/scss/login/app.css")
		require("../../assets/scss/login/app.scss")
		require("../../assets/scss/login/_font.scss")
		require("../../assets/scss/login/_reset.scss")
		require("../../assets/scss/login/_variable.scss")

		const {isLogin, user, error,message} = this.state;
	

		const title = isLogin ? 'Sign In' : 'Sign Up'

		return (
				<div className="app-login-form">

					<div className="app-login-form-inner">
							<Link to = "/">
							<button onClick="handleClose" className="app-dismiss-button">Close</button></Link>
							<h2 className="form-title" style={{color:"GrayText"}} >{title}</h2>
							<form onSubmit={this._onSubmit}>

								{
									message ? <div className="app-message">
										<p className={message.type}>{message.message}</p>
									</div>: null
								}

								{
									isLogin ? <div style={{alignContent:'center'}}>
										<FacebookLogin
											appId="350321539653216" //APP ID NOT CREATED YET
											fields="name,email,picture"
											//callback={responseFacebook}
										/>
										<div style={{alignContent:'center'}}>OR</div>

										<GoogleLogin
											clientId="" //CLIENTID NOT CREATED YET
											buttonText="LOGIN WITH GOOGLE"
											// onSuccess={responseGoogle}
											// onFailure={responseGoogle}
										/>
										<br></br>
									</div>: null
									
								}
								
								<div></div>

								{
									!isLogin ? <div>
										

										<div className={classNames('app-form-item', {'error': _.get(error, 'name')})}>
											<label htmlFor="name-id">Name</label>
											<input value={user.name} onChange={this._onTextFieldChange} placeholder="Your name" id="name-id" type="text" name="name" />
										</div>
									</div>: null
									
								}

								<div className={classNames('app-form-item', {'error': _.get(error, 'email')})}>
									<label htmlFor="email-id">Email</label>
									<input value={user.email} onChange={this._onTextFieldChange} placeholder="Your email address" id="email-id" type="email" name="email" />
								</div>
								<div className={classNames('app-form-item', {'error': _.get(error, 'password')})}>
									<label htmlFor="password-id">Password</label>
									<input value={user.password} onChange={this._onTextFieldChange} placeholder="Your password" id="password-id" type="password" name="password" />
								</div>

								{
									!isLogin ? <div>

											<div className={classNames('app-form-item', {'error': _.get(error, 'confirmPassword')})}>
												<label htmlFor="confirm-password-id">Confirm Password</label>
												<input value={user.confirmPassword} onChange={this._onTextFieldChange} placeholder="Confirm password" id="confirm-password-id" type="password" name="confirmPassword" />
										</div>
									</div>: null
								}

								{
									isLogin ? <div className="app-form-actions">
										<button className="app-button primary">Sign In</button>

										<div className="app-form-description">
											<div>Don't have an account ? <button type="button" onClick={() => {
													this.setState({isLogin: false});
											}} className="app-button app-button-link">Sign Up</button></div>
											
										</div>
								</div> : <div className="app-form-actions">
										<button className="app-button primary">Sign Up</button>
										<div className="app-form-description">
											<div>Have an account ? <button type="button" onClick={() => {

													this.setState({isLogin: true});

											}} className="app-button app-button-link">Sign In</button></div>
											
										</div>
									</div>
								}
							</form>
					</div>
				</div>
			)
	}

}