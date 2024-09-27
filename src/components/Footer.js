import { useNavigate } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Address
            </h3>
            <address className="not-italic">
              <p className="flex items-center mb-2 text-gray-700">
                <MapPinIcon className="w-5 h-5 mr-2 text-blue-600" />
                48, Water Board Colony, Bhagatdih, Jharia, Dhanbad.
              </p>
              <p className="flex items-center mb-2 text-gray-700">
                <PhoneIcon className="w-5 h-5 mr-2 text-blue-600" />
                +91 9939181875
              </p>
              <p className="flex items-center text-gray-700">
                <MailIcon className="w-5 h-5 mr-2 text-blue-600" />
                administrator@starlabs.co.in
              </p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={() => navigate("/")}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => navigate("/")}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => navigate("/")}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => navigate("/")}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@StarlabsTechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <YoutubeIcon className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/StarLabsTechno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-700">
            &copy; {new Date().getFullYear()} Starlabs Technologies Pvt. Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
