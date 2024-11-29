import { motion } from "motion/react";
import React from "react";

const Navbar = ({ activeSection, scrollTo }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  // const handleClick = (section) => {
  //   if (window.location.pathname !== "/") {
  //     navigate("/");
  //     setTimeout(() => scrollTo(section), 100);
  //   } else {
  //     scrollTo(section);
  //   }
  // };

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "services",
      path: "/about",
    },
    {
      name: "values",
      path: "/about",
    },
    {
      name: "contact",
      path: "/about",
    },
  ];
  const container = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const item = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    exit: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <div className="fixed z-50 w-full text-white bg-black/80">
      <div className="flex items-center justify-between w-11/12 pt-8 mx-auto">
        {/* Left side  i.e Logo */}
        <div className="flex flex-col items-center overflow-hidden">
          {/* start Svg */}
          <div>
            <motion.svg
              width="27"
              height="25"
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
          </div>
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            STARLABS
          </motion.div>
        </div>
        {/* Right side i.e NavLinks */}
        <motion.div
          className="justify-end hidden text-base font-semibold tracking-tight h-7 lg:flex"
          variants={container}
          initial="initial"
          animate="animate"
        >
          <ul className="flex px-5 overflow-hidden list-none xl:gap-16 lg:gap-14">
            {links.map((links, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer group"
                variants={item}
              >
                <li className="font-normal uppercase font-jeju">
                  {links.name}
                </li>
              </motion.div>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
