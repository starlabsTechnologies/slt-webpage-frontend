import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPinned,
  Phone,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const navigate = useNavigate();

  const Links = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Services",
    },
    {
      name: "Values",
    },
    {
      name: "Contact",
    },
    {
      name: "Career",
    },
  ];

  return (
    <motion.footer className="bg-[#151515] text-white pt-12">
      <motion.div
        className="container mx-auto md:px-4 bg-[#151515]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="flex gap-10  md:flex-col justify-between px-4 md:px-0">
          {/* Top side */}
          <motion.div
            className="md:flex flex-col hidden md:flex-row justify-center gap-10 items-center mb-8"
            variants={itemVariants}
          >
            {/* Links */}
            <motion.nav className="mb-4 md:mb-0" variants={itemVariants}>
              {/* Links */}
              <ul className="flex items-center space-x-6">
                {Links.map((links, index) => (
                  <motion.div key={index} className="cursor-pointer ">
                    <li className="font-normal text-white font-jeju">
                      <a
                        href={`#${links.name.toLowerCase()}`}
                        onClick={() =>
                          index === 5
                            ? navigate("/explorecareers")
                            : navigate("/")
                        }
                        className="text-gray-200 transition-colors "
                      >
                        {links.name}
                      </a>
                    </li>
                  </motion.div>
                ))}
                <li className="text-4xl hidden md:flex "> | </li>
              </ul>
            </motion.nav>
            {/* Social Links */}
            <motion.div className="flex space-x-4" variants={itemVariants}>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Center side or mobile view right side */}
          <div className="text-center mt-5 md:mt-16">
            <motion.div
              className="mb-10 md:mb-0 flex flex-col justify-center items-center"
              variants={itemVariants}
            >
              <motion.svg
                width="35"
                height="35"
                viewBox="0 0 27 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ y: -50 }}
                whileHover={{ rotate: 360 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4, ease: "linear" }}
              >
                <path
                  d="M13.5 0L15.1437 12.9021L27 11.0683L16.1595 15.6013L21.8435 24.7697L13.5 17.2695L5.15654 24.7697L10.8405 15.6013L0 11.0683L11.8563 12.9021L13.5 0Z"
                  fill="url(#paint0_linear_313_51)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_313_51"
                    x1="13.5"
                    y1="0"
                    x2="13.5"
                    y2="24.7697"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.254" stop-color="#53C888" />
                    <stop offset="1" stop-color="#235192" />
                  </linearGradient>
                </defs>
              </motion.svg>
              <h1 className="font-AgencyFb  text-[1.9rem] md:text-3xl tracking-wider uppercase">
                starLabs
              </h1>
            </motion.div>
          </div>
          {/* mobile view left side */}

          <div className="flex flex-col gap-3 text-[0.75rem] md:hidden">
            <div className="flex flex-col">
              {" "}
              <h3>Message Us</h3>
              <div className="flex gap-2 items-center">
                <Mail className="h-4 w-4" />
                <a href="mailto:administrator@starlabs.co.in">
                  administrator@starlabs.co.in
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              {" "}
              <h3>Call Us</h3>
              <div className="flex gap-2 items-center">
                <Phone className="h-4 w-4" />
                <p>+91-5446796599</p>
              </div>
            </div>
            <div className="flex flex-col">
              {" "}
              <h3>Address</h3>
              <div className="flex gap-2 items-center">
                <MapPinned className="h-4 w-4" />
                <p>Dhanbad, Jharkhand – 828111 - IN</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <motion.nav
          className="mt-16 flex justify-center my-5 "
          variants={itemVariants}
        >
          <ul className="md:flex space-x-6 hidden">
            <li>
              <Link
                to="/privacyPolicy"
                className="text-sm hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/termsofservices"
                className="text-sm hover:text-gray-300 transition-colors"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-sm hover:text-gray-300 transition-colors"
              >
                Legal
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-sm hover:text-gray-300 transition-colors"
              >
                Site Map
              </Link>
            </li>
          </ul>

          <ul className="flex md:hidden items-center space-x-6">
            {Links.map((links, index) => (
              <motion.div key={index} className="cursor-pointer ">
                <li className="font-normal text-white font-jeju">
                  <a
                    href={`#${links.name.toLowerCase()}`}
                    onClick={() =>
                      index === 5 ? navigate("/explorecareers") : navigate("/")
                    }
                    className="text-gray-200 transition-colors text-xs "
                  >
                    {links.name}
                  </a>
                </li>
              </motion.div>
            ))}
          </ul>
        </motion.nav>

        <motion.div className="border-t border-white ">
          <div className="flex flex-col mt-2 md:flex-row justify-between items-center"></div>
          <motion.p className="text-center text-sm " variants={itemVariants}>
            © {currentYear} Starlabs Technologies Pvt. Ltd. All rights reserved.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
