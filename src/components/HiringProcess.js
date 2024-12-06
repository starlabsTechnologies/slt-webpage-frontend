import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import TechInterviewSvg from "../assets/SVG/Careers/TechInterview.svg";
import CodingChallengeSvg from "../assets/SVG/Careers/CodingChallenge.svg";
import TechnicaldebrifSvg from "../assets/SVG/Careers/Technicaldebrif.svg";
import HRInterviewSvg from "../assets/SVG/Careers/HRInterview.svg";
import WelcomeSvg from "../assets/SVG/Careers/Welcome.svg";

const HiringProcess = () => {
  const swiperRef = useRef(null);

  const HiringDetails = [
    {
      title: "Technical Interview",
      description:
        "Kick things off with an engaging conversation where you’ll have the chance to showcase your technical expertise. Whether you’re applying for a Backend Developer role or another position, this is your opportunity to demonstrate your problem-solving skills, knowledge, and passion for technology",
      image: TechInterviewSvg,
    },
    {
      title: "Coding Challenge",
      description:
        "Next, we’ll ask you to complete a coding task that reflects the kind of work you’ll be doing with us. This task helps us understand your approach to real-world problems, your coding style, and your technical thought process.",
      image: CodingChallengeSvg,
    },
    {
      title: "Technical Debrief",
      description:
        "Once you've submitted the coding task, we’ll review your solution together. This is a collaborative discussion where we’ll explore your approach, ask about any challenges you faced, and dive deeper into your problem-solving methodology. It’s as much an opportunity for you to learn as it is for us to understand your skillset.",
      image: TechnicaldebrifSvg,
    },
    {
      title: "HR Interview",
      description:
        "In this round, we’ll explore your background, experience, and motivations in more detail. We'll discuss how your values align with our culture and vision, and we'll also answer any questions you have about life at Starlabs Technologies. We’re not just looking for skills—we’re looking for a great fit.",
      image: HRInterviewSvg,
    },

    {
      title: "Wlecome to Starlabs Technologies!",
      description:
        "If all goes well and we’re both excited about the opportunity, we’ll move forward with the next steps to welcome you aboard. We’ll finalize the details and set you up to start your journey with us—where exciting challenges, career growth, and innovation await!",
      image: WelcomeSvg,
    },
  ];
  return (
    <>
      <section
        className="relative pt-16 pb-20 max-w-screen-2xl mx-auto overflow-hidden text-white"
        id="services"
      >
        {/* Top Curved Divider */}
        <div
          className="absolute left-0 z-20 flex justify-center w-full bg-black top-6 xs:top-5 sm:top-0 h-96"
          style={{ clipPath: " ellipse(70% 44% at 50% 4%)" }}
        ></div>

        {/* Section Content */}
        <div className="relative w-full overflow-hidden">
          {/* Title */}
          <div className="flex items-center justify-end w-11/12 pt-20 mx-auto mb-16"></div>

          {/*  */}
          <div className="-mt-48 ">
            {
              <>
                {/* Swiper Slider */}
                <Swiper
                  modules={[EffectCoverflow, Autoplay]}
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView="auto"
                  coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 10,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  loop={true}
                  className="w-full "
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  speed={800} // Smooth out the slider animation
                  //   autoplay={{
                  //     delay: 3000,
                  //     disableOnInteraction: false,
                  //   }}
                >
                  {HiringDetails.map((service, index) => (
                    <SwiperSlide key={index}>
                      <div className="pt-20 pb-36   w-full text-white bg-[#151515] rounded-lg  ">
                        <div className="w-11/12 h-[40rem]  pt-16 mx-auto md:w-full ">
                          {/* Title  */}
                          <div className="text-center pt-16  ">
                            <h1 className="text-xl sm:text-3xl pb-5">
                              Ready To Make An Impact?
                            </h1>
                            <p className=" text-[0.8rem] leading-relaxed sm:text-base lg:text-lg text-gray-300 max-w-5xl mx-auto">
                              If you’re driven, curious, and ready to tackle new
                              challenges, we’d love to hear from you. Apply Now
                              and start your journey with Starlabs Technologies
                              today!
                            </p>
                            <div className=" text-gray-200 pt-10 tracking-wider text-base md:hidden">
                              <p>
                                Our Hiring Process: Here's How to Join the
                                Starlabs Technologies Team
                              </p>
                            </div>
                          </div>
                          {/* Image and description */}
                          <div className="flex md:items-center xs:mt-7 md:mt-20 text-white rounded-lg">
                            {/* Image */}
                            <div className="md:mr-20 max-md:w-8/12  ">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="object-cover md:w-80 lg:w-[23rem] lg:h-[24.5rem] md:h-80-ml-6 md:-ml-2"
                              />
                            </div>
                            <div className="w-8/12 md:-mt-16 md:w-1/2 lg:-mt-28 flex flex-col pt-2 ">
                              <div className=" hidden md:pb-8  md:flex text-gray-200 md:-ml-40 tracking-wider text-lg md:text-sm lg:text-lg">
                                <p>
                                  Our Hiring Process: Here's How to Join the
                                  Starlabs Technologies Team
                                </p>
                              </div>
                              <div className="md:mt-10 ">
                                <h2 className=" text-sm font-semibold tracking-tighter md:text-3xl">
                                  {index + 1}. {service.title}
                                </h2>
                                <p className="md:mt-8  text-[0.7rem] md:text-base xl:text-[1.1rem] leading-loose md:leading-relaxed  text-gray-400">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Custom Navigation Buttons */}
                <div className="absolute flex justify-center w-full mt-4 space-x-4 bottom-24 ">
                  <button
                    className="z-40 px-4 py-2 text-base font-semibold transition-all duration-100 ease-in border rounded-full text-white/60 border-white/60 hover:border-white hover:text-white"
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    &lt;
                  </button>
                  <button
                    className="z-40 px-4 py-2 text-base font-semibold transition-all duration-100 ease-in border rounded-full text-white/60 border-white/60 hover:border-white hover:text-white"
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    &gt;
                  </button>
                </div>
              </>
            }
          </div>
        </div>

        {/* Bottom Curved Divider */}
        <div
          className="absolute left-0 z-20  w-full bg-black bottom-6 md:bottom-0 h-80 md:h-96"
          style={{ clipPath: " ellipse(70% 44% at 50% 100%)" }}
        ></div>

        <div className=" absolute bottom-0 z-30 left-[45vw]">
          <a
            href="/careers"
            className="md:mt-8 inline-block px-6 sm:px-8 py-3 bg-emerald-400 text-black rounded-full font-medium hover:bg-emerald-500 transition-colors text-sm sm:text-base"
          >
            Explore Career
          </a>
        </div>
      </section>
    </>
  );
};

export default HiringProcess;
