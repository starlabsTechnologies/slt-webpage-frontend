import FeatureCard from "./FeatureCard";
import { RocketIcon, ShieldCheckIcon, BrainIcon } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Who We Are Section */}
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Who We Are
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto text-center text-gray-700">
          STARLABS stands for Specialized Team for Alternative Research Labs. At
          STARLABS, we are passionate about harnessing the power of technology
          to transform industries and lives. Our team of experts is dedicated to
          delivering innovative solutions that meet the unique needs of our
          customers. We believe in building long-term relationships with our
          customers, partners, and team members, and we strive to create a
          collaborative environment that fosters growth, learning, and success.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<RocketIcon className="w-12 h-12 text-blue-600" />}
            title="Innovative Solutions"
            description="We thrive on innovation, crafting solutions that are not only functional but futuristic."
          />
          <FeatureCard
            icon={<ShieldCheckIcon className="w-12 h-12 text-blue-600" />}
            title="Expertise Across Industries"
            description="With deep expertise in Computer Systems Design and Technical Services, we cater to a wide range of industries."
          />
          <FeatureCard
            icon={<BrainIcon className="w-12 h-12 text-blue-600" />}
            title="Client-Centric Approach"
            description="Our solutions are designed with your unique business needs in mind, ensuring optimal performance and a competitive edge."
          />
        </div>
      </div>
    </section>
  );
}
