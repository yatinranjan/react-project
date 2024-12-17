import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({cartAllProduct}) => {
  // { cartAllProduct }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-primary d-flex justify-content-between">
          <ul className="d-flex gap-5  align-item-center m-0 py-2 p-0">
            <NavLink
              to="/"
              className="list-inline-item text-light p-0 pointer text-decoration-none"
            >
              Home
            </NavLink>
            <NavLink
              to="contact"
              className="list-inline-item text-light p-0 pointer text-decoration-none"
            >
              Contact
            </NavLink>
            <NavLink
              to="about"
              className="list-inline-item text-light p-0 pointer text-decoration-none"
            >
              About
            </NavLink>
          </ul>
          <ul className=" m-0 py-2 p-0">
            <NavLink
              to="cart"
              className="list-inline-item text-light p-0 pointer"
            >
              <i className="fa-solid fa-cart-shopping "></i>
            </NavLink>
            {/* <span
              className="text-decoration-none count rounded-pill text-dark position-absolute top-0 right"
              style={{ backgroundColor: "orange", right: "-45%" }}
            > */}
              {/* {cartAllProduct ?.length} */}
            {/* </span> */}
            <span className="text-decoration-none count rounded-pill text-dark position-absolute top-0 right " style={{backgroundColor: "orange", right:'2%' }}>
              {cartAllProduct?.length}
            </span>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
