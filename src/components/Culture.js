import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import EllipseSvg from "../assets/SVG/Culture/Ellipse.svg";
import BulbSvg from "../assets/SVG/Culture/Bulb.svg";

const Culture = () => {
  const ref = useRef();
  const inView = useInView(ref, { amount: 0.5, once: true });
  return (
    <div className="relative pb-24 max-w-screen-2xl mx-auto overflow-hidden bg-black">
      <div className="relative w-11/12 mx-auto text-center" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-3xl font-bold text-white sm:text-4xl "
        >
          Our Culture
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full mx-auto mb-16 text-gray-300"
        >
          At STARLABS TECHNOLOGIES PRIVATE LIMITED, we believe in creating a
          culture that is inclusive, collaborative, and innovative. We encourage
          our team members to think outside the box, experiment with new ideas,
          and push the boundaries of what is possible. We also believe in giving
          back to the community, and we are committed to making a positive
          impact.
        </motion.p>
      </div>

      <div className="relative flex items-center justify-center w-full">
        <motion.img
          src={EllipseSvg}
          alt=""
          className="object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          style={{ filter: "blur(20px)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="absolute"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src={BulbSvg} alt="" className="w-[40rem] h-[40rem]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Culture;
