import React from "react";
import img1 from "../our_service/img1.png";
import img4 from "../our_service/img4.png";
import img5 from "../our_service/img5.png";
import img8 from "../our_service/img8.png";
import img2 from "../our_service/img2.png";
import img3 from "../our_service/img3.png";
import img6 from "../our_service/img6.png";
import img7 from "../our_service/img7.png";
import "./our_service.css";

import Our_serv_box1 from "./Our_serv_box1";
import Our_serv_box2 from "./Our_serv_box2";

export default function Our_service() {
  return (
    <>
      <section className="our_service">
        <div className="container our-wrap">
          <div className="heading text-center">
            <h2>
              <b>OUR</b> SERVICES
            </h2>
          </div>
          <div className="content d-flex">
            <Our_serv_box1
              img={img1}
              p="Let’s spend some quality time together. Book an appointment with our representative and spend some quality time playing cards, carom, chess, reading, books, or simply by adda"
              btn_text={<span>Book Now</span>}
              link="/bookapointment1"
            />
            <Our_serv_box2
              img={img2}
              p="Learn cooking, gardening, card playing, and singing, at your home as recreational activities. Book an appointment with our representative and start learning at home comfortably"
              btn_text="Book Now"
              link="/bookapointment2"
            />
            <Our_serv_box2
              img={img3}
              p="Shall visit abroad soon? Learn spoken English, French, German, Japanese, etc as recreational activities. Book an appointment with our representatives."
              btn_text="Book Now"
              link="/bookapointment3"
            />
            <Our_serv_box1
              img={img4}
              p="Boring of cooking at home? Book our Home Delivery Food service. Select Menu for seven days as per your food habit."
              btn_text={<span>Select Menu</span>}
              link="/bookapointment4"
            />
            <Our_serv_box1
              img={img5}
              p="Do you have a reason to celebrate? We can organize your birthday, marriage anniversary, and rice ceremony as a remarkable day."
              btn_text={<span>Tell us about your Event</span>}
              link="/bookapointment5"
            />
            <Our_serv_box2
              img={img6}
              p="Do you need a plumber, electrician, and mechanic? We can send one from thousands of our experts."
              btn_text="Book Now"
              link="/bookapointment6"
            />
            <Our_serv_box2
              img={img7}
              p="Do you need medical help? Call us to talk to one of our expert doctors or in case of an emergency."
              btn_text={
                <>
                  <span>Call Doctor</span>
                </>
              }
              extrabtn={
                <>
                  <a href="#" className="btn">
                    <span>Emergency</span>
                  </a>
                </>
              }
              link="/bookapointment7"
            />
            <Our_serv_box1
              img={img8}
              p="Do you want to get the benefit of alternative medicines? Talk to experts in Homeopathy, Ayurveda, Physiotherapy, Yoga, etc."
              btn_text={<span>Learn More</span>}
              link="/bookapointment8"
            />
          </div>
          <div className="more">
            <a href="#" className="btn">
              More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
