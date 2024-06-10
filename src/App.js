import React from "react";
import "./App.css";
import About from "./components/about/About";
import Catalogue from "./components/catalogue/Catalogue";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Products from "./components/products/Products";
import Storytelling from "./components/storytelling/Storytelling";
import Team from "./components/team/Team";

function App() {
  return (
    <div>
      <div className="container">
        <Nav />
        <section id="home" className="home">
          <Home />
        </section>
        <section id="about" className="about">
          <About />
        </section>
        <section id="products" className="products">
          <Products />
        </section>
        <section id="catalogue" className="catalogue">
          <Catalogue />
        </section>
        <section id="storytelling" className="storytelling">
          <Storytelling />
        </section>
        <section id="team" className="team">
          <Team />
        </section>
        <section id="contact" className="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
