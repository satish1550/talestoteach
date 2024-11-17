import React, { useState } from "react";

export default function Nav() {
  const pages = ["Home", "About", "Catalogue", "Storytelling", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close menu after navigation
  };

  return (
    <nav className="sticky top-0 bg-[#DFFD6E] z-50 shadow-md">
      <div className="flex justify-between items-center px-6 h-16">
        <div className="flex items-center">
          <img
            src="/images/home2.png"
            alt="Tales To Teach"
            className="w-8 mr-2"
          />
          <h1 className="font-bold text-2xl bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            Tales To Teach
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {pages.map((page, index) => (
            <div
              key={index}
              onClick={() => scrollToSection(page.toLowerCase())}
              className="cursor-pointer font-medium hover:text-red-500 transition duration-300"
            >
              {page}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span
              className={`block h-1 w-6 bg-black transform transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-black transition duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-black transform transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-transform duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          {pages.map((page, index) => (
            <div
              key={index}
              onClick={() => scrollToSection(page.toLowerCase())}
              className="cursor-pointer font-medium hover:text-red-500 transition duration-300"
            >
              {page}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
