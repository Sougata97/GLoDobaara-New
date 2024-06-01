import React from "react";
import "./bookingNav.css";
import Logo from "./l.png";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <section className="nav align-center">
        <div className="nav align-center">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <a href="/" className="logo">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/build_pages">Contacts</a>
            <a href="/services">Services</a>
            <a>
              <FaUser style={{ color: "white" }} />
              <p>Login/Signup</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
