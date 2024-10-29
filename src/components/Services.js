export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
            <img
              src="/service/Service-IIOT.png"
              alt="IIOT-IOT Devices Development and Deployment"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
              <h3 className="text-xl font-bold">
                IIOT-IOT Devices Development and Deployment
              </h3>
              <p className="mt-2 text-sm">
                We design, develop, and deploy customized IIOT-IOT devices that
                cater to the specific needs of various industries, enabling them
                to automate processes and make data-driven decisions.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
            <img
              src="/service/Service-SAAS.png"
              alt="SAAS (Software as a Service)"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
              <h3 className="text-xl font-bold">
                SAAS (Software as a Service)
              </h3>
              <p className="mt-2 text-sm">
                Our SAAS solutions provide cloud-based software applications
                that are scalable, flexible, and cost-effective, allowing
                businesses to focus on their core competencies.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
            <img
              src="/service/Service-Industrial.png"
              alt="Industrial Software Solutions"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
              <h3 className="text-xl font-bold">
                Industrial Software Solutions
              </h3>
              <p className="mt-2 text-sm">
                We offer customized industrial software solutions that help
                businesses streamline operations, improve productivity, and
                reduce costs.
              </p>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
            <img
              src="/service/Service-NAS.png"
              alt="NAS (Network-Attached Storage)"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
              <h3 className="text-xl font-bold">
                NAS (Network-Attached Storage)
              </h3>
              <p className="mt-2 text-sm">
                Our NAS solutions provide secure, reliable, and scalable storage
                to meet the growing data storage needs of businesses.
              </p>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
            <img
              src="/service/Service-RFID.png"
              alt="Automatic RFID-based Boom Barriers"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
              <h3 className="text-xl font-bold">
                Automatic RFID-based Boom Barriers
              </h3>
              <p className="mt-2 text-sm">
                We design and deploy automatic RFID-based boom barriers that
                offer secure and efficient access control solutions for various
                industries.
              </p>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
            <img
              src="/service/Service-ANPR.png"
              alt="ANPR (Automatic Number Plate Recognition)"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
              <h3 className="text-xl font-bold">
                ANPR (Automatic Number Plate Recognition)
              </h3>
              <p className="mt-2 text-sm">
                Our ANPR solutions use AI-powered technology to recognize and
                track vehicle number plates, enabling businesses to efficiently
                manage their vehicle fleets.
              </p>
            </div>
          </div>

          {/* Service Card 7 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
            <img
              src="/service/Service-AI.png"
              alt="AI (Artificial Intelligence)"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
              <h3 className="text-xl font-bold">
                AI (Artificial Intelligence)
              </h3>
              <p className="mt-2 text-sm">
                We leverage AI technology to develop intelligent solutions that
                automate processes, provide insights from data, and support
                informed decision-making.
              </p>
            </div>
          </div>

          {/* Service Card 8 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
            <img
              src="/service/Service-HomeAuto.png"
              alt="Home Automation Systems"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
              <h3 className="text-xl font-bold">Home Automation Systems</h3>
              <p className="mt-2 text-sm">
                Our home automation systems allow users to control home
                appliances, lighting, temperature, and security systems
                remotely, making life more convenient.
              </p>
            </div>
          </div>

          {/* Service Card 9 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
            <img
              src="/service/Service-Home.png"
              alt="Home Security Systems"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
              <h3 className="text-xl font-bold">Home Security Systems</h3>
              <p className="mt-2 text-sm">
                We provide advanced home security systems with intrusion
                detection, video surveillance, and alarm features to ensure a
                safe living environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
