import React from "react";
import "./playcard.css";

export default function playingCards(props) {
  return (
    <div className="caards">
      <div className="name-tag">
        <p> Playing </p>
      </div>
      <label className="gaps">
        <input
          className="radioin"
          type="radio"
          value="classic"
          name="music"
          id="myRadio1"
        />
        <label className="radio_label">Cards</label>
      </label>
      <label className="gaps">
        <input
          className="radioin"
          type="radio"
          value="sangeet"
          name="music"
          id="myRadio2"
        />
        <label className="radio_label">Chess</label>
      </label>
      <label className="gaps">
        <input
          className="radioin"
          type="radio"
          value="Geeti"
          name="music"
          id="myRadio3"
        />
        <label className="radio_label">Carom</label>
      </label>
    </div>
  );
}