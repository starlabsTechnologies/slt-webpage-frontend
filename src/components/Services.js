import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Computer Systems Design and Development"
            description="We design, build, and implement customized software solutions that align with your business goals."
          />
          <ServiceCard
            title="IT Consulting and Technical Services"
            description="Our expert consultants work closely with your team to ensure your systems are robust, secure, and future-ready."
          />
          <ServiceCard
            title="Data-Driven Research and Innovation"
            description="We conduct extensive research to develop cutting-edge solutions that drive the future of technology."
          />
        </div>
      </div>
    </section>
  );
}
