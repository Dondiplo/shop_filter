import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./nav.css";

function Nav() {
  return (
    <div className="navbar">
      <div className="nav">
        <h1>JAGUN-CART</h1>
        <div className="links">
          <ul>
            <li>
              {" "}
              <Link to="/">shop</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/cart">
                {" "}
                <AiOutlineShoppingCart />
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
