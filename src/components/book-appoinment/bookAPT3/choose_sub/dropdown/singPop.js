import React from "react";
import "./singpop.css";

export default function singPop(props) {
  return (
    <div className="fountain">
      <div className="name-tag">
        <p> Singing </p>
      </div>
      <label className="gaps">
        <input
          className="radioin"
          type="radio"
          value="classic"
          name="music"
          id="myRadio1"
        />
        <label className="radio_label">Classical Music</label>
      </label>
      <label className="gaps">
        <input
          className="radioin"
          type="radio"
          value="sangeet"
          name="music"
          id="myRadio2"
        />
        <label className="radio_label">Rabindra Sangeet</label>
      </label>
      <label className="gaps">
        <input
          className="radioin"
          type="radio"
          value="Geeti"
          name="music"
          id="myRadio3"
        />
        <label className="radio_label">Najrul Geeti</label>
      </label>
      <label className="gaps">
        <input
          className="radioin"
          type="radio"
          value="bhajan"
          name="music"
          id="myRadio4"
        />
        <label className="radio_label">Bhajan</label>
      </label>
    </div>
  );
}