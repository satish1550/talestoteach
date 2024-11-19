import React from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <motion.div 
      style={{ opacity, y }}
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between font-serif bg-[#82a1fd] relative overflow-hidden px-4 lg:px-0"
    >
      <div className="flex h-auto lg:h-screen justify-start items-start w-full lg:w-3/5 mt-10 lg:mt-0">
        <div className="mx-4 lg:m-20 flex flex-col items-start w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center bg-[#DFFD6E] w-full lg:w-[80%] rounded-t-[40px] h-20 lg:h-32 px-3"
          >
            <img 
              src="/images/home2.png" 
              alt="home2" 
              className="h-10 w-10 lg:h-16 lg:w-16 mr-3 -mt-[30px]" 
            />
            <h1 className="text-2xl lg:text-5xl font-[Domine] -mt-[30px]">Tales To Teach</h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="bg-white w-full lg:w-[110%] rounded-[40px] py-4 lg:py-5 px-4 lg:px-10 mt-[-35px] shadow-lg"
          >
            <h1 className="text-4xl lg:text-[96px] font-normal mb-3 lg:mb-5 leading-tight">
              Tales To Teach
            </h1>
            <h2 className="text-lg lg:text-2xl font-semibold mb-2 lg:mb-3">
              Learn Through Stories
            </h2>
            <p className="text-base lg:text-2xl font-light mb-3 lg:mb-5">
              Building FUNdamental Knowledge & skills in children with the help of Stories.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="w-full lg:w-1/2 h-[40vh] lg:h-full mt-4 lg:mt-0"
      >
        <img
          src="/images/home1.png"
          alt="Satish"
          className="lg:absolute bottom-0 right-0 h-full w-full lg:h-[100%] lg:w-auto object-cover"
        />
      </motion.div>
    </motion.div>
  );
}