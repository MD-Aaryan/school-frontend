import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import logo from "../assets/logo.png";
import text from "../assets/text.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navigate = useNavigate();
  return (
    <footer className="bg-gradient-to-b from-sky-50 to-white relative space-y-20">
      {/* Top Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 p-8 relative z-10">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <div
            className="flex items-center space-x-1 cursor-pointer mt-0 pt-0 select-none bg-gradient-to-b from-sky-50 to-sky-50"
            onClick={() => scrollToTop()}
          >
            <img
              src={logo}
              alt="logo"
              className=" mt-0 pt-0 w-17 h-17 sm:w-15 sm:h-15 md:w-16 md:h-16 lg:w-30 lg:h-30 mix-blend-multiply "
            />

            <img
              src={text}
              alt="text logo"
              className="h-32 sm:h-8 md:h-10 lg:h-32 w-auto  mix-blend-multiply "
            />
          </div>
          <p className="text-gray-700">
            Shree Mills Secondary School is a co-ed school with English and
            Nepali medium, from PG to +2 level.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-gray-700">
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/gallary")}>Gallery</li>
            <li onClick={() => navigate("/syllabus")}>Syllabus</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <p className="flex items-center gap-2 text-gray-700 mb-2">
            <MapPin className="w-5 h-5" />{" "}
            <a
              href="https://maps.app.goo.gl/J1PXd1QbUKriqA1s9"
              className="hover:text-red-400"
              target="_blank"
              rel="noreferrer"
            >
              Brt-16, Morang , Nepal
            </a>
          </p>
          <p className="flex items-center gap-2 text-gray-700 mb-2">
            <Mail className="w-5 h-5" /> shreemillsschool@gmail.com
          </p>
          <p className="flex items-center gap-2 text-gray-700 mb-2">
            <Phone className="w-5 h-5" /> +977-1-4108905, 4108973
          </p>

          {/* Social Media */}
          <h3 className="font-semibold mt-4 mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-sky-500 transition"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 transition"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Wave with Copyright */}
      <div className="relative w-full">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20 sm:h-28 md:h-32 lg:h-70 xl:h-56 absolute bottom-10 "
          preserveAspectRatio="none"
        >
          <path
            fill="#009EC4"
            d="M0,224L80,218.7C160,213,320,203,480,213.3C640,224,800,256,960,261.3C1120,267,1280,245,1360,234.7L1440,224V320H0Z"
          />
        </svg>
        <div className="w-full bg-[#009EC4] text-white text-center py-3 text-xs sm:text-sm">
          © Copyright 2025 Shree Mills Secondary School. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
