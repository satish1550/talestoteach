import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeRight">
        <div className="homeRightTitle">
          <img src="/images/home2.png" alt="home2" className="home2" />
          <h1>Tales To Teach</h1>
        </div>
        <div className="homeRightContent">
          <h1>Tales To Teach</h1>
          <h2>Learn Through Stories</h2>
          <p>
            Building FUNdamental Knowledge & skills in children with the help of
            Stories.
          </p>
          <button>KNOW MORE</button>
        </div>
      </div>
      <div className="homeLeft">
        <img src="/images/home1.png" alt="Satish" className="homeLeftImage" />
      </div>
    </div>
  );
}
