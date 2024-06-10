import React from "react";
import "./products.css";

export default function Products() {
  return (
    <div className="productsContainer">
      <div className="productsTop">
        <h1>Our Products & Services</h1>
      </div>
      <div className="productsBottom">
        <div className="box1 box">
          <h1>Story Books</h1>
          <button>BUY NOW</button>
          <img src="/images/product1.gif" alt="" className="gif" />
        </div>
        <div className="box2 box">
          <h1>E-Books</h1>
          <button>BUY NOW</button>
          <img src="/images/product3.png" alt="" />
        </div>
        <div className="box3 box">
          <h1>Science Theatre</h1>
          <button>REGISTER NOW</button>
          <img src="/images/product5.png" alt="" />
        </div>
        <div className="box4 box">
          <h1>Story Workshops</h1>
          <button>REGISTER NOW</button>
          <img src="/images/product2.png" alt="" />
        </div>
        {/* 
        <div className="box5 box">
          <h1>Library Program</h1>
          <button>ORDER NOW</button>
          <img src="/images/product4.png" alt="" />
        </div>
        <div className="box6 box">
          <h1>The Basics Academy</h1>
          <button>JOIN NOW</button>
          <img src="/images/product6.png" alt="" />
        </div> */}
      </div>
    </div>
  );
}
