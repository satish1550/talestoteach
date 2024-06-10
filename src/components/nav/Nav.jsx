import React from "react";
import "./nav.css";

export default function Nav() {
  const pages = ["Home", "About", "Catalogue", "Team", "Contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navContainer">
      <div className="logoContainer">
        <div className="logoImage">
          <img src="/images/home2.png" alt="Satish" className="logoImage" />
        </div>
        <div className="logo">
          <h1>Tales To Teach</h1>
        </div>
      </div>
      <div className="items">
        {pages.map((page, index) => (
          <div key={index} onClick={() => scrollToSection(page.toLowerCase())}>
            {page}
          </div>
        ))}
      </div>
    </div>
  );
}
