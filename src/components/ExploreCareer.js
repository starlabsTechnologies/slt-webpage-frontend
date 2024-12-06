import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import ExploreSvg from "../assets/SVG/Careers/Explore.svg";

const ExploreCareer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
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

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className=" overflow-hidden max-w-screen-2xl mx-auto  text-white pt-28 py-16 flex items-center">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-11/12 mx-auto "
      >
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-center">
          <div className="space-y-6 ">
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:mb-10 sm:text-3xl md:text-[3.3vw] lg:text-3xl font-semibold leading-tight text-center md:text-left"
            >
              Explore Career Opportunities
            </motion.h2>
            {/* Mobile view the image is between headline and description */}
            <motion.div
              variants={imageVariants}
              className="relative mt-8 md:hidden lg:mt-0"
            >
              <div className="relative z-10">
                <img
                  src={ExploreSvg}
                  alt="Career illustration"
                  className="w-full max-w-64 mx-auto lg:max-w-md"
                />
              </div>

              <div className="absolute inset-0 grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                    className="w-1 h-1 sm:w-2 sm:h-2 bg-yellow-400 rounded-full justify-self-center self-center"
                  />
                ))}
              </div>
            </motion.div>
            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-center md:text-left sm:text-lg leading-loose text-gray-400 max-w-2xl mx-auto md:mx-0"
            >
              We&apos;re always looking for talented individuals to join our
              team! Whether you&apos;re a developer, consultant, marketer, or
              operations expert, we&apos;re excited to meet you.
            </motion.p>
            {/* Button  */}
            <motion.div variants={itemVariants}>
              <a
                href="/careers"
                className="hidden md:mt-8 md:inline-block px-6 sm:px-8 py-3 bg-emerald-400 text-black rounded-full font-medium hover:bg-emerald-500 transition-colors text-sm sm:text-base"
              >
                Explore Career
              </a>
            </motion.div>
          </div>
          {/* Image for larger screen from 786px */}
          <motion.div
            variants={imageVariants}
            className="relative hidden  md:flex justify-end mt-8 md:mt-0"
          >
            <div className="relative z-10">
              <img
                src={ExploreSvg}
                alt="Career illustration"
                className="w-full max-w-sm mx-auto md:max-w-lg xl:max-w-xs"
              />
            </div>

            <div className="absolute inset-0 grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-1 h-1 sm:w-2 sm:h-2 bg-yellow-400 rounded-full justify-self-center self-center"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreCareer;
