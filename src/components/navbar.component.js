import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component {

    render(){
        return(
            <nav className="navbar navbar-expand-xl navbar-light ">
         <div className="container">
         <Link to="/" className="nav-link">Exercise</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo2" aria-controls="navbarTogglerDemo2" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navbarTogglerDemo2">
      <ul className="navbar-nav me-auto mb-2 mb-xl-0">
        <li className="nav-item">
          <Link to="/" className="nav-link">Exercise</Link>
        </li>
        <li className="nav-item">
        <Link to="/create" className="nav-link">Create Exercise</Link>
        </li>
        <li className="nav-item">
        <Link to="/user" className="nav-link">Create User</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
        );
    }
}