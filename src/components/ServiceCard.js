export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl border border-gray-200">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
