import React from "react";
import "./bottomButtonGroup.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
export default function ButtomButtonGroup() {
  return (
    <div className="bottom-button-div">
      <button className="back-button">
        <div>
          <FaLongArrowAltLeft
            style={{ width: "30px", height: "30px" }}
            className="btgr-icons"
          />
          <p>Back</p>
        </div>
      </button>
      <div className="right-buttons">
        <button className="cancel-button">Cancel</button>
        <button className="next-button">
          <div>
            <p>Next</p>
            <FaLongArrowAltRight className="btgr-icons" />
          </div>
        </button>
      </div>
    </div>
  );
}
