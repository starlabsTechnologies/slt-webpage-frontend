import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import HistoryImg from "../assets/Images/ourHistory.png";

const History = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const leftTextVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const rightImageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <motion.section
        ref={sectionRef}
        className="relative w-full pb-24 overflow-hidden text-white bg-black"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="w-11/12 mx-auto">
          <motion.h2
            className="mb-10 text-3xl font-bold text-center  sm:mb-20 sm:text-4xl"
            variants={titleVariants}
          >
            Our History
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Company Description */}
            <motion.div
              variants={leftTextVariants}
              className="flex items-center"
            >
              <p className="text-lg leading-relaxed text-gray-300">
                <span className="font-bold">
                  STARLABS TECHNOLOGIES PRIVATE LIMITED
                </span>{" "}
                was founded with a vision to revolutionize the way businesses
                and individuals interact with technology. Our founders, who are
                seasoned technology professionals, saw an opportunity to create
                a company that would bridge the gap between technology
                innovation and real-world problems. Since our inception, we have
                been committed to developing solutions that make a meaningful
                impact on our customers&apos; lives.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-end"
              variants={rightImageVariants}
            >
              <img src={HistoryImg} alt="" />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default History;
