import React from "react";
import { HiOutlineUsers } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./relation.css";

export default function relation(props) {
  return (
    <fieldset className="div-rlt">
      <legend align="left" className="legend-rlt">Relation</legend>
      <HiOutlineUsers className="user-rlt" size={40} />
      <div className="rlt-bar"></div>
      <input className="rlt-place" placeholder="Select Relation" />
      <RiArrowDropDownLine className="rlt-drop" size={50} />
    </fieldset>
  );
}
