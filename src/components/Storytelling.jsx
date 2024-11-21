import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Storytelling() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const benefitVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div ref={ref} id="storytelling" className="w-full min-h-screen font-serif bg-[#eeb3e7] flex flex-col items-center justify-center p-4 lg:p-10">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
        className="text-3xl lg:text-[60px] text-white font-semibold mb-6 lg:pb-24 text-center"
      >
        Benefits of using Storytelling in Academics
      </motion.h1>

      <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-start gap-6 lg:gap-12 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl w-full lg:w-1/2 p-6 lg:p-10"
        >
          <h2 className="text-3xl lg:text-5xl font-semibold text-center mb-6 lg:mb-8">
            Academic Benefits
          </h2>
          <div className="space-y-4 lg:space-y-6">
            {[
              { img: "/images/academics1.png", text: "Makes Learning Easier" },
              { img: "/images/academics2.png", text: "Improved Interest in Studies" },
              { img: "/images/academics3.png", text: "Better Retention of Concepts" },
              { img: "/images/academics4.png", text: "Application of Concepts in Daily Life" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={benefitVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="flex items-center gap-4"
              >
                <img src={item.img} className="w-8 h-11 lg:w-10" alt={item.text} />
                <p className="text-xl lg:text-3xl font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl w-full lg:w-1/2 p-6 lg:p-10"
        >
          <h2 className="text-3xl lg:text-5xl font-semibold text-center mb-6 lg:mb-8">
            Overall Benefits
          </h2>
          <div className="space-y-4 lg:space-y-6">
            {[
              { img: "/images/benefits1.png", text: "Improves Creativity" },
              { img: "/images/benefits2.png", text: "Improves Critical Thinking" },
              { img: "/images/benefits3.png", text: "Improves Communication Skills" },
              { img: "/images/benefits4.png", text: "Promotes Collaborative Thinking" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={benefitVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="flex items-center gap-4"
              >
                <img src={item.img} className="w-8 h-9 lg:w-10 lg:h-11" alt={item.text} />
                <p className="text-xl lg:text-3xl font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}