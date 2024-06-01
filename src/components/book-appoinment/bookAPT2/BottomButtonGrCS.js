import React from "react";
import "./bottombutton.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
export default function BottomButtonGroup() {
  return (
    <div className="bottom-button-div">
      <button className="back-button">
        <div>
          <FaLongArrowAltLeft style={{ width: "30px", height: "30px" }} />
          <p>Back</p>
        </div>
      </button>
      <div className="right-buttons">
        <button className="cancel-button">Cancel</button>
        <button className="nxt">Choose People & Venue</button>
        {/* <button className="next-button">
          <div>
            <p className="nxt">Choose People & Venue</p>
          </div>
        </button> */}
      </div>
    </div>
  );
}
