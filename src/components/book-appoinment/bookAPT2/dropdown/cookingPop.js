import React from "react";
import "./cooking.css";

export default function cooking(props) {
  return (
    <div className="cook">
      <div className="name-tag">
        <p> Cooking </p>
      </div>
      <label className="gaps">
        <input
          className="radioin"
          type="radio"
          value="classic"
          name="music"
          id="myRadio1"
        />
        <label className="radio_label">Cooking Indian Dishes</label>
      </label>
      <label className="gaps">
        <input
          className="radioin"
          type="radio"
          value="sangeet"
          name="music"
          id="myRadio2"
        />
        <label className="radio_label">Cooking Chinese Dishes</label>
      </label>
      <label className="gaps">
        <input
          className="radioin"
          type="radio"
          value="Geeti"
          name="music"
          id="myRadio3"
        />
        <label className="radio_label">Cooking Continental Dishes</label>
      </label>
      <label className="gaps">
        <input
          className="radioin"
          type="radio"
          value="bhajan"
          name="music"
          id="myRadio4"
        />
        <label className="radio_label">Baking Cakes & Pastries</label>
      </label>
      <label className="gaps">
        <input
          className="radioin"
          type="radio"
          value="bhajan"
          name="music"
          id="myRadio4"
        />
        <label className="radio_label">Making Chocolates</label>
      </label>
    </div>
  );
}