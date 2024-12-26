import React from "react";
import "../index.css";
import InnovationSvg from "../assets/SVG/Innovation.svg";
import IndustrieSvg from "../assets/SVG/Industries.svg";
import ClientCentricSvg from "../assets/SVG/Client.svg";
import AboutBgSvg from "../assets/SVG/About/AboutBg.svg";

const About = () => {
  const FeaturedDetails = [
    {
      img: InnovationSvg,
      title: "Innovative Solutions",
      desc: "We thrive on innovation, crafting solutions that are not only functional but futuristic.",
    },
    {
      img: IndustrieSvg,
      title: "Expertise Across Industries",
      desc: "With deep expertise in Computer Systems Design and Technical Services, we cater to a wide range of industries.",
    },
    {
      img: ClientCentricSvg,
      title: "Client-Centric Approach",
      desc: "Our solutions are designed with your unique business needs in mind, ensuring optimal performance and a competitive edge.",
    },
  ];

  return (
    <section className="bg-black " id="about">
      <div className="relative mx-auto max-w-screen-2xl">
        {/* Curl at bottom */}
        <div className="absolute bottom-0 left-0 hidden w-full h-full overflow-hidden md:block">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1360 1349"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H1360V1346.5H757H374H356L37 1224.5L12 1213.5L0 1187V0Z"
              fill="#272525"
            />
            <path
              d="M-4.55379e-05 0H1360V1349H359C359 1349 283.36 1312.31 249 1273C208.398 1226.54 184 1129 184 1129C184 1129 118 1221.5 80.5 1221.5C43 1221.5 10.5176 1228.57 -4.55379e-05 1197.5C-4.1319 1185.29 -4.55379e-05 1164.5 -4.55379e-05 1164.5V0Z"
              fill="#151515"
            />
          </svg>
        </div>
        {/* Star Decoration */}
        <div className="absolute top-0 right-10 xs:right-16 md:right-[4.5rem] lg:right-24 xl:right-28 2xl:right-56 opacity-65 md:opacity-85">
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
        <div className="flex flex-col items-center w-11/12 py-16 mx-auto ">
          <h2 className="z-20 mb-5 text-3xl font-bold text-white sm:mb-16 sm:text-4xl">
            Who We Are
          </h2>
          <p className="z-30 text-[0.9rem] leading-loose   xs:text-[1rem] xs:leading-loose text-center text-gray-300 md:text-lg">
            STARLABS stands for Specialized Team for Alternative Research Labs.
            At STARLABS, we are passionate about harnessing the power of
            technology to transform industries and lives. Our team of experts is
            dedicated to delivering innovative solutions that meet the unique
            needs of our customers. We believe in building long-term
            relationships with our customers, partners, and team members, and we
            strive to create a collaborative environment that fosters growth,
            learning, and success.
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
      </div>
    </section>
  );
};

export default About;
