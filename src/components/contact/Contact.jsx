import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactLeft">
        <div className="contactLeftTop">
          <img src="/images/home2.png" alt="home2" className="home2" />
          <h1>Tales To Teach</h1>
        </div>
        <div className="contactLeftMiddle">
          <h1>We love Children & Children love Stories!</h1>
        </div>
        <div className="contactLeftBottom">
          <h1>talestoteach1@gmail.com</h1>
          <hr />
          <p>@talestoteach</p>
          <div className="social">
            <img src="/images/facebook.svg" alt="" />
            <img src="/images/twitter.svg" alt="" />
            <img src="/images/instagram.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="contactRight">
        <img src="/images/contact1.png" alt="" className="contact1" />
        <img src="/images/contact2.png" alt="" className="contact2" />
        <img src="/images/contact3.png" alt="" className="contact3" />
        <img src="/images/contact4.png" alt="" className="contact4" />
      </div>
    </div>
  );
}
