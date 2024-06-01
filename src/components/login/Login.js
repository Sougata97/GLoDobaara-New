import React from "react";
// import PropTypes from "prop-types";
import "./Login.css";
import Nav from "../nav/Nav";
// import Admin_Login from "./admin_login/Admin_Login";
import User_login from "./user_login/User_Login";
import sideImg from "./31474530.jpg";
export default function Login(props) {
  return (
    <>
      <Nav />
      <User_login/>
      {/* <Admin_Login/> */}
    </>
  );
}
