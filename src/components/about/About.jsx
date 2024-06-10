import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutRight">
        <img
          src="/images/about1.png"
          alt="Satish"
          className="aboutRightImage"
        />
      </div>
      <div className="aboutLeft">
        <div className="aboutLeftTitle">
          <h1>About Us</h1>
        </div>
        <div className="aboutLeftContent">
          <p>
            Tales To Teach is an Indian educational startup that uses
            storytelling to simplify and teach essential subjects like
            languages, sciences, math, and social sciences and broader con
            Design Thinking, Financial Literacy, and Empathy. Our stories are
            accessible online and offline, aiming to reshape school curricula by
            prioritizing fundamental understanding over overwhelming textbook
            content.
          </p>
        </div>
      </div>
    </div>
  );
}
