import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-4 relative"
      style={{
        backgroundImage: `url('https://i.imgur.com/vOcDGON.jpeg')`, // Use Imgur URL for background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />{" "}
      {/* Overlay with opacity */}
      <div className="relative z-10 mt-32">
        {" "}
        {/* Added margin-top here */} {/* Content above the overlay */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
        >
          Starlabs Technologies
        </motion.h1>
        {/* New content about STARLABS TECHNOLOGIES */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-white"
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
