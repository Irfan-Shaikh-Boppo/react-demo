import React from "react";
// import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky -top navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.name}
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  AboutUs
                </a>
              </li>
            </ul>
            {/* <button className="d-flex btn btn-warning me-2">SignUp</button> */}
            <button className="d-flex btn btn-warning">
              {!props.isLoggedIn ? 'login' : 'logout'}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
