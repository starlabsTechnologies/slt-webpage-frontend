import { useNavigate } from "react-router-dom";
import {
  MapPinIcon,
  MailIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="px-4 py-12 bg-[#151515]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-200">
              Address
            </h3>
            <address className="not-italic">
              <p className="flex items-center mb-2 text-gray-200">
                <MapPinIcon className="w-5 h-5 mr-2 text-blue-600" />
                Dhanbad, Jharkhand – 828111 - IN
              </p>
              <p className="flex items-center text-gray-200">
                <MailIcon className="w-5 h-5 mr-2 text-blue-600" />
                administrator@starlabs.co.in
              </p>
            </address>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-200">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={() => navigate("/")}
                  className="text-gray-200 transition-colors hover:text-blue-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => navigate("/")}
                  className="text-gray-200 transition-colors hover:text-blue-600"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => navigate("/")}
                  className="text-gray-200 transition-colors hover:text-blue-600"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => navigate("/")}
                  className="text-gray-200 transition-colors hover:text-blue-600"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => navigate("/careers")}
                  className="text-gray-200 transition-colors hover:text-blue-600"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-200">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://x.com/StarLabsTechno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 transition-colors hover:text-blue-600"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/starlabstechno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 transition-colors hover:text-blue-600"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 transition-colors hover:text-blue-600"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-300">
          <p className="text-gray-200">
            &copy; {new Date().getFullYear()} Starlabs Technologies Pvt. Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
