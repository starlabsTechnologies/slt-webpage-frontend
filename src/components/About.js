export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="container mx-auto px-4">
        {/* Who We Are Section */}
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-900">
          Who We Are
        </h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto text-center text-gray-700">
          STARLABS stands for Specialized Team for Alternative Research Labs. At
          STARLABS, we are passionate about harnessing the power of technology
          to transform industries and lives. Our team of experts is dedicated to
          delivering innovative solutions that meet the unique needs of our
          customers. We believe in building long-term relationships with our
          customers, partners, and team members, and we strive to create a
          collaborative environment that fosters growth, learning, and success.
        </p>

        {/* Feature Sections */}
        <div className="space-y-12">
          {/* Innovative Solutions */}
          <div className="flex flex-col md:flex-row items-center md:justify-between bg-blue-100 p-8 rounded-lg shadow-md">
            <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4 text-blue-900">
                Innovative Solutions
              </h3>
              <p className="text-gray-700 text-lg">
                We thrive on innovation, crafting solutions that are not only
                functional but futuristic.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-end mt-6 md:mt-0">
              <img
                src="https://website-container.s3.ap-south-1.amazonaws.com/About/Innovative.png"
                alt="Innovative Solutions"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Expertise Across Industries */}
          <div className="flex flex-col md:flex-row items-center md:justify-between p-8 rounded-lg shadow-md bg-[#FFF7F7]">
            <div className="md:w-1/4 flex justify-start mb-6 md:mb-0">
              <img
                src="https://website-container.s3.ap-south-1.amazonaws.com/About/Expertise.png"
                alt="Expertise Across Industries"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4 text-blue-900">
                Expertise Across Industries
              </h3>
              <p className="text-gray-700 text-lg">
                With deep expertise in Computer Systems Design and Technical
                Services, we cater to a wide range of industries.
              </p>
            </div>
          </div>

          {/* Client-Centric Approach */}
          <div className="flex flex-col md:flex-row items-center md:justify-between bg-blue-100 p-8 rounded-lg shadow-md">
            <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4 text-blue-900">
                Client-Centric Approach
              </h3>
              <p className="text-gray-700 text-lg">
                Our solutions are designed with your unique business needs in
                mind, ensuring optimal performance and a competitive edge.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-end mt-6 md:mt-0">
              <img
                src="https://website-container.s3.ap-south-1.amazonaws.com/About/Client-Centric.png"
                alt="Client-Centric Approach"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
