import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import AISvg from "../assets/SVG/Services/AI.svg";
import ANPRSvg from "../assets/SVG/Services/ANPR.svg";
import HomeAutoSvg from "../assets/SVG/Services/HomeAutomated.svg";
import HomeSecuritySvg from "../assets/SVG/Services/HomeSecurity.svg";
import IotSvg from "../assets/SVG/Services/Iot.svg";
import ISsSvg from "../assets/SVG/Services/ISS.svg";
import NAsSvg from "../assets/SVG/Services/NAS.svg";
import RFIDSvg from "../assets/SVG/Services/RFID.svg";
import SaasSvg from "../assets/SVG/Services/SaaS.svg";
import { SplitText } from "./Animations";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);
  const swiperRef = useRef(null);
  const services = [
    {
      title: "IIOT-IOT Devices Development and Deployment",
      description:
        "We design, develop, and deploy customized IIOT-IOT devices that cater to the specific needs of various industries, enabling them to automate processes and make data-driven decisions.",
      image: IotSvg,
    },
    {
      title: "SAAS (Software as a Service)",
      description:
        "Our SAAS solutions provide cloud-based software applications that are scalable, flexible, and cost-effective, allowing businesses to focus on their core competencies.",
      image: SaasSvg,
    },
    {
      title: "Industrial Software Solutions",
      description:
        "We offer customized industrial software solutions that help businesses streamline operations, improve productivity, and reduce costs.",
      image: ISsSvg,
    },
    {
      title: "NAS (Network-Attached Storage)",
      description:
        "Our NAS solutions provide secure, reliable, and scalable storage to meet the growing data storage needs of businesses",
      image: NAsSvg,
    },
    {
      title: "Automatic RFID-based Boom Barriers",
      description:
        "We design and deploy automatic RFID-based boom barriers that offer secure and efficient access control solutions for various industries.",
      image: RFIDSvg,
    },
    {
      title: "ANPR (Automatic Number Plate Recognition)",
      description:
        "Our ANPR solutions use AI-powered technology to recognize and track vehicle number plates, enabling businesses to efficiently manage their vehicle fleets",
      image: ANPRSvg,
    },
    {
      title: "AI/ML Integration",
      description:
        "We leverage AI technology to develop intelligent solutions that automate processes, provide insights from data, and support informed decision-making.",
      image: AISvg,
    },
    {
      title: "Home Automation Systems",
      description:
        "Our home automation systems allow users to control home appliances, lighting, temperature, and security systems remotely, making life more convenient.",
      image: HomeAutoSvg,
    },
    {
      title: "Home Security Systems",
      description:
        "We provide advanced home security systems with intrusion detection, video surveillance, and alarm features to ensure a safe living environment.",
      image: HomeSecuritySvg,
    },
    {
      title: "SAAS (Software as a Service)",
      description:
        "Our SAAS solutions provide cloud-based software applications that are scalable, flexible, and cost-effective, allowing businesses to focus on their core competencies.",
      image: SaasSvg,
    },
  ];
  // console.log(activeIndex);

  return (
    <>
      <section
        className="relative pt-16 pb-20 mx-auto overflow-hidden text-white max-w-screen-2xl"
        id="services"
      >
        {/* Top Curved Divider */}
        <div
          className="absolute left-0 z-20 flex justify-center w-full bg-black top-6 xs:top-5 sm:top-0 h-96"
          style={{ clipPath: " ellipse(70% 44% at 50% 4%)" }}
        >
          <h2 className="mt-24 text-3xl font-bold sm:mt-28 sm:text-4xl">
            <SplitText text="Our Core Services" />
          </h2>
        </div>

        {/* Section Content */}
        <div className="relative w-full overflow-hidden">
          {/* Title */}
          <div className="flex items-center justify-end w-11/12 pt-32 mx-auto mb-16"></div>
          {/* <div className="flex items-center justify-end w-11/12 pt-20 mx-auto mb-16">
            <button
              onClick={() => setShowAllServices((prevState) => !prevState)}
              className="z-20 px-6 py-2 text-sm transition border-2 border-white rounded-full hover:bg-white hover:text-black"
            >
              {showAllServices ? "Back" : "See all Services"}
            </button>
          </div> */}

          {/*  */}
          <div className="-mt-48 ">
            {!showAllServices ? (
              <>
                {/* Swiper Slider */}
                <Swiper
                  modules={[EffectCoverflow, Autoplay]}
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 500,
                    modifier: 1.2,
                    slideShadows: true,
                  }}
                  loop={true}
                  className="w-full"
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  speed={1000}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  onSlideChange={(swiper) =>
                    setActiveIndex(swiper.realIndex * 2)
                  }
                >
                  {services.map(
                    (service, index) =>
                      index % 2 === 0 && (
                        <SwiperSlide key={index} className="mx-auto">
                          <div
                            className={`pt-44 sm:pt-36  w-10/12  mx-auto text-white bg-[#151515] rounded-lg overflow-hidden ${
                              activeIndex === index
                                ? "opacity-100 blur-0"
                                : "opacity-50 blur-md"
                            }`}
                            style={{
                              transformStyle: "preserve-3d",
                              perspective: "1200px",
                              transform: `
                                perspective(1200px)
                                rotateX(${activeIndex === index ? 0 : 5}deg)
                                rotateY(${activeIndex === index ? 0 : -5}deg)
                                translateZ(${activeIndex === index ? 50 : 0}px)
                              `,
                              transition:
                                "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                          >
                            <div className="flex flex-col  pt-4 mx-auto h-[34rem] xs:h-[30rem] sm:h-[33rem]  md:h-[37rem] lg:h-[40rem]">
                              <div className="flex text-white rounded-lg ">
                                <div className="  xs:w-[40%] ">
                                  <img
                                    src={service.image}
                                    alt={service.title}
                                    className="object-contain h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 2xl:h-72 2xl:w-72 -ml-2"
                                  />
                                </div>
                                <div className=" max-sm:pl-2 w-1/2 xs:w-10/12 md:mt-8 2xl:pr-56 space-y-3">
                                  <h2 className="text-[0.7rem] xs:text-[0.75rem] font-semibold tracking-tighter sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl ">
                                    {service.title}
                                  </h2>
                                  <p className="text-[0.7rem] sm:text-[0.8rem] md:text-base xl:text-[1.1rem] md:leading-relaxed  text-gray-400">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                              {services[index + 1] && (
                                <div className="flex justify-end text-white rounded-lg xs:-mt-8 lg:-mt-16 ">
                                  <div className="w-7/12 mt-16 sm:w-8/12 lg:w-7/12 space-y-3">
                                    <h2 className="mb-2 text-sm font-semibold tracking-tighter sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                                      {services[index + 1].title}
                                    </h2>
                                    <p className=" w-11/12 md:w-10/12  text-[0.7rem] sm:text-[0.8rem] md:text-base xl:text-[1.1rem] md:leading-relaxed  text-gray-400">
                                      {services[index + 1].description}
                                    </p>
                                  </div>
                                  <div className="mt-10 2xl:-mt-4 flex justify-end">
                                    <img
                                      src={services[index + 1].image}
                                      alt={services[index + 1].title}
                                      className="object-contain mb-4 h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 2xl:h-64 2xl:w-64 "
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                  )}
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
            ) : (
              /* Expanded View of All Services */
              <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 text-white bg-gray-800 rounded-lg shadow-lg"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-contain w-40 h-40 mb-4"
                    />
                    <h2 className="mb-2 text-lg font-semibold">
                      {service.title}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Curved Divider */}
        <div
          className="absolute left-0 z-20 w-full bg-black bottom-6 md:bottom-0 h-80 md:h-96"
          style={{ clipPath: " ellipse(70% 44% at 50% 100%)" }}
        ></div>
      </section>
    </>
  );
};

export default Services;
