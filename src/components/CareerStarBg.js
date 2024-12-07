import { motion, useAnimation, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";

const CareerStarBg = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset animation when out of view
    }
  }, [isInView, controls]);

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const colorVariants = {
    hidden: { stroke: "#000" },
    visible: {
      stroke: ["#53C888", "#3A86FF", "#FFC857", "#FF4D4D"],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };
  return (
    <div
      ref={containerRef}
      className="py-10 max-w-screen-2xl mx-auto flex flex-col gap-5 overflow-hidden"
    >
      <svg
        className="w-10/12 h-auto"
        viewBox="0 0 1277 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M1276.56 35.551L1237.16 39.9893L1251.04 69.3049L1226.23 44.7733L1200.83 68.6953L1215.42 39.7254L0.272747 31.6399L1215.54 29.8935L1201.66 0.577974L1226.47 25.1095L1251.87 1.18753L1237.28 30.1575L1276.56 35.551Z"
          strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          style={{
            stroke: "url(#paint0_linear_253_2266)",
          }}
        />
        <defs>
          <linearGradient
            id="paint0_linear_253_2266"
            x1="638.9"
            y1="-6.25382"
            x2="638.073"
            y2="61.8635"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.2" stopColor="#53C888" />
            <stop offset="0.741" stopColor="#3A86FF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Second SVG */}
      <svg
        className="w-9/12 h-auto"
        viewBox="0 0 1159 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M1159 18.5001L1141.94 21.1703L1148.11 37.0001L1137.23 23.8406L1126.34 37.0001L1132.51 21.1703L0 18.5001L1132.51 15.8298L1126.34 6.10352e-05L1137.23 13.1596L1148.11 6.10352e-05L1141.94 15.8298L1159 18.5001Z"
          strokeWidth="2"
          variants={{ ...pathVariants, ...colorVariants }}
          initial="hidden"
          animate={controls}
        />
      </svg>

      {/* Third SVG */}
      <svg
        className="w-10/12 h-auto"
        viewBox="0 0 1226 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0 31.4699L1187.46 23.5308L1178.48 6.10352e-05L1194.32 19.5615L1210.16 6.10352e-05L1201.18 23.5308L1226 27.5001L1201.18 31.4693L1210.16 55.0001L1194.32 35.4386L1178.48 55.0001L1187.46 31.4693L0 31.4699Z"
          strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          style={{
            stroke: "url(#paint0_linear_253_2267)",
          }}
        />
        <defs>
          <linearGradient
            id="paint0_linear_253_2267"
            x1="613"
            y1="55.0001"
            x2="613"
            y2="6.10352e-05"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.2" stopColor="#53C888" />
            <stop offset="0.741" stopColor="#3A86FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CareerStarBg;
