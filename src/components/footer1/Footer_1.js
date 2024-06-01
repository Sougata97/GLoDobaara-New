import React from "react";
import "../footer1/footer1.css";
import insta from "../footer1/img/insta.svg";
import facebook from "../footer1/img/facebook.svg";
import twitter from "../footer1/img/twitter.svg";
import whatsapp from "../footer1/img/whatsapp.svg";

export default function Footer1() {
  return (
    <>
      <section className="footer1">
        <div className="container foot-wrap">
          <div className="box-foot">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
            <h6>Name Name</h6>
          </div>
          <div className="box-foot">
            <h4>| find us here</h4>
            <div className="social">
              <div className="sc-icon">
                <a href="#">
                  <img src={insta} alt="" />
                </a>
                <a href="#">
                  <img src={facebook} alt="" />
                </a>
                <a href="#">
                  <img src={twitter} alt="" />
                </a>
                <a href="#">
                  <img src={whatsapp} alt="" />
                </a>
              </div>
            </div>
            <h4>| ask as here</h4>
          </div>
        </div>
      </section>
    </>
  );
}
