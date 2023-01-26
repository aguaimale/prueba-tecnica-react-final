import React from 'react';



const Navbar = ({brand}) => {
  return (
    <div>
      <nav className="navbar-dark bg-success">
      <div className="container">
      <a className="navbar-brand d-flex justify-content-center text-uppercase" href="/">{brand}</a>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
