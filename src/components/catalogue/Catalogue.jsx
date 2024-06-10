import React from "react";
import "./catalogue.css";

export default function Catalogue() {
  return (
    <div className="catalogueContainer">
      <div className="catalogueTop">
        <h1>Catalogue</h1>
        <button>VIEW FULL CATALOGUE</button>
      </div>
      <div className="catalogueBottom">
        <div className="bablu catalogueImg">
          <img src="/images/catalogue1.png" alt="" />
          <p>
            Join Bablu, the mischievous monkey, on his adventures with
            electricity. Through his antics, we learn about the basics of
            electricity and the importance of safety.
          </p>
        </div>
        <div className="mother catalogueImg">
          <img src="/images/catalogue2.png" alt="" />
          <p>
            Journey with a mother ant as she searches for her lost son in the
            forest. Discover the food habits of different animals and learn
            about compassion and respect along the way.
          </p>
        </div>
        <div className="scientist catalogueImg">
          <img src="/images/catalogue3.png" alt="" />
          {/* <span>Grandpa</span> */}
          <p>
            Explore a college student's fond memories with his neighbor,
            Scientist Grandpa. Through their stories, we understand how
            chemistry is part of our daily lives.
          </p>
        </div>
      </div>
    </div>
  );
}
