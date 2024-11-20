import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const pages = ["Home", "About", "Catalogue", "Storytelling", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    // Close menu first
    setMenuOpen(false);

    // Wait for menu animation to complete
    setTimeout(() => {
      const element = document.getElementById(id.toLowerCase());
      if (element) {
        const navHeight = 64;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        
        // Scroll with offset
        window.scrollTo({
          top: elementTop - navHeight,
          behavior: "smooth"
        });
      }
    }, 300);
  };

  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 }
  };

  const middleLineVariants = {
    closed: { opacity: 1, x: 0 },
    open: { opacity: 0, x: 20 }
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 lg:px-6 h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/home2.png"
              alt="Tales To Teach"
              className="w-8 mr-2"
            />
            <h1 className="font-bold text-xl lg:text-2xl text-black">
              Tales To Teach
            </h1>
          </motion.div>

          <div className="hidden md:flex gap-8">
            {pages.map((page, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                onClick={() => scrollToSection(page)}
                className="cursor-pointer font-medium hover:font-bold transition-colors duration-300 bg-transparent"
              >
                {page}
              </motion.button>
            ))}
          </div>

          <motion.div
            className="md:hidden cursor-pointer p-2 w-8 h-8 flex flex-col justify-center items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-6 h-6 mr-12">
              <motion.span
                initial="closed"
                animate={menuOpen ? "open" : "closed"}
                variants={topLineVariants}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute block h-0.5 w-6 bg-black"
                style={{ top: "2px" }}
              />
              <motion.span
                initial="closed"
                animate={menuOpen ? "open" : "closed"}
                variants={middleLineVariants}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-1/2 -translate-y-1/2 block h-0.5 w-6 bg-black"
              />
              <motion.span
                initial="closed"
                animate={menuOpen ? "open" : "closed"}
                variants={bottomLineVariants}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute block h-0.5 w-6 bg-black"
                style={{ bottom: "0px" }}
              />
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="flex flex-col items-center py-4 space-y-4">
                {pages.map((page, index) => (
                  <motion.button
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(page)}
                    className="cursor-pointer font-medium hover:text-red-500 transition-colors duration-300 w-full text-center py-2 bg-transparent"
                  >
                    {page}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}