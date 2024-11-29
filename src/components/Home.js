import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-start text-left px-4 relative"
      style={{
        backgroundImage: `url('https://website-container.s3.ap-south-1.amazonaws.com/hero-image-2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 mt-32 ml-4">
        {/* Added margin-top and left margin */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-6"
        >
          <motion.h1 className="text-5xl md:text-7xl font-bold text-white">
            Starlabs
          </motion.h1>
          <motion.h1 className="text-5xl md:text-7xl font-bold text-white">
            Technologies
          </motion.h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-6 max-w-3xl text-white"
        >
          is a cutting-edge technology company that specializes in providing
          innovative solutions to various industries. Our expertise lies in
          developing and deploying IIOT-IOT devices, SAAS, Industrial Software
          Solutions, NAS, Automatic RFID-based Boom Barriers, ANPR, AI-powered
          technologies, and smart home solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
