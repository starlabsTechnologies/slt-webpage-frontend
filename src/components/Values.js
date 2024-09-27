import ValueCard from "./ValueCard";
import {
  HeartHandshakeIcon,
  LightbulbIcon,
  UsersIcon,
  LeafIcon,
} from "lucide-react";

export default function Values() {
  return (
    <section id="values" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
            icon={<HeartHandshakeIcon className="w-12 h-12 text-blue-600" />}
            title="Integrity"
            description="We prioritize transparency, honesty, and ethics in all our operations, building trust and long-term partnerships with our clients and stakeholders."
          />
          <ValueCard
            icon={<LightbulbIcon className="w-12 h-12 text-blue-600" />}
            title="Innovation"
            description="Our focus is innovation. We explore new ideas, push boundaries, and deliver forward-thinking solutions to empower businesses in a rapidly changing world."
          />
          <ValueCard
            icon={<UsersIcon className="w-12 h-12 text-blue-600" />}
            title="Collaboration"
            description="Teamwork is vital for our success. We emphasize open communication and collaboration, working closely with clients to understand their challenges and craft solutions aligned with their goals."
          />
          <ValueCard
            icon={<LeafIcon className="w-12 h-12 text-blue-600" />}
            title="Sustainability"
            description="We are dedicated to developing sustainable solutions that benefit our clients and contribute to a better digital ecosystem."
          />
        </div>
      </div>
    </section>
  );
}
