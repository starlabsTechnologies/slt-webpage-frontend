export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
              <img
                src="https://website-container.s3.ap-south-1.amazonaws.com/Service/Service-IIOT.png"
                alt="IIOT-IOT Devices Development and Deployment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex items-end">
                <p className="text-sm text-white text-center">
                  We design, develop, and deploy customized IIOT-IOT devices
                  that cater to the specific needs of various industries,
                  enabling them to automate processes and make data-driven
                  decisions.
                </p>
              </div>
            </div>
            <h3 className="text-sm text-black font-bold mt-2 text-center">
              IIOT-IOT Devices Development and Deployment
            </h3>
          </div>

          {/* Service Card 2 */}

          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
              <img
                src="https://website-container.s3.ap-south-1.amazonaws.com/Service/Service-SaaS.png"
                alt="SAAS (Software as a Service)"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex items-end">
                <p className="text-sm text-white text-center">
                  Our SAAS solutions provide cloud-based software applications
                  that are scalable, flexible, and cost-effective, allowing
                  businesses to focus on their core competencies.
                </p>
              </div>
            </div>
            <h3 className="text-sm text-black font-bold mt-2 text-center">
              SAAS (Software as a Service)
            </h3>
          </div>

          {/* Service Card 3 */}

          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
              <img
                src="https://website-container.s3.ap-south-1.amazonaws.com/Service/Service-Industrial.png"
                alt="Industrial Software Solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex items-end">
                <p className="text-sm text-white text-center">
                  We offer customized industrial software solutions that help
                  businesses streamline operations, improve productivity, and
                  reduce costs.
                </p>
              </div>
            </div>
            <h3 className="text-sm text-black font-bold mt-2 text-center">
              Industrial Software Solutions
            </h3>
          </div>

          {/* Service Card 4 */}

          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
              <img
                src="https://website-container.s3.ap-south-1.amazonaws.com/Service/Service-NAS.png"
                alt="NAS (Network-Attached Storage)"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex items-end">
                <p className="text-sm text-white text-center">
                  Our NAS solutions provide secure, reliable, and scalable
                  storage to meet the growing data storage needs of businesses.
                </p>
              </div>
            </div>
            <h3 className="text-sm text-black font-bold mt-2 text-center">
              NAS (Network-Attached Storage)
            </h3>
          </div>

          {/* Service Card 5 */}

          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
              <img
                src="https://website-container.s3.ap-south-1.amazonaws.com/Service/Service-RFID.png"
                alt="Automatic RFID-based Boom Barriers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex items-end">
                <p className="text-sm text-white text-center">
                  We design and deploy automatic RFID-based boom barriers that
                  offer secure and efficient access control solutions for
                  various industries.
                </p>
              </div>
            </div>
            <h3 className="text-sm text-black font-bold mt-2 text-center">
              Automatic RFID-based Boom Barriers
            </h3>
          </div>

          {/* Service Card 6 */}

          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
              <img
                src="https://website-container.s3.ap-south-1.amazonaws.com/Service/Service-ANPR.png"
                alt="ANPR (Automatic Number Plate Recognition)"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex items-end">
                <p className="text-sm text-white text-center">
                  Our ANPR solutions use AI-powered technology to recognize and
                  track vehicle number plates, enabling businesses to
                  efficiently manage their vehicle fleets.
                </p>
              </div>
            </div>
            <h3 className="text-sm text-black font-bold mt-2 text-center">
              ANPR (Automatic Number Plate Recognition)
            </h3>
          </div>

          {/* Service Card 7 */}

          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
              <img
                src="https://website-container.s3.ap-south-1.amazonaws.com/Service/Service-AI.png"
                alt="AI (Artificial Intelligence)"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex items-end">
                <p className="text-sm text-white text-center">
                  We leverage AI technology to develop intelligent solutions
                  that automate processes, provide insights from data, and
                  support informed decision-making.
                </p>
              </div>
            </div>
            <h3 className="text-sm text-black font-bold mt-2 text-center">
              AI (Artificial Intelligence)
            </h3>
          </div>

          {/* Service Card 8 */}

          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
              <img
                src="https://website-container.s3.ap-south-1.amazonaws.com/Service/Service-HomeAuto.png"
                alt="Home Automation Systems"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex items-end">
                <p className="text-sm text-white text-center">
                  Our home automation systems allow users to control home
                  appliances, lighting, temperature, and security systems
                  remotely, making life more convenient.
                </p>
              </div>
            </div>
            <h3 className="text-sm text-black font-bold mt-2 text-center">
              Home Automation Systems
            </h3>
          </div>

          {/* Service Card 9 */}

          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
              <img
                src="https://website-container.s3.ap-south-1.amazonaws.com/Service/Service-Home.png"
                alt="Home Security Systems"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex items-end">
                <p className="text-sm text-white text-center">
                  We provide advanced home security systems with intrusion
                  detection, video surveillance, and alarm features to ensure a
                  safe living environment.
                </p>
              </div>
            </div>
            <h3 className="text-sm text-black font-bold mt-2 text-center">
              Home Security Systems
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function Services() {
//   return (
//     <section id="services" className="py-20 px-4 bg-gray-200">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">
//           Our Core Services
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Service Card 1 */}
//           <div className="flex flex-col items-center">
//             <div className="relative group overflow-hidden rounded-lg shadow-lg h-84 w-full md:w-3/4">
//               <img
//                 src="/service/Service-IIOT.png"
//                 alt="IIOT-IOT Devices Development and Deployment"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-4">
//                 <p className="text-sm text-white">
//                   We design, develop, and deploy customized IIOT-IOT devices
//                   that cater to the specific needs of various industries,
//                   enabling them to automate processes and make data-driven
//                   decisions.
//                 </p>
//               </div>
//             </div>
//             {/* Title displayed below the card */}
//             <h3 className="text-sm font-bold text-center text-blue-900 mt-4">
//               IIOT-IOT Devices Development and Deployment
//             </h3>
//           </div>

//           {/* Repeat similar structure for other service cards */}
//         </div>
//       </div>
//     </section>
//   );
// }
