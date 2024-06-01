import React from "react";

// import img from "../our_service/img.png";

export default function Our_serv_box2(props) {
  return (
    <>
      <div className="box text-left">
        <div className="img">
          <img src={props.img} alt="" />
        </div>
        <div className="text">
          <p>{props.p}</p>
          <div className="text-service">
            <a href={props.link} className="btn">
              <span>{props.btn_text}</span>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>{props.extrabtn}</span>
          </div>
        </div>
      </div>
    </>
  );
}
