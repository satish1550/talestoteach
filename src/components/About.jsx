import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <div ref={ref} className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between font-serif bg-[#dffd6e] p-4 lg:p-0 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 h-[50vh] lg:h-screen mb-8 lg:mb-0"
      >
        <img
          src="/images/about1.png"
          alt="Satish"
          className="w-fit h-full object-cover rounded-2xl lg:rounded-none"
        />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:w-[45%] lg:mr-[5%]"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center bg-[#EEB4E7] w-[80%] lg:w-[70%] rounded-t-[40px] h-20 lg:h-28 px-3"
        >
          <h1 className="text-3xl lg:text-5xl font-light ml-3 lg:ml-5 pb-4 lg:pb-6">About Us</h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white w-full rounded-[40px] p-6 lg:p-10 mt-[-20px] lg:mt-[-30px] shadow-lg"
        >
          <p className="text-lg lg:text-2xl font-light font-sans leading-relaxed">
            At Tales To Teach, we craft <b>Stories</b> but, not just any stories!
            Our stories make learning Math, Science, Humanities, and
            Languages, enjoyable and easy.
            <br />
            <br />
            Click here to know more.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}