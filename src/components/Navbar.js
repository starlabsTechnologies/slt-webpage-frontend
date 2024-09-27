import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SLTLogo from "./../assets/SLT.png";

const Navbar = ({ activeSection, scrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (section) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollTo(section), 100);
    } else {
      scrollTo(section);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <img src={SLTLogo} alt="SLT Logo" className="w-24 h-auto" />
          <div className="hidden md:flex space-x-8">
            {["home", "about", "services", "values", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className={`text-lg font-semibold uppercase tracking-wide transition-colors ${
                  activeSection === item
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          {/* Hamburger Menu for Mobile View */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none hover:text-blue-400"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            {["home", "about", "services", "values", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    handleClick(item);
                    setIsOpen(false); // Close the menu after selection
                  }}
                  className={`text-lg font-semibold uppercase tracking-wide transition-colors ${
                    activeSection === item
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-400"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
