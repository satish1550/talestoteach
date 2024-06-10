import React from "react";
import "./storytelling.css";

export default function Storytelling() {
  return (
    <div className="storytellingContainer">
      <div className="storytellingTop">
        <h1>Benefits of using Storytelling in academics</h1>
      </div>
      <div className="storytellingBottom">
        <div className="academics">
          <div className="academicsTop">
            <h1>Academic Benefits</h1>
          </div>
          <div className="academicsBottom">
            <div className="academicsBottomOne bottomText">
              <img src="/images/academics1" alt="" />
              <h1>Makes Learning Easier</h1>
            </div>
            <div className="academicsBottomTwo bottomText">
              <img src="/images/academics2" alt="" />
              <h1>Improved interest on studies</h1>
            </div>
            <div className="academicsBottomThree bottomText">
              <img src="/images/academics3" alt="" />
              <h1>Better Retention of Concepts</h1>
            </div>
            <div className="academicsBottomFour bottomText">
              <img src="/images/academics4" alt="" />
              <h1>Application of concepts in daily life</h1>
            </div>
          </div>
        </div>
        <div className="benefits">
          <div className="benefitsTop">
            <h1>Overall Benefits</h1>
          </div>
          <div className="benefitsBottom">
            <div className="benefitsBottomOne bottomText">
              <img src="/images/benefits1" alt="" />
              <h1>Improves Creativity</h1>
            </div>
            <div className="benefitsBottomTwo bottomText">
              <img src="/images/benefits2" alt="" />
              <h1>Improves Critical Thinking</h1>
            </div>
            <div className="benefitsBottomThree bottomText">
              <img src="/images/benefits3" alt="" />
              <h1>Improves Communication Skills</h1>
            </div>
            <div className="benefitsBottomFour bottomText">
              <img src="/images/benefits4" alt="" />
              <h1>Promotes Collaborative thinking</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
