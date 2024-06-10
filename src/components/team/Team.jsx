import React from "react";
import "./team.css";

export default function Team() {
  return (
    <div className="teamContainer">
      <div className="teamTop">
        <h1>The Founders</h1>
      </div>
      <div className="teamBottom">
        <div className="teamImg">
          <img src="/images/default.png" alt="" />
          <div className="teamName">
            <h1>Raviteja K</h1>
            <span>CMO</span>
          </div>
        </div>
        <div className="teamImg">
          <img src="/images/default.png" alt="" />
          <div className="teamName">
            <h1>Vamsi Krishna</h1>
            <span>CEO</span>
          </div>
        </div>
        <div className="teamImg">
          <img src="/images/default.png" alt="" />
          <div className="teamName">
            <h1>Siddhartha</h1>
            <span>CTO</span>
          </div>
        </div>
        <div className="teamImg">
          <img src="/images/default.png" alt="" />
          <div className="teamName">
            <h1>Sudarshan</h1>
            <span>COO</span>
          </div>
        </div>
      </div>
    </div>
  );
}
