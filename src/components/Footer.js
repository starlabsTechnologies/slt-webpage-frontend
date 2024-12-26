import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPinned, Phone } from "lucide-react";
import InstagramSvg from "../assets/SVG/Icons/Instagram.svg";
import LinkedInSvg from "../assets/SVG/Icons/LinkedIn.svg";
import TwiteerSvg from "../assets/SVG/Icons/Twiteer.svg";

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
        <div className="flex flex-wrap gap-4 xs:gap-10 xs:px-4 xs:justify-between xs:flex-nowrap md:flex-col md:px-0">
          {/* Top side */}
          <motion.div
            className="flex-col items-center justify-center hidden gap-10 mb-8 md:flex md:flex-row"
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
                <li className="hidden text-4xl md:flex "> | </li>
              </ul>
            </motion.nav>
            {/* Social Links */}
            <motion.div className="flex space-x-4" variants={itemVariants}>
              <a
                href="https://x.com/StarLabsTechno"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-300"
              >
                <img src={TwiteerSvg} alt="Twitter" className="w-10 h-10" />
              </a>
              <a
                href="https://www.instagram.com/starlabstechno"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-300"
              >
                <img src={InstagramSvg} alt="Instagram" className="w-10 h-10" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-300"
              >
                <img src={LinkedInSvg} alt="LinkedIn" className="w-10 h-10" />
              </a>
            </motion.div>
          </motion.div>

          {/* Center side or mobile view right side */}
          <div className="flex justify-center w-full mt-2 text-center xs:block xs:mt-5 md:mt-16">
            <motion.div
              className="flex flex-col items-center justify-center mb-0 xs:mb-10 md:mb-0"
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

          <div className="flex flex-col px-6 xs:px-0  gap-3 text-[0.75rem] md:hidden">
            <div className="flex flex-col">
              {" "}
              <h3>Message Us</h3>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:administrator@starlabs.co.in">
                  administrator@starlabs.co.in
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              {" "}
              <h3>Call Us</h3>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <p>+91-5446796599</p>
              </div>
            </div>
            <div className="flex flex-col">
              {" "}
              <h3>Address</h3>
              <div className="flex items-center gap-2">
                <MapPinned className="w-4 h-4" />
                <p>Dhanbad, Jharkhand – 828111 - IN</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <motion.nav
          className="flex justify-center my-5 mt-16 "
          variants={itemVariants}
        >
          {/* tablet or laptop privacy and plicy links */}
          <ul className="hidden space-x-6 md:flex">
            <li>
              <Link
                to="/privacyPolicy"
                className="text-sm transition-colors hover:text-gray-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/termsofservices"
                className="text-sm transition-colors hover:text-gray-300"
              >
                Terms of Use
              </Link>
            </li>
            {/* <li>
              <Link
                to="/"
                className="text-sm transition-colors hover:text-gray-300"
              >
                Legal
              </Link>
            </li> */}
            {/* <li>
              <Link
                href="/"
                className="text-sm transition-colors hover:text-gray-300"
              >
                Site Map
              </Link>
            </li> */}
          </ul>

          {/* links in mobile view */}
          <ul className="flex flex-wrap items-center space-x-6 md:hidden">
            {Links.map((links, index) => (
              <motion.div key={index} className="cursor-pointer ">
                <li className="font-normal text-white font-jeju">
                  <a
                    href={`#${links.name.toLowerCase()}`}
                    onClick={() =>
                      index === 5 ? navigate("/explorecareers") : navigate("/")
                    }
                    className="text-xs text-gray-200 transition-colors "
                  >
                    {links.name}
                  </a>
                </li>
              </motion.div>
            ))}
          </ul>
        </motion.nav>

        <motion.div className="border-t border-white ">
          <div className="flex flex-col items-center justify-between mt-2 md:flex-row"></div>
          <motion.p className="text-sm text-center " variants={itemVariants}>
            © {currentYear} Starlabs Technologies Pvt. Ltd. All rights reserved.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
