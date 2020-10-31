import React from 'react';
import { Link } from 'react-router-dom';
//import '../../assets/scss/header/Header2.scss'

//const Header2 = () => {
export default class Header2 extends React.Component{
    render(){
        require('./Header2.scss')
        return (
            <nav className="nav2">
            <ul class="menuItems">
                <li><a href='#' data-item='TravelAdvice'>Travel Advice</a></li>
                <li><a href='#' data-item='Hotels'>Hotels</a></li>
                <li><a href='#' data-item='TTD'>Things to do</a></li>
                <li><Link to='./explorerestaurants'><a href='#' data-item='restaurants'>restaurants</a></Link></li>
                <li><a href='#' data-item='More'>More</a></li>
            </ul>
            </nav>
        
            )

    }

}

//export default Header2