import React, { useRef } from "react";

import {
  Careers,
  CareerStarBg,
  ExploreCareer,
  Footer,
  HiringProcess,
  Navbar,
  WhyWork,
} from "../components";
import { motion, useInView } from "motion/react";

const ExploreCarrers = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      {/* Main page of Career i.e landing page of carrer */}
      <div className=" bg-black w-full">
        <Navbar />
        <ExploreCareer />

        {/* Title and Desciption */}
        <motion.div
          className="text-white max-w-screen-2xl mx-auto pb-20"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="w-11/12 mx-auto">
            <motion.h1
              className="text-center text-2xl lg:text-3xl mt-10 font-semibold "
              variants={itemVariants}
            >
              Join Our Journey to Innovate the Future!
            </motion.h1>
            <motion.p
              className="text-center pt-10 text-gray-400 text-sm sm:text-lg leading-loose"
              variants={itemVariants}
            >
              Join Our Journey to Innovate the Future! At Starlabs Technologies,
              we are transforming the consulting and tech landscape with
              innovative solutions that empower businesses and drive digital
              transformation. As a fast-growing startup, we’re looking for
              passionate individuals to help us shape the future.
            </motion.p>
          </div>
        </motion.div>

        {/* Why work with us section  */}
        <WhyWork />

        <HiringProcess />
        {/* Star bg */}
        <CareerStarBg />
        <Footer />
      </div>
    </>
  );
};

export default ExploreCarrers;
