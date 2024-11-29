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

const Services = () => {
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
  ];

  return (
    <>
      <section className="relative pt-16 pb-20 overflow-hidden text-white">
        {/* Top Curved Divider */}
        <div
          className="absolute top-0 left-0 z-20 flex justify-center w-full bg-black h-96"
          style={{ clipPath: " ellipse(70% 44% at 50% 4%)" }}
        >
          <h2 className="mt-16 text-4xl font-bold">Our Core Services</h2>
        </div>

        <div className="w-11/12 mx-auto text-5xl font-bold text-center">
          Our Core Services
        </div>

        {/* Section Content */}
        <div className="relative w-full min-h-screen overflow-hidden">
          {/* Title */}
          <div className="flex items-center justify-end w-11/12 pt-20 mx-auto mb-16"></div>
          {/* <div className="flex items-center justify-end w-11/12 pt-20 mx-auto mb-16">
            <button
              onClick={() => setShowAllServices((prevState) => !prevState)}
              className="z-20 px-6 py-2 text-sm transition border-2 border-white rounded-full hover:bg-white hover:text-black"
            >
              {showAllServices ? "Back" : "See all Services"}
            </button>
          </div> */}

          {/*  */}
          <div className="-mt-48">
            {!showAllServices ? (
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
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                >
                  {services.map(
                    (service, index) =>
                      index % 2 === 0 && (
                        <SwiperSlide key={index}>
                          <div className="pt-20 md:h-[125vh] lg:h-[118vh] xl:h-[109vh] w-full text-white bg-[#151515] rounded-lg  ">
                            <div className="w-11/12 pt-16 mx-auto ">
                              <div className="flex flex-col items-center p-6 space-y-4 text-white rounded-lg md:flex-row md:items-start md:space-y-0 md:space-x-6">
                                <div className="w-1/3">
                                  <img
                                    src={service.image}
                                    alt={service.title}
                                    className="object-cover mb-4 w-60 h-60"
                                  />
                                </div>
                                <div>
                                  <h2 className="mb-2 text-3xl font-semibold">
                                    {service.title}
                                  </h2>
                                  <p className="w-1/2 mt-6 text-sm text-gray-400">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                              {services[index + 1] && (
                                <div className="flex flex-col items-center justify-end p-6 space-y-4 text-white rounded-lg md:flex-row md:items-start md:space-y-0 md:space-x-6">
                                  <div className="w-1/2">
                                    <h2 className="mb-2 text-3xl font-semibold">
                                      {services[index + 1].title}
                                    </h2>
                                    <p className="w-8/12 mt-6 text-sm text-gray-400">
                                      {services[index + 1].description}
                                    </p>
                                  </div>
                                  <div className="w-1/6">
                                    <img
                                      src={services[index + 1].image}
                                      alt={services[index + 1].title}
                                      className="object-contain mb-4 w-60 h-60"
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
                <div className="absolute flex justify-center w-full mt-4 space-x-4 bottom-24">
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
          className="absolute bottom-0 left-0 z-20 w-full bg-black h-80"
          style={{ clipPath: " ellipse(70% 44% at 50% 100%)" }}
        ></div>
      </section>
    </>
  );
};

export default Services;
