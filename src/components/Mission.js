export default function Mission() {
  return (
    <section id="mission" className="py-20 px-4 bg-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-4xl font-bold mb-4 text-blue-900 relative text-center">
            Our Mission
          </h3>
          <p className="text-2xl mb-8 text-gray-700">
            At STARLABS, our mission is to empower businesses and individuals
            with futuristic technology solutions that enhance their operational
            efficiency, productivity, profitability, and quality of life. We
            strive to create a connected world where technology seamlessly
            integrates with human life, making it easier, safer, and more
            convenient.
          </p>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <img
            src="https://website-container.s3.ap-south-1.amazonaws.com/mission.png"
            alt="Our Mission"
            className="w-full h-auto max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
