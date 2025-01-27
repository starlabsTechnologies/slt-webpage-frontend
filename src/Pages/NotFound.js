import Stars from "../components/Star-Background";
import { Navbar, RotatingMoon } from "../components";
import { Suspense } from "react";
import Spheres from "../components/Sphere";
import AstroSvg from "../assets/SVG/Astronaut.svg";
import AnimatedLineSVG from "../components/NotFound/AnimatedLine";

const NotFound = () => {
  return (
    <div className="w-full relative min-h-screen  bg-gradient-to-b from-black to-[#2151ffdd]/50 overflow-hidden">
      <Navbar />
      <Stars count={200} />

      <div className="w-full pt-64 xs:pt-80 xl:pt-72 max-w-screen-2xl mx-auto text-white text-[12rem] flex flex-col justify-center items-center font-bold relative">
        <Suspense fallback={<div>Loading..</div>}>
          <div className=" absolute left-5 xs:left-12 sm:left-36 md:left-48 lg:left-80 xl:left-[35%]">
            4
          </div>
          {/* <RotatingMoon position={[0, 0, 50]} fov={45} /> */}

          <Spheres position={[0, 0, 50]} fov={40} />

          <div className=" absolute right-5 xs:right-14 sm:right-36 md:right-48 lg:right-80 xl:right-[36%]">
            4
          </div>
        </Suspense>
        <div className=" absolute top-48 xs:top-60 lg:top-52 xl:top-48">
          <img
            src={AstroSvg}
            alt="astro"
            className=" h-32 w-32 lg:h-48 lg:w-48"
          />
        </div>
        <div className=" absolute top-[5.5rem] left-[45%] xs:top-[8.5rem] lg:top-[7.5rem] lg:left-[48%] sm:left-[46%] md:left-[47.5%] xl:top-[6.5rem] xl:left-[49%] ">
          <AnimatedLineSVG />
        </div>

        <div className="w-full  text-4xl text-center absolute top-[30rem] xs:top-[35rem] font-AgencyFb tracking-[0.5rem]">
          Oops! Lost in the void?
        </div>
      </div>
    </div>
  );
};

export default NotFound;
