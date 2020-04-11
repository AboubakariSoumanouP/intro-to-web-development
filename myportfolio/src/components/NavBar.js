import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <ul className="navbar">
      <li onClick={(e) => props.changePage("Home")}>
        <Link className='active-page' id="home-nav-link" to="/">
          Home
        </Link>
      </li>
      <li onClick={(e) => props.changePage("About")}>
        <Link id="about-nav-link" to="/aboutMe">
          About Me
        </Link>
      </li>
      <li onClick={(e) => props.changePage("Projects")}>
        <Link id="project-nav-link" to="/projects">
          Projects
        </Link>
      </li>
      <li onClick={(e) => props.changePage("Contact")}>
        <Link id="contact-nav-link" to="/contactMe">
          Contact Me
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
