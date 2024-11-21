import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Science() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    return (
        <div ref={ref} id="science" className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between font-serif bg-[#DFFD6E] p-4 lg:p-0 overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-[50%] px-4 lg:m-20"
            >
                <h1 className="text-4xl lg:text-7xl pb-6 pt-3 text-center lg:text-left">Science Theatre</h1>
                <div className="w-full">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white w-full rounded-[40px] p-6 lg:p-10 shadow-lg"
                    >
                        <p className="text-lg lg:text-2xl font-light font-sans leading-relaxed">
                            Welcome to Science Theatre, where students turn stories into engaging theatrical performances! More than just acting, they collaborate to design props, create costumes, and set up stages, bringing lessons to life. This hands-on approach makes learning fun while building crucial 21st-century skills like creativity, communication, collaboration, and critical thinking. Science Theatre transforms traditional lessons into immersive, interactive experiences, making learning an exciting adventure for students.
                        </p>
                        <p className="text-lg lg:text-2xl font-light font-sans leading-relaxed mt-4">Let the show begin!</p>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="flex flex-col space-y-4 mt-8 lg:mt-0 lg:mr-20"
            >
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <img
                        src="/images/science1.png"
                        alt="Satish"
                        className="w-full lg:w-[500px] object-cover rounded-2xl lg:rounded-none"
                    />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <img
                        src="/images/science2.png"
                        alt="Satish"
                        className="w-full lg:w-[500px] object-cover rounded-2xl lg:rounded-none"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}