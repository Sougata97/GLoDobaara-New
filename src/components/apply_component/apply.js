import React from "react";
import "./apply.css";
import bg from "./bg.png";
import img1 from "./pic1.jpg";
import img2 from "./pic2.jpg";
import img3 from "./pic3.jpg";
export default function Apply() {
  return (
    <>
      <section className="apply">
        <div className="container">
          <div className="d-flex align-center about-box-apply">
            <div className="box-left-apply">
              <img src={bg} alt="" />
            </div>
            <div className="box-right-apply">
              <h2>APPLY</h2>
            </div>
          </div>
        </div>
        <div className="sp-wrap-about about-box-apply">
          <div className="leftimg">
            <img src={img1} alt="" />
          </div>
          <div className="centerimg">
            <img src={img2} alt="" />
          </div>
          <div className="rightimg">
            <img src={img3} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
