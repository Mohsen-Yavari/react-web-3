import React from 'react';
import "./navbar.scss";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
 <div>
  <nav className="navbar navbar-expand-lg gradiant__bg navbar-dark">
    <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" >خانه</Link>
          </li>
          <li className="nav-item">
            <Link to="/WhatGPT3" className="nav-link active" aria-current="page" >نسل سوم وب</Link>
          </li>
   
          <li className="nav-item">
            <Link to="/Features" className="nav-link active" aria-current="page" >امکانات </Link>
          </li>
   
          <li className="nav-item">
            <Link to="/Posibility" className="nav-link active" aria-current="page" >بررسی  </Link>
          </li>
          <li className="nav-item">
            <Link to="/CTA" className="nav-link active" aria-current="page" >فن اوری  </Link>
          </li>
          <li className="nav-item">
            <Link to="/Blog" className="nav-link active" aria-current="page" >بلاگ  </Link>
          </li>
   
   
         
        </ul>
        

      </div>
      <Link to="/" className="navbar-brand" >نسل سوم</Link>
    </div>
    
  </nav>

</div>

   
    );
};

export default Navbar;