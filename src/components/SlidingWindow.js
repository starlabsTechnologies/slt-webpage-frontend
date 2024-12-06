import { motion } from "motion/react";
import React, { useEffect } from "react";

const SlidingWindow = ({ isOpen, navLinks, setIsOpen }) => {
  const slidingVariant = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: isOpen ? "0%" : "-100%",
      transition: {
        type: "spring",
        duration: 1,
        damping: 25,
      },
    },
    exit: {
      y: "-115%",
      transition: {
        type: "spring",
        damping: 30,
        duration: 1,
      },
    },
  };

  const pageVariant = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: isOpen ? "0%" : "-100%",
      transition: {
        type: "spring",
        duration: 1,
        damping: 25,
      },
    },
    exit: {
      y: "-115%",
      transition: {
        type: "spring",
        duration: 1,
        damping: 30,
      },
    },
  };

  const container = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.02,
      },
    },
  };
  const item = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
  };

  const handleNavigation = (section) => {
    setIsOpen(false); // Close the menu
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const date = new Date();
  return (
    <div className="relative h-screen overflow-hidden ">
      {isOpen && (
        <motion.div
          className="fixed top-0 right-0 z-30 flex items-center w-full h-full text-white bg-black "
          variants={slidingVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className="p-4"
            variants={container}
            initial="initial"
            animate="animate"
          >
            <div className="">
              <ul>
                {navLinks.map((links, index) => (
                  <li
                    key={index}
                    className="mb-3 overflow-hidden text-5xl font-semibold tracking-tighter md:text-6xl text-white/90"
                  >
                    <div
                      variants={item}
                      onClick={() => handleNavigation(links.name)}
                      className="uppercase"
                    >
                      {links.name}
                    </div>
                  </li>
                ))}
              </ul>

              <div>
                <div className="overflow-hidden">
                  <motion.h1
                    variants={item}
                    className="fixed text-sm font-medium text-center uppercase bottom-10 font"
                  >
                    Starlabs @{date.getFullYear()} || All rights reserved
                  </motion.h1>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SlidingWindow;
