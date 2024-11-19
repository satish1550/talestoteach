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
        <Home />
        <About />
        <Catalogue />
        <Science />
        <Storytelling />
        <Contact />
      </div>
    </div>
  );
}

export default App;
