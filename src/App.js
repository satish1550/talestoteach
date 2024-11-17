import React from "react";
import "./App.css";
import About from "./components/About";
import Catalogue from "./components/Catalogue";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Storytelling from "./components/Storytelling";
import Science from "./components/ Science";

function App() {
  return (
    <div>
      <div className="">
        <Nav />
        <section id="home" className="home">
          <Home />
        </section>
        <section id="about" className="about">
          <About />
        </section>
        <section id="catalogue" className="catalogue">
          <Catalogue />
        </section>
        <section id="team" className="team">
          <Science />
        </section>
        <section id="storytelling" className="storytelling">
          <Storytelling />
        </section>
        <section id="contact" className="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
