import React from "react";

export default function Our_serv_box1(props) {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={props.img} alt="" />
        </div>
        <div className="text">
          <p>{props.p}</p>
          <a href={props.link} className="btn">
            {props.btn_text}
          </a>
        </div>
      </div>
    </>
  );
}
