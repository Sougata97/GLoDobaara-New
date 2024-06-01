import React from "react";
import { Link } from "react-router-dom";
import "./footer2.css";

export default function Footer_2() {
  return (
    <>
      <section className="footer2">
        <div className="container">
          <div className="footer-box2-wrap">
            <div className="footer-box2">
              <h3>ABOUT</h3>
              <p>
                G Lo Dobaara" (popularly known as “GLD”) is a distinct Strategic
                Business Unit (SBU) of Abchi Technologies Private Limited and an
                initiative of social entrepreneurship.
              </p>
            </div>
            <div className="footer-box2">
              <ul>
                <li>
                  <Link to="/build_pages">Team</Link>
                </li>
                <li>
                  <Link to="/build_pages">Join us</Link>
                </li>
                <li>
                  <Link to="/build_pages">Ethic</Link>
                </li>
                <li>
                  <Link to="/build_pages">Goals</Link>
                </li>
              </ul>
            </div>
            <div className="footer-box2">
              <ul>
                <li>
                  <Link to="/build_pages">Team</Link>
                </li>
                <li>
                  <Link to="/build_pages">Join us</Link>
                </li>
                <li>
                  <Link to="/build_pages">Ethic</Link>
                </li>
                <li>
                  <Link to="/build_pages">Goals</Link>
                </li>
              </ul>
            </div>
            <div className="footer-box2">
              <ul>
                <li>
                  <Link to="/build_pages">Team</Link>
                </li>
                <li>
                  <Link to="/build_pages">Join us</Link>
                </li>
                <li>
                  <Link to="/build_pages">Ethic</Link>
                </li>
                <li>
                  <Link to="/build_pages">Goals</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
