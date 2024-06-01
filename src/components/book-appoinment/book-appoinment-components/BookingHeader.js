import React from "react";
import "./bookingHeader.css";
import BookingNav from "./BookingNav";
export default function BookingHeader() {
  return (
    <>
      <div className="background-image">
        <div>
          <BookingNav />
        </div>
      </div>
    </>
  );
}
