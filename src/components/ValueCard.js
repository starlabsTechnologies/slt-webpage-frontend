import { motion } from "framer-motion";

export default function ValueCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg text-center relative overflow-hidden border border-gray-200"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex justify-center mb-4 text-4xl">
        {icon && <span>{icon}</span>}
      </div>

      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

      {description && (
        <motion.div
          className="absolute inset-0 bg-white bg-opacity-90 flex justify-center items-center text-center p-4 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-700">{description}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
