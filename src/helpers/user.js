import axios from 'axios';
//import {apiUrl} from '../config';


export const createUser = (user) => {

	//const url = `${apiUrl}/users`
	const url = 'https://roadmappr.herokuapp.com/users/register'
    return axios.post(url, user);
}


export const login = (email = null, password = null) => {
	//const url = `${apiUrl}/users/login`
	const url = 'https://roadmappr.herokuapp.com/users/login'
    return axios.post(url, {
    	email: email,
    	password: password
    });
}