import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar p-4 container-fluid navbar-expand-sm bg-dark mb-auto">
      <Link to="/home" className="link-light text-decoration-none">
        <img
          src="./img/logo-light.png"
          className="float-start img-fluid "
          alt="aruna-logo"
        />
      </Link>

      <div className="container-fluid justify-content-end">
        <ul className="nav text-center ">
          <li className="nav-item col ">
            <Link to="/home" className="link-light text-decoration-none">
              Anasayfa
            </Link>
          </li>
          <li className="nav-item col">
            <Link to="/company" className="link-light text-decoration-none">
              Firma
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
