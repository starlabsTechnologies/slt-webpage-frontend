export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl border border-gray-200 flex flex-col justify-between min-h-[250px] mx-4">
      {" "}
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
}
