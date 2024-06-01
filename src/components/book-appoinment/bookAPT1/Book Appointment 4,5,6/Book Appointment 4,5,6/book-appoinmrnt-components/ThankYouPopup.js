import React from "react";
import "./thankYouPopup.css";
import { FaRegWindowClose } from "react-icons/fa";
import image from "./Frame (1).png";
function ThankYouPopup(props) {
  return (
    <div className="pop-dn">
      <FaRegWindowClose
        className="pop-close-icon"
        onClick={props.closeButtonFunction}
      />
      <img src={image} className="pop-ty-img" />
      <h1 className="pop-ty-txt">Thank You!</h1>
      <h4 className="pop-ty-txt2">Your request has been received. </h4>
      <h5 className="pop-ty-txt3">Our team will get back to you soon.</h5>
    </div>
  );
}
export default ThankYouPopup;
