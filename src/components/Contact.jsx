import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <div ref={ref} id="contact" className="w-full min-h-screen font-serif flex flex-col lg:flex-row items-center justify-around p-5 bg-[#dffd6e]">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-auto lg:pl-20 lg:-mr-60 mb-8 lg:mb-0"
      >
        <div className="w-full lg:w-[60%]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center mb-5"
          >
            <img src="/images/home2.png" alt="home2" className="w-12 h-12 lg:w-16 lg:h-16 mr-3" />
            <h1 className="text-3xl lg:text-[48px] font-normal">Tales To Teach</h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center bg-[#EEB4E7] w-full rounded-t-[40px] pb-[40px] pt-10px h-full"
          >
            <h1 className="text-3xl lg:text-[60px] font-normal text-center lg:leading-[80px] p-4">
              We love Children & Children love Stories!
            </h1>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full lg:w-[65%] bg-white rounded-[40px] p-5 shadow-lg mt-[-35px] flex flex-col justify-center items-start"
        >
          <h1 className="text-2xl lg:text-4xl font-medium">
            talestoteach1@gmail.com
          </h1>
          <hr className="w-full my-3 border-t-[2px] border-gray-800" />
          <p className="text-2xl lg:text-4xl font-medium">@talestoteach</p>
          <div className="flex gap-3 pt-5">
            <motion.img whileHover={{ scale: 1.1 }} src="/images/facebook.png" alt="facebook" className="w-8 lg:w-12" />
            <motion.img whileHover={{ scale: 1.1 }} src="/images/twitter.png" alt="twitter" className="w-8 lg:w-12" />
            <motion.img whileHover={{ scale: 1.1 }} src="/images/instagram.png" alt="instagram" className="w-8 lg:w-12" />
          </div>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 lg:mt-0">
        <motion.img
          initial={{ opacity: 0, rotate: 15 }}
          animate={isInView ? { opacity: 1, rotate: 15 } : { opacity: 0, rotate: 15 }}
          transition={{ duration: 0.5 }}
          src="/images/contact1.png"
          alt="contact1"
          className="h-60 lg:h-80"
        />
        <motion.img
          initial={{ opacity: 0, rotate: -5 }}
          animate={isInView ? { opacity: 1, rotate: -5 } : { opacity: 0, rotate: -5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          src="/images/contact2.png"
          alt="contact2"
          className="h-60 lg:h-80 mt-5 lg:mt-32 -ml-10"
        />
        <motion.img
          initial={{ opacity: 0, rotate: -10 }}
          animate={isInView ? { opacity: 1, rotate: -10 } : { opacity: 0, rotate: -10 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          src="/images/contact3.png"
          alt="contact3"
          className="h-60 lg:h-80"
        />
        <motion.img
          initial={{ opacity: 0, rotate: 10 }}
          animate={isInView ? { opacity: 1, rotate: 10 } : { opacity: 0, rotate: 10 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          src="/images/contact4.png"
          alt="contact4"
          className="h-60 lg:h-80 ml-7"
        />
      </div>
    </div>
  );
}