import React from 'react';
import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom';

function Navbar() {
  const isAuthenticated = true;

  return (
    <nav id='navbar' className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm ${styles.navbar}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={require("../assets/Tickitz1.png")}
            alt="icon-app"
          />
        </a>
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
        <div className={`collapse navbar-collapse ${styles.navbarNav}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link fs-5 fw-bold ${styles.navLink}`} href="#">
                List Movie
              </a>
            </li>
          </ul>
          <Link to='/login' className={`btn btn-outline-primary me-2 ${styles.Login}`}>
            Login
          </Link>
          <Link to='/register' className={`btn btn-primary ${styles.Register}`}>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;