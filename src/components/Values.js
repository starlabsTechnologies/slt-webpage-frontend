import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import IntegritySvg from "../assets/SVG/Values/Integrity.svg";
import InnovationSvg from "../assets/SVG/Values/Innovation.svg";
import CollaborationSvg from "../assets/SVG/Values/Collaboration.svg";
import SustainabilitySvg from "../assets/SVG/Values/Sustainability.svg";

const CustomStar = ({ filled }) => (
  <svg
    height={window.innerWidth <= 640 ? "110" : "64"}
    width={window.innerWidth <= 640 ? "100" : "64"}
    viewBox="0 0 64 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.1033 0L41.9613 24.1844L67.3903 24.1844L46.8178 39.1312L54.6758 63.3156L34.1033 48.3688L13.5308 63.3156L21.3888 39.1312L0.816292 24.1844L26.2453 24.1844L34.1033 0Z"
      fill={filled ? "#53C888" : "#4B5563"}
    />
  </svg>
);

const Values = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleStarClick = (index) => {
    setCurrentSlide(index);
  };

  const slides = [
    {
      title: "Integrity",
      description:
        "We prioritize transparency, honesty, and ethics in all our operations, building trust and long-term partnerships with our clients and stakeholders.",
      image: IntegritySvg,
    },
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative solutions to drive progress and stay ahead of industry trends.",
      image: InnovationSvg,
    },
    {
      title: "Collaboration",
      description:
        "Teamwork is vital for our success. We emphasize open communication and synergy between teams to overcome new challenges and craft solutions aligned with our goals.",
      image: CollaborationSvg,
    },
    {
      title: "Sustainability",
      description:
        "We are dedicated to developing sustainable solutions that benefit our clients and contribute to a better digital ecosystem.",
      image: SustainabilitySvg,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div
      className="relative z-40 pb-32 mx-auto -mt-20 overflow-hidden text-white max-w-screen-2xl sm:-mt-10 xl:-mt-16"
      id="values"
    >
      <div className="">
        <h1 className="mb-12 text-3xl font-bold text-center sm:text-4xl ">
          Our Values
        </h1>

        <div className="h-96 ">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <div className="flex flex-col items-center h-full gap-10 md:gap-8 sm:flex-row ">
              <div className="relative flex justify-center w-full py-4 sm:w-8/12 sm:justify-start md:h-full">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="object-contain h-[10rem] w-full sm:w-[30rem] sm:h-[30rem] rounded-lg"
                />
              </div>
              <div className="space-y-4 sm:w-full">
                <h2 className="text-3xl font-semibold">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-gray-400">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* star buttons */}
        <div className="relative flex items-center justify-center w-full mt-20 sm:mt-32">
          <svg
            width="100%"
            height="54"
            viewBox="0 0 2000 84"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background line */}
            <line
              x1="-200"
              y1={window.innerWidth < 768 ? "38 " : "24"}
              x2="2300"
              y2={window.innerWidth < 768 ? "38 " : "24"}
              stroke="#4B5563"
              strokeWidth="2"
              className="-z-20 "
            />
            {/* Animated foreground line */}
            <motion.line
              x1="-200"
              y1={window.innerWidth < 768 ? "38 " : "24"}
              x2={(currentSlide / (slides.length - 1)) * 2300}
              y2={window.innerWidth < 768 ? "38 " : "24"}
              stroke="#53C888"
              strokeWidth="3"
              initial={{ x2: 0 }}
              animate={{
                x2: (currentSlide / (slides.length - 1)) * 2300,
              }}
              transition={{ duration: 0.5 }}
              className="-z-20"
            />
            {/* Stars */}
            {slides.map((_, index) => (
              <g
                key={index}
                transform={`translate(${
                  (index / (slides.length - 1)) * 1900
                }, 0)`}
                onClick={() => handleStarClick(index)}
                className="cursor-pointer "
              >
                {/* Static star */}
                <CustomStar filled={false} />
                {/* Animated star fill */}
                <motion.g
                  initial={false}
                  animate={{
                    clipPath: `inset(0 ${
                      currentSlide >= index ? "0%" : "100%"
                    } 0 0)`,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <CustomStar filled={true} />
                </motion.g>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Values;
