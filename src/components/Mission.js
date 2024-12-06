import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import PortalSvg from "../assets/SVG/Mission/Portal.svg";

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <>
      <div className="text-white bg-black " ref={ref}>
        <div className="max-w-screen-2xl mx-auto">
          <motion.h1
            className="mb-8 text-3xl font-bold text-center sm:text-4xl "
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </motion.h1>

          <motion.p
            className="w-11/12 mx-auto text-sm text-center text-gray-400 sm:text-lg"
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
            className="relative flex justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src={PortalSvg}
              alt=""
              className="w-[18rem] h-[18rem] xs:w-[25rem] xs:h-[25rem] md:w-[30rem] md:h-[30rem] xl:w-[50rem] xl:h-[50rem]"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Mission;
