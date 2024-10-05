import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="IIOT-IOT Devices Development and Deployment"
            description="We design, develop, and deploy customized IIOT-IOT devices that cater to the specific needs of various industries, enabling them to automate processes and make data-driven decisions."
          />
          <ServiceCard
            title="SAAS (Software as a Service)"
            description="Our SAAS solutions provide cloud-based software applications that are scalable, flexible, and cost-effective, allowing businesses to focus on their core competencies."
          />
          <ServiceCard
            title="Industrial Software Solutions"
            description="We offer customized industrial software solutions that help businesses streamline operations, improve productivity, and reduce costs."
          />
          <ServiceCard
            title="NAS (Network-Attached Storage)"
            description="Our NAS solutions provide secure, reliable, and scalable storage to meet the growing data storage needs of businesses."
          />
          <ServiceCard
            title="Automatic RFID-based Boom Barriers"
            description="We design and deploy automatic RFID-based boom barriers that offer secure and efficient access control solutions for various industries."
          />
          <ServiceCard
            title="ANPR (Automatic Number Plate Recognition)"
            description="Our ANPR solutions use AI-powered technology to recognize and track vehicle number plates, enabling businesses to efficiently manage their vehicle fleets."
          />
          <ServiceCard
            title="AI (Artificial Intelligence)"
            description="We leverage AI technology to develop intelligent solutions that automate processes, provide insights from data, and support informed decision-making."
          />
          <ServiceCard
            title="Home Automation Systems"
            description="Our home automation systems allow users to control home appliances, lighting, temperature, and security systems remotely, making life more convenient."
          />
          <ServiceCard
            title="Home Security Systems"
            description="We provide advanced home security systems with intrusion detection, video surveillance, and alarm features to ensure a safe living environment."
          />
        </div>
      </div>
    </section>
  );
}

////////With Carousel//////////

// import React from "react";
// import Slider from "react-slick";
// import ServiceCard from "./ServiceCard";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Services() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section id="services" className="py-20 px-4 bg-gray-200">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
//           Our Core Services
//         </h2>
//         <Slider {...settings}>
//           <ServiceCard
//             title="IIOT-IOT Devices Development and Deployment"
//             description="We design and deploy custom IIOT-IOT devices that meet the unique needs of industries, allowing them to automate processes, improve efficiency, and enhance decision-making through data insights."
//           />
//           <ServiceCard
//             title="SAAS (Software as a Service)"
//             description="We offer scalable, flexible, and cost-effective cloud-based SAAS applications, enabling businesses to streamline operations, focus on their strengths, and achieve growth with greater ease."
//           />
//           <ServiceCard
//             title="Industrial Software Solutions"
//             description="Our specialized software solutions help industrial clients optimize processes, boost productivity, and lower operational costs, with technology tailored to their business needs."
//           />
//           <ServiceCard
//             title="NAS (Network-Attached Storage)"
//             description="We provide robust, secure, and scalable NAS solutions designed to support growing data storage demands while ensuring business continuity and data protection for organizations."
//           />
//           <ServiceCard
//             title="Automatic RFID-based Boom Barriers"
//             description="We implement advanced RFID-based boom barriers, providing automated, secure, and streamlined access control systems that ensure reliable operations across various sectors."
//           />
//           <ServiceCard
//             title="ANPR (Automatic Number Plate Recognition)"
//             description="Our AI-powered ANPR technology automates the detection and tracking of vehicle plates, enhancing fleet management, security, and operational efficiency for our clients."
//           />
//           <ServiceCard
//             title="AI (Artificial Intelligence)"
//             description="We harness AI to create intelligent systems that automate workflows, deliver actionable insights from data, and help businesses make smarter, more informed decisions."
//           />
//           <ServiceCard
//             title="Home Automation Systems"
//             description="We provide smart home solutions, offering remote control of appliances, lighting, security, and more, enhancing comfort and convenience for modern living environments."
//           />
//           <ServiceCard
//             title="Home Security Systems"
//             description="Our home security offerings include intrusion detection, surveillance, and alarms, ensuring comprehensive protection for individuals and their homes."
//           />
//         </Slider>
//       </div>
//     </section>
//   );
// }
