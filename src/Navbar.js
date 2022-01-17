import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) =>{
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style = {{borderBottom : "2px solid #DCDCDC"}}>
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/about" style={{color : "dark gray"}}>About</Link>
            </div>
          <div/>
      </div>
      </div>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} style = {{paddingLeft : "3.4em"}}>
          <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
        </div>
      </nav>
      </>
    );
}

export default Navbar;
