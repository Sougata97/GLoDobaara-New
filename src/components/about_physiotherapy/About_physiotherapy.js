import React from "react";
import './About_physiotherapy.css';
import img from './img.jpg'

export default function About_physiotherapy() {
  return (
    <>
      <section className="about_physiotherapy">
        <div className="container">
          <h2>
            <b>Do you need</b> any physiotherapist?
          </h2>
          <div className="d-flex flex-wrap">
            <div className="box">
              <img src={img} alt="" />
            </div>
            <div className="box-2">
              <div className="box-inner">
                <p>
                  if you have an injury, or chronic pain that affects how you
                  function everyday. A doctor may refer you to physiotherapy
                  after surgery such as a hip replacement, or an event such as a
                  heart attack or stroke
                </p>
                <br />
                <p>
                  Chronic pain that you usually feel on your back or neck always
                  interrupts daily routine. It can even last for months or
                  years. Thus, physical therapy helps treat pain and facilitates
                  mobility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
