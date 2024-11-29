import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import PortalSvg from "../assets/SVG/Mission/Portal.svg";

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <>
      <div className="min-h-screen text-white bg-black" ref={ref}>
        <div className="mx-auto w-11/12">
          <motion.h1
            className="mb-8 text-4xl font-bold text-center sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </motion.h1>

          <motion.p
            className="mx-auto mb-5 w-full text-sm text-center text-gray-400 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At STARLABS, our mission is to empower businesses and individuals
            with futuristic technology solutions that enhance their operational
            efficiency, productivity, profitability, and quality of life. We
            strive to create a connected world where technology seamlessly
            integrates with human life, making it easier, safer, and more
            convenient.
          </motion.p>

          <motion.div
            className="flex relative justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src={PortalSvg} alt="" className="w-[50vw] h-[80vh]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Mission;
