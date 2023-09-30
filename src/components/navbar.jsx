import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top headerbar">
        <div className="container-fluid container">
          <a className="navbar-brand nav-heading" href="/home">
          <i class="fa-solid fa-book-journal-whills"></i> iNoteBook
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} href="/about">
                  About
                </a>
              </li>
            </ul>

          </div>
          {!localStorage.getItem('token') ?
            <div className="d-flex ">
              <a href="/login" className="btn btn-primary active mx-2" aria-current="page">Login</a>
              <a href="/signup" className="btn btn-primary active mx-2" aria-current="page">SignUp</a>
            </div> :
            <button className="btn btn-primary mx-2" onClick={handleLogout}>LogOut</button>}

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
