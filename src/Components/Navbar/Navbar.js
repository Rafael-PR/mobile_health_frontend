import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
} from "mdbreact";
import "./Navbar.css";
import Logo from "../util/mhicon.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBNavbar color="green" dark expand="md">
      <MDBNavLink to="/">
        <MDBNavbarBrand>
          <img className="logo" src={Logo} alt="MH Logo" height="133" to="/" />
        </MDBNavbarBrand>
      </MDBNavLink>

      <MDBNavbarToggler onClick={toggleCollapse} />

      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left></MDBNavbarNav>

        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="#!">Are you a therapist</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            {/* TODO add active to active page functionality */}
            <MDBNavLink to="/auth">Login</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/registration">Register</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBFormInline waves>
              <div className="md-form my-0">
                <input
                
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </MDBFormInline>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;

//   <nav>
//   <ul >
//     <li >
//       < Link to="/" style={{textAlign: "left"}, {color: "#03af03"}}>Logo soll nach links ins eck, als gif datei </Link>
//     </li>
//     <li>
//       <Link to="/">Are you a Therapist</Link>
//     </li>
//     <li>
//       <Link to="/Login">LOGIN</Link>
//     </li>
//     <li>
//       <Link to="/Registration">Register</Link>
//     </li>
//     <li>
//       <Link to="/">Search</Link>
//     </li>

//   </ul>
// </nav>
