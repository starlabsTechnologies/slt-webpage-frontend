import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPinned, Phone } from "lucide-react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

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

  const socialIcon = [
    {
      name: FaXTwitter,
      path: "https://x.com/StarLabsTechno",
    },
    {
      name: AiFillInstagram,
      path: "https://www.instagram.com/starlabstechno",
    },
    {
      name: FaLinkedin,
      path: "https://linkedin.com",
    },
  ];

  const componyInfo = [
    {
      title: "Message Us",
      component: Mail,
      content: "administrator@starlabs.co.in",
    },
    {
      title: "Call Us",
      component: Phone,
      content: "+91-5446796599",
    },
    {
      title: "Address",
      component: MapPinned,
      content: "Dhanbad, Jharkhand – 828111 - IN",
    },
  ];

  const BottomLinks = [
    {
      name: "Privacy Policy",
      path: "/privacyPolicy",
    },
    {
      name: " Terms of Use",
      path: "/termsofservices",
    },
  ];

  return (
    <motion.footer className="bg-[#151515] text-white pt-12">
      <motion.div
        className="max-w-screen-2xl mx-auto md:px-4 bg-[#151515]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="flex flex-wrap gap-4 xs:gap-10 xs:px-4 xs:justify-between xs:flex-nowrap md:flex-col  md:px-0">
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
                  <motion.div
                    key={index}
                    className="relative cursor-pointer group"
                  >
                    <li className="font-normal text-white font-jeju">
                      <a
                        href={`#${links.name.toLowerCase()}`}
                        onClick={() =>
                          index === 5
                            ? navigate("/explorecareers")
                            : navigate("/")
                        }
                        className="text-gray-200 transition-colors group-hover:text-green-500  "
                      >
                        {links.name}
                        <span className="w-0 h-[1px] bottom-0 left-0 bg-green-500 absolute group-hover:w-full transition-all duration-200"></span>
                      </a>
                    </li>
                  </motion.div>
                ))}
                <li className="hidden text-4xl md:flex "> | </li>
              </ul>
            </motion.nav>
            {/* Social Links */}

            <motion.div className="flex space-x-4" variants={itemVariants}>
              {socialIcon.map((icon, index) => (
                <a
                  href={icon.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <icon.name className="w-8 h-8 group-hover:text-green-500 transition-all duration-200" />
                </a>
              ))}
            </motion.div>
          </motion.div>
          {/* Center */}
          <div className="flex flex-wrap justify-center gap-6 xs:justify-between items-center w-full sm:w-2/3 md:w-1/2 xl:w-1/3 mx-auto my-6 ">
            {" "}
            {/* right side */}
            <div className="flex  mt-2 text-center xs:block xs:mt-5 ">
              <motion.div
                className="flex flex-col items-center justify-center mb-0 xs:mb-10 md:mb-0 "
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
            {/*  left side */}
            <div className="flex flex-col px-6 xs:px-0  gap-3 text-[0.75rem]">
              {componyInfo.map((detail, index) => (
                <div
                  className={`flex flex-col ${index === 1 ? "md:hidden" : ""}`}
                >
                  {" "}
                  <h3>{detail.title}</h3>
                  <div className="flex items-center gap-2">
                    <detail.component className="w-4 h-4" />
                    {index === 0 ? (
                      <a href={`mailto:${detail.content}`}>{detail.content}</a>
                    ) : (
                      <p>{detail.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <motion.nav
          className="flex justify-center my-5 mt-16 "
          variants={itemVariants}
        >
          {/* tablet or laptop privacy and policy links */}
          <ul className="hidden space-x-6 md:flex text-[0.7rem] lg:text-base">
            {BottomLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-sm transition-colors hover:text-green-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
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
