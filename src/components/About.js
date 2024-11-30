import React from "react";
import "../index.css";
import InnovationSvg from "../assets/SVG/Innovation.svg";
import IndustrieSvg from "../assets/SVG/Industries.svg";

const About = () => {
  const FeaturedDetails = [
    {
      img: InnovationSvg,
      title: "Innovative Solutions",
      desc: "We thrive on innovation, crafting solutions that are not only functional but futuristic.",
    },
    {
      img: InnovationSvg,
      title: "Innovative Solutions",
      desc: "We thrive on innovation, crafting solutions that are not only functional but futuristic.",
    },
    {
      img: InnovationSvg,
      title: "Innovative Solutions",
      desc: "We thrive on innovation, crafting solutions that are not only functional but futuristic.",
    },
  ];

  return (
    <section className="bg-[#151515] w-full relative" id="about">
      {/* Star Decoration */}
      <div className="absolute top-0 right-4 xs:right-16 xl:right-36 2xl:right-44 opacity-65 md:opacity-85">
        <svg
          className=" h-[32rem] xl:h-[33rem]  2xl:h-[35rem]"
          viewBox="0 0 96 625"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.0655 0.42176L53.3221 576.058L95.6652 568.315L56.4898 586.153L76.9382 624.031L47.868 592.285L18.1627 623.437L39.3717 585.98L0.564407 567.355L42.7425 575.951L48.0655 0.42176Z"
            fill="url(#paint0_linear_261_151)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_261_151"
              x1="63.0957"
              y1="-364.712"
              x2="53.1159"
              y2="623.733"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.501" stop-color="#53C888" />
              <stop offset="1" stop-color="#3A86FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Content Headline */}
      <div className="flex flex-col items-center w-11/12 py-16 mx-auto">
        <h2 className="mb-5 text-3xl font-bold text-white  sm:mb-16 sm:text-4xl">
          Who We Are
        </h2>
        <p className="z-50 text-[0.9rem] leading-loose   xs:text-[1rem] xs:leading-loose text-center text-gray-300 md:text-lg">
          STARLABS stands for Specialized Team for Alternative Research Labs. At
          STARLABS, we are passionate about harnessing the power of technology
          to transform industries and lives. Our team of experts is dedicated to
          delivering innovative solutions that meet the unique needs of our
          customers. We believe in building long-term relationships with our
          customers, partners, and team members, and we strive to create a
          collaborative environment that fosters growth, learning, and success.
        </p>
      </div>

      {/* Features Grid */}
      <div className="relative w-11/12 pb-10 mx-auto">
        <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3">
          {FeaturedDetails.map((data, index) => (
            <div
              key={index}
              className={
                index == 1
                  ? "md:mt-44 lg:mt-32"
                  : index == 2
                  ? "md:mt-96 lg:mt-72"
                  : ""
              }
            >
              <div className="mb-4">
                <img src={data.img} alt="" className="w-56 h-56 mx-auto" />
              </div>
              <h3 className="w-9/12 mx-auto mb-3 text-2xl font-bold text-white lg:text-3xl">
                {data.title}
              </h3>
              <p className="w-9/12 mx-auto text-sm leading-7 text-left text-gray-400">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
