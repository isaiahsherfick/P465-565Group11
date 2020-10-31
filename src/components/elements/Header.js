import React from 'react';
import { Link } from 'react-router-dom';
//import '../../assets/scss/header/Header.css';


//function Header() {
export default class Header extends React.Component{
    render(){
        require('./Header.css')
        return (
            <nav className="nav1">
            <Link className="logo">Roadmapper</Link>
            <ul>
                <li><Link>User information</Link></li>
                <li><Link>Itenary</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
            </nav>
        )

    }

}

//export default Header