import React from "react";
import { useState } from "react";
import Footer1 from "../../footer1/Footer_1";
import BookingHeader from "../book-appoinment-components/BookingHeader";
import BookingProgressBar from "../book-appoinment-components/BookingProgressBar";
import RadioButton from "../book-appoinment-components/RadioButton";
import BottomButtonGroup from "../book-appoinment-components/BottomButtonGroup";
import "./choosesub.css";
import imf from "./images/mukhos.png";
import cards from "./images/cards.png";
import chef from "./images/Chef.png";
import opmic from "./images/Open_mic.png";
import garden from "./images/Plants.png";
import Footer2 from "../../footer2/Footer_2";
import SingPop from "./dropdown/singPop";
import GardenPop from "./dropdown/gardenPop";
import PLcd from "./dropdown/playingCards";
import Cooking from "./dropdown/cookingPop";

export default function Bookapointment5() {
  const [drawer, setState] = useState(false);
  function handleChange(value) {
    setState(value);
  }
  return (
    <>
      <BookingHeader />
      <BookingProgressBar
        title="Schedule A Class"
        subtitle="Spend Time By Acquiring New Skills"
        value="1"
      />
      {/* here i'm using a string value 5 which indicates the progress */}
      <div className="middle-part">
        <div className="image-div">
          <img src={imf} className="left-image" alt="Learn Skills" />
        </div>
        <div className="element-div">
          <div className="element-row-div">
            <RadioButton
              value="chef"
              title="Cooking"
              img={chef}
              onClick={() => {
                handleChange("cook");
              }}
            />
            <RadioButton
              value="cards"
              title="Playing Cards"
              img={cards}
              onClick={() => {
                handleChange("plcd");
              }}
            />
            <RadioButton
              value="garden"
              title="Gardening"
              img={garden}
              onClick={() => {
                handleChange("garden");
              }}
            />
          </div>
          <div className="secdv">
          <div>{drawer === "cook" ? <Cooking /> : null}</div>
          <div>{drawer === "plcd" ? <PLcd/> : null}</div>
          <div>{drawer === "garden" ? <GardenPop /> : null}</div>
          </div>

          <div className="element-rowdiv">
            <RadioButton
              value="sing"
              title="Singing"
              img={opmic}
              onClick={() => {
                handleChange("sing");
              }}
            />
          </div>
          {drawer === "sing" ? <SingPop /> : null}
          <BottomButtonGroup />
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
}
