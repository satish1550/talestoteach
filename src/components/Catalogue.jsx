import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Catalogue() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div ref={ref} id="catalogue" className="w-full min-h-screen text-white font-serif pb-5 bg-[#82a1fd] px-4 lg:px-0">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-36 py-10 lg:py-20 space-y-4 lg:space-y-0"
      >
        <h1 className="text-4xl lg:text-6xl font-light">Story Books</h1>
        <button className="h-10 w-fit bg-[#EEB4E7] font-bold rounded-full hover:bg-pink-400 transition duration-300 px-3 text-black">
          VIEW FULL CATALOGUE
        </button>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 px-4 lg:px-0">
        {/* Bablu Section */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full lg:w-96"
        >
          <img
            src="/images/catalogue1.png"
            alt="Bablu"
            className="w-full lg:w-80 h-[400px] lg:h-[470px] rounded-lg mx-auto object-cover"
          />
          <p className="bg-white text-black text-lg lg:text-xl font-light rounded-xl p-5 mt-4 shadow-md mx-auto">
            Join Bablu, the mischievous monkey, on his adventures with
            electricity. Through his antics, we learn about the basics of
            electricity and the importance of safety.
          </p>
        </motion.div>

        {/* Mother Ant Section */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full lg:w-96"
        >
          <img
            src="/images/catalogue2.png"
            alt="Mother Ant"
            className="w-full lg:w-80 h-[400px] lg:h-[470px] rounded-lg mx-auto object-cover"
          />
          <p className="bg-white text-black text-lg lg:text-xl font-light rounded-xl p-5 mt-4 shadow-md mx-auto">
            Journey with a mother ant as she searches for her lost son in the
            forest. Discover the food habits of different animals and learn
            about compassion and respect along the way.
          </p>
        </motion.div>

        {/* Scientist Grandpa Section */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full lg:w-96"
        >
          <img
            src="/images/catalogue3.png"
            alt="Scientist Grandpa"
            className="w-full lg:w-80 h-[400px] lg:h-[470px] rounded-lg mx-auto object-cover"
          />
          <span className="absolute text-3xl top-36 left-1/2 -translate-x-1/2 lg:left-[124px] lg:translate-x-0 font-bold" style={{
            fontStyle: "normal",
            color: "rgb(245, 48, 152)",
            fontKerning: "none",
            textDecoration: "none",
          }}>
            Grandpa
          </span>
          <p className="bg-white text-black text-lg lg:text-xl font-light rounded-xl p-5 mt-4 shadow-md mx-auto">
            Explore a college student's fond memories with his neighbor,
            Scientist Grandpa. Through their stories, we understand how
            chemistry is part of our daily lives.
          </p>
        </motion.div>
      </div>
    </div>
  );
}