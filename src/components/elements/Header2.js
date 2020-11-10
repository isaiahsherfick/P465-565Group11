import React from 'react';
import { Link } from 'react-router-dom';
import Modal from "./FlightModal";
//import '../../assets/scss/header/Header2.scss'

//const Header2 = () => {
export default class Header2 extends React.Component{
    state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
    render(){
        require('./Header2.scss')
        return (
            <div>

            <nav className="nav2">
            <ul class="menuItems">
                <li><a href='#' data-item='TravelAdvice'  onClick={e => {this.showModal(e);}}>Travel Advice</a></li>
                <li><Link to="./hotels"><a href='#' data-item='Hotels'>Hotels</a></Link></li>
                <li><Link to="./attractions"><a href='#' data-item='TTD'>Things to do</a></Link></li>
                <li><Link to='./restaurants'><a href='#' data-item='restaurants'>restaurants</a></Link></li>
                <li><a href='#' data-item='More'>More</a></li>
            </ul>
            </nav>
            <Modal onClose={this.showModal} show={this.state.show}>
            </Modal>
            </div>


            )

    }

}

//export default Header2