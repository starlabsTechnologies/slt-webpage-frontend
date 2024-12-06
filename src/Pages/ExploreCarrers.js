import React from "react";

import {
  Careers,
  CareerStarBg,
  ExploreCareer,
  Footer,
  HiringProcess,
  Navbar,
  WhyWork,
} from "../components";

const ExploreCarrers = () => {
  return (
    <>
      {/* Main page of Career i.e landing page of carrer */}
      <div className="bg-black min-h-screen">
        <Navbar />
        <ExploreCareer />

        {/* Title and Desciption */}
        <div className="text-white max-w-screen-2xl mx-auto pb-20">
          <div className="w-11/12 mx-auto">
            <h1 className="text-center text-2xl lg:text-3xl mt-10 font-semibold ">
              Join Our Journey to Innovate the Future!
            </h1>
            <p className="text-center pt-10 text-gray-400 text-sm sm:text-lg leading-loose">
              Join Our Journey to Innovate the Future! At Starlabs Technologies,
              we are transforming the consulting and tech landscape with
              innovative solutions that empower businesses and drive digital
              transformation. As a fast-growing startup, we’re looking for
              passionate individuals to help us shape the future.
            </p>
          </div>
        </div>

        {/* Why work with us section  */}
        <WhyWork />

        <HiringProcess />
        {/* Star bg */}
        <CareerStarBg />
        <Footer />
      </div>
    </>
  );
};

export default ExploreCarrers;
