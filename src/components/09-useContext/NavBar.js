import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Mauricio Ojeda</Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              
                <NavLink exact activeClassName="active" className="nav-item nav-link" aria-current="page" to="/">Home</NavLink>
              
                <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">Login</NavLink>
              
                <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">About</NavLink>                       
              
            </ul>
            
          </div>
        </div>
      </nav>
    )
}

export default NavBar
