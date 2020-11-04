import React from 'react';
import { Link } from 'react-router-dom';
//import '../../assets/scss/header/Header.css';
import { removeUserSession } from '../../helpers/common';
import { getUsername } from '../../helpers/common';

//function Header() {
export default class Header extends React.Component{

    render(){
        // const name = getUsername()
        // const [Username] = useState(name)
        require('./Header.css')
        return (
            <nav className="nav1" >
            <Link to="/search" className="logo">RoadMappr</Link>
            <ul>
                <li><Link>Hi, {getUsername()}</Link></li>
                <li><Link to="/Itinerary">Itinerary</Link></li>
                <li><Link onClick={() => 
                    {     removeUserSession();
                            //this.props.history.push("/");
                            window.location = "/"
                                    }}> 
                Logout</Link></li>
            </ul>
            </nav>
        )

    }

}

//export default Header