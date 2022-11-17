import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <div className="d-flex me-3">
            <div onClick={() => props.toggleMode('primary')} className="bg-primary rounded p-2 mx-2" style={{height :'30px', width : '30px', cursor: 'pointer'}}></div>

            <div onClick={() => props.toggleMode('success')} className="bg-success rounded p-2 mx-2" style={{height :'30px', width : '30px', cursor: 'pointer'}}></div>

            <div onClick={() => props.toggleMode('warning')} className="bg-warning rounded p-2 mx-2" style={{height :'30px', width : '30px', cursor: 'pointer'}}></div>

            
            <div onClick={() => props.toggleMode('danger')} className="bg-danger rounded p-2 mx-2" style={{height :'30px', width : '30px', cursor: 'pointer'}}></div>

            <div onClick={() => props.toggleMode('info')} className="bg-info rounded p-2 mx-2" style={{height :'30px', width : '30px', cursor: 'pointer'}}></div>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => props.toggleMode(null)}
            />
            <label className={`form-check-label text-${props.mode === "light" ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">
              {props.mode === 'dark' ? 'Light' : 'Dark'} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "TextUtils",
  about: "About Us",
};
