import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import "./error.css";

export default function Error() {
  
  return (
    <>
      <div className="error-box container d-flex">
        <img src={logo} alt="" />
        <br />
        <a href='/'>Go To Home Page</a>
      </div>
    </>
  );
}
