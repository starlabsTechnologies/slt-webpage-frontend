import React, { useEffect } from "react";
import { motion, useAnimation } from "motion/react";

const Loader = ({ handleLoading }) => {
  // creating sequence animation
  const svgAnimation = useAnimation();
  const textTransition = useAnimation();

  const pathVarient = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: [1, 0.5, 1, 0.2, 0.5, 1],
      transition: {
        duration: 1.3,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const svgvarient = {
    initial: {
      y: "-300%",

      rotate: 0,
      scale: 0.4,
    },
    animation: {
      y: ["-300%", "0%", "-50%"],
      rotate: [0, 360, 720],
      scale: [0.2, 1.4, 0.5],

      transition: {
        duration: 3,
        ease: [0.22, 1, 0.36, 1],
        times: [0, 0.6, 0.8, 1],
      },
    },
  };

  const textVariant = {
    initial: {
      opacity: 1,
      x: "16rem",
    },
    animate: {
      opacity: 1,
      x: "0",
    },
  };

  useEffect(() => {
    const sequence = async () => {
      await Promise.all([
        new Promise((resolve) =>
          setTimeout(() => {
            svgAnimation.start("animation").then(resolve);
          }, 0)
        ),
        new Promise((resolve) =>
          setTimeout(() => {
            textTransition.start("animate").then(resolve);
          }, 2000)
        ),
      ]);

      await handleLoading();
    };
    sequence();
  });

  return (
    <>
      <div className="relative">
        <div className="bg-[#151515] h-screen w-full flex lg:flex-row justify-center items-center ">
          <div className="flex justify-center items-center">
            <motion.svg
              className="w-40 h-36"
              viewBox="0 0 20 20"
              variants={svgvarient}
              initial="initial"
              animate={svgAnimation}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M10 0L11.2175 10.4177L20 8.93697L11.97 12.5971L16.1803 20L10 13.944L3.81966 20L8.03 12.5971L0 8.93697L8.78247 10.4177L10 0Z"
                fill="url(#paint0_linear_313_51)"
                variants={pathVarient}
                initial="initial"
                animate="animate"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_313_51"
                  x1="10"
                  y1="0"
                  x2="10"
                  y2="20"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.254" stop-color="#53C888" />
                  <stop offset="1" stop-color="#235192" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>

          <motion.div className="flex overflow-hidden absolute justify-center items-center text-2xl text-justify text-white lg:gap-3 -mt-15 lg:-mt-5 xl:text-4xl">
            {"STARLABS".split("").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={textVariant}
                initial="initial"
                animate={textTransition}
                transition={{
                  duration: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.25,
                  mass: 0.1,
                }}
              >
                {word === " " ? "\u00A0" : word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Loader;
