import { motion, useInView } from "motion/react";
import React, { useRef, useEffect } from "react";
import ExploreSvg from "../assets/SVG/Careers/Explore.svg";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex items-center py-16 mx-auto overflow-hidden text-white max-w-screen-2xl pt-28">
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
                  className="w-full mx-auto max-w-64 lg:max-w-md"
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
                    className="self-center w-1 h-1 bg-yellow-400 rounded-full sm:w-2 sm:h-2 justify-self-center"
                  />
                ))}
              </div>
            </motion.div>
            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-sm leading-loose text-center text-gray-400 md:text-left sm:text-lg md:mx-0"
            >
              We&apos;re always looking for talented individuals to join our
              team! Whether you&apos;re a developer, consultant, marketer, or
              operations expert, we&apos;re excited to meet you.
            </motion.p>
            {/* Button  */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start"
            >
              <Link
                to="/careers"
                className="p-3 text-sm font-medium text-black transition-colors rounded-full md:px-6 md:py-3 md:mt-8 md:inline-block sm:px-8 bg-emerald-400 hover:bg-emerald-500 sm:text-base"
              >
                Explore Career
              </Link>
            </motion.div>
          </div>
          {/* Image for larger screen from 786px */}
          <motion.div
            variants={imageVariants}
            className="relative justify-end hidden mt-8 md:flex md:mt-0"
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
                  className="self-center w-1 h-1 bg-yellow-400 rounded-full sm:w-2 sm:h-2 justify-self-center"
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
