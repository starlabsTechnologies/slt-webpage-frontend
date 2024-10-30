export default function Culture() {
  return (
    <section id="culture" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
        {/* Image Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start">
          <img
            src="/culture.png"
            alt="Our Culture"
            className="w-full h-auto max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-4xl font-bold mb-4 text-blue-900 relative text-center">
            Our Culture
          </h3>
          <p className="text-2xl text-gray-700">
            At STARLABS TECHNOLOGIES PRIVATE LIMITED, we believe in creating a
            culture that is inclusive, collaborative, and innovative. We
            encourage our team members to think outside the box, experiment with
            new ideas, and push the boundaries of what is possible. We also
            believe in giving back to the community, and we are committed to
            supporting initiatives that promote education, innovation, and
            social responsibility.
          </p>
        </div>
      </div>
    </section>
  );
}
