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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={`sticky top-0 bg-[#DFFD6E] z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''
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
            <h1 className="font-bold text-xl lg:text-2xl bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Tales To Teach
            </h1>
          </motion.div>

          <div className="hidden md:flex gap-8">
            {pages.map((page, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                onClick={() => scrollToSection(page.toLowerCase())}
                className="cursor-pointer font-medium hover:text-red-500 transition-colors duration-300"
              >
                {page}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="md:hidden cursor-pointer p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="space-y-1">
              <motion.span
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  translateY: menuOpen ? 8 : 0
                }}
                className="block h-0.5 w-6 bg-black origin-center transition-all duration-300"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="block h-0.5 w-6 bg-black transition-all duration-300"
              />
              <motion.span
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  translateY: menuOpen ? -8 : 0
                }}
                className="block h-0.5 w-6 bg-black origin-center transition-all duration-300"
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
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(page.toLowerCase())}
                    className="cursor-pointer font-medium hover:text-red-500 transition-colors duration-300 w-full text-center py-2"
                  >
                    {page}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}