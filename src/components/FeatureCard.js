export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg text-center transition-shadow duration-300 ease-in-out hover:shadow-xl border border-gray-200">
      <div className="flex justify-center mb-4 text-4xl text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
