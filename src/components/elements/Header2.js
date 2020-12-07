import React from 'react';
import { Link } from 'react-router-dom';
import Modal from "./FlightModal";
import Image from '../elements/Image';

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
                <li>

                <a href='#' data-item='Flights'  onClick={e => {this.showModal(e);}}>Flights</a>
                <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/flight.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </li>
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