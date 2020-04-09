import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {
    return (
       <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/aboutMe'>About Me</Link></li>
           <li><Link to='/projects'>Projects</Link></li>
           <li><Link to='/contactMe'>Contact Me</Link></li>
       </ul>
    )
}

export default NavBar;