import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
       <nav className="nav1">
        <Link className="logo">Roadmapper</Link>
         <ul>
             <li><Link>User information</Link></li>
             <li><Link>Itenary</Link></li>
             <li><Link>Logout</Link></li>
         </ul>
       </nav>
    )
}

export default Header
