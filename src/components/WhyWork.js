import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import workBg from "../assets/SVG/Careers/WorkBg.svg";
import { ChevronDown } from "lucide-react";

const WhyWork = () => {
  const reasons = [
    {
      title: "Be Part Of Something Big",
      info: "Join a fast-paced, high-energy startup where every day brings new challenges and opportunities to make a real impact.",
    },
    {
      title: "Work With The Best",
      info: "Collaborate with a diverse, dynamic team of tech experts, consultants, and problem solvers who are committed to pushing the boundaries of innovation.",
    },
    {
      title: "Shape Your Own Path",
      info: "As a startup, we value flexibility and initiative. Whether you're looking to dive deep into a specific project or broaden your skill set, you'll have the opportunity to grow, learn, and shape your career.",
    },
    {
      title: "Innovation Meets Opportunity",
      info: "We're building cutting-edge solutions to solve real-world problems. You’ll have the chance to work with the latest technology and contribute to projects that have the potential to change industries.",
    },
    {
      title: "Growth At Your Pace",
      info: "In a startup, growth isn’t just vertical—it’s horizontal too. Explore new roles, expand your responsibilities, and drive your own career trajectory. At Starlabs Technologies, we’re committed to your personal and professional development.",
    },
    {
      title: "Collaborative & Inclusive Culture",
      info: "We believe the best ideas come from diverse minds working together. We foster an environment where every voice is heard, every perspective is valued, and creativity thrives.",
    },
    {
      title: "A Place To Innovate, Not Just Work",
      info: "Bring your bold ideas to life and make your mark on exciting projects that truly make a difference for clients and industries.",
    },
    {
      title: "Perks & Flexibility",
      info: "From flexible hours and remote work options to competitive compensation packages and professional development opportunities, we’ve got you covered.",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset animation when out of view
    }
  }, [isInView, controls]);

  const [openDropdowns, setOpenDropdowns] = useState(
    Array(reasons.length).fill(false)
  );

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="p-6" ref={containerRef}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold text-white text-center mb-12"
      >
        Why Work With Us
      </motion.h2>
      <div
        style={{ backgroundImage: `url(${workBg})` }}
        className="max-w-screen-2xl mx-auto bg-center bg-cover relative"
      >
        <div className="mx-auto max-w-3xl">
          <div className="">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1, // Stagger the animations
                }}
                className="group relative z-40"
              >
                <div
                  className={`relative p-6 transition-colors cursor-pointer ${
                    index % 2 === 0 ? "bg-[#151515]" : "bg-[#202020]"
                  }`}
                  onClick={() => toggleDropdown(index)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-white font-mono">{index + 1}.</span>
                      <h3 className="text-gray-100">{reason.title}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openDropdowns[index] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-blue-500 scale-110" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {openDropdowns[index] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2, ease: "easeInOut" },
                        }}
                        className={`px-8 transition-colors text-gray-300 ${
                          index % 2 === 0 ? "bg-[#151515]" : "bg-[#202020]"
                        }`}
                      >
                        {reason.info}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute -top-16 hidden md:block lg:right-[14vw] xl:right-[12rem] 2xl:right-[20rem] z-10">
          <svg
            width="157"
            height="155"
            viewBox="0 0 157 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#53C888" />
                <stop offset="100%" stopColor="#FF4D4D" />
              </linearGradient>
            </defs>
            <motion.path
              d="M154.5 77.5C154.5 118.891 120.504 152.5 78.5 152.5C36.496 152.5 2.5 118.891 2.5 77.5C2.5 36.1088 36.496 2.5 78.5 2.5C120.504 2.5 154.5 36.1088 154.5 77.5Z"
              stroke="url(#gradient)"
              strokeWidth="5"
              variants={{
                hidden: { pathLength: 0, stroke: "#000" },
                visible: {
                  pathLength: 1,
                  transition: { duration: 2, ease: "easeInOut" },
                },
              }}
              initial="hidden"
              animate={controls}
            />
            {/* Separate color animation path */}
            <motion.path
              d="M154.5 77.5C154.5 118.891 120.504 152.5 78.5 152.5C36.496 152.5 2.5 118.891 2.5 77.5C2.5 36.1088 36.496 2.5 78.5 2.5C120.504 2.5 154.5 36.1088 154.5 77.5Z"
              stroke="url(#gradient)"
              strokeWidth="5"
              variants={{
                hidden: { stroke: "#000" },
                visible: {
                  stroke: ["#53C888", "#3A86FF", "#FFC857", "#FF4D4D"],
                  transition: {
                    duration: 3,
                    delay: 2, // Delay color change after the pathLength completes
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                },
              }}
              initial="hidden"
              animate={controls}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WhyWork;
