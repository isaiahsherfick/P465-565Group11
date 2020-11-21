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
                <li><a href='#' data-item='Flights'  onClick={e => {this.showModal(e);}}>Flights</a></li>
                <li><Link to="./hotels"><a href='#' data-item='Hotels'>Hotels</a></Link></li>
                <li><Link to="./attractions"><a href='#' data-item='Thingstodo'>Things to do</a></Link></li>
                <li><Link to='./restaurants'><a href='#' data-item='Restaurants'>Restaurants</a></Link></li>
                <li><Link to="./popular"><a href='#' data-item='PopularPlaces'>Popular Places</a></Link></li>
            </ul>
            </nav>
            <Modal onClose={this.showModal} show={this.state.show}>
            </Modal>
            </div>


            )

    }

}

//export default Header2