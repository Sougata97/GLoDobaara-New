import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";
import Logo from "./bannerbg.jpg";
import smimg from "./bannerbgsm.jpg"
export default function Banner() {
  return (
    <>
      <section className="banner row">
        <img src={Logo} alt="" className="bg" />
        <img src={smimg} alt="" className="sm" />
        <div className="bannerText">
          <div className="container">LET'S BE FRIENDS</div>
        </div>
        <a href="/login">Log In/Sign up</a>
      </section>
    </>
  );
}
