import React from 'react';
import { Link } from 'react-router-dom';

const Nabar = () => {
    return (
        
<nav class="navbar navbar-expand-lg  bg-danger">
  <div class="container-fluid">
    <div class="collapse navbar-collapse col-md-8" id="navbarNav">
      <ul class="navbar-nav col-md-8">
        <li class="nav-item">
          <Link class="nav-link text-light" to="/">🏠 Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/contacto">📒 Contacto</Link>
        </li> 
      </ul>
    </div>
  </div>
  <div className='container d-flex justify-content-end'>
  <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="navbar-brand text-light" to="/" >🍰 Happy Cake</Link>
        </li>
        </ul>
  
  </div>
</nav>
    );
}

export default Nabar;
