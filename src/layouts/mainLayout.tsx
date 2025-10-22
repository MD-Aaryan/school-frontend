import { useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import text from "../assets/text.png";
import Avatar from "../components/avatar";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [logoutConfirmOpen, setLogoutConfirmOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);

  const username = useAuthStore((state) => state.username);
  const email = useAuthStore((state) => state.email);
  const role = useAuthStore((state) => state.role);
  const logout = useAuthStore((state) => state.logout);

  const isAdmin = role === "ADMIN";
  const isLoggedIn = !!username;

  const mobileMenu = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us " },
    { path: "/sallaybus", label: "Sallaybus" },
    { path: "/contact", label: "Contact" },
    { path: "/gallary", label: "Gallery" },
    { path: "/mission", label: "Misson & Vision" },
  ];

  return (
    <div>
      {/* Top Header */}
      <header className="dark:bg-sky-600 p-2 text-white text-sm fixed w-full top-0 left-0 z-50">
        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-4 gap-2">
          <div className="flex justify-between sm:justify-start items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center gap-1">
              <Mail size={20} />
              <span>Aryan123@example.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={20} />
              <span>+977 9817388271</span>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-2 sm:mt-0 sm:ml-4">
            <MapPin size={20} />
            <a
              href="https://maps.app.goo.gl/J1PXd1QbUKriqA1s9"
              className="hover:text-red-400"
              target="_blank"
              rel="noreferrer"
            >
              Brt-16, Morang , Nepal
            </a>
          </div>
        </div>
      </header>

      {/* Main Navbar */}
      <header
        className="bg-white shadow fixed w-full top-9 left-0 z-40"
        // style={{ top: "40px" }}
      >
        <div className="container mx-auto flex justify-between items-center m-0 p-0">
          <div
            className="flex items-center space-x-1 cursor-pointer mt-0 pt-0 select-none"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="logo"
              className=" mt-0 pt-0 w-17 h-17 sm:w-15 sm:h-15 md:w-16 md:h-16 lg:w-30 lg:h-30"
            />

            <img
              src={text}
              alt="text logo"
              className="h-35 sm:h-8 md:h-10 lg:h-32 w-auto"
            />
          </div>
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 relative font-[poppins]">
            <h2
              onClick={() => navigate("/home")}
              className="text-gray-800 hover:text-red-500 cursor-pointer transition "
            >
              Home
            </h2>
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <h2
                className="text-gray-800 hover:text-red-500 cursor-pointer transition "
                onClick={() => navigate("/about")}
              >
                About Us▾
              </h2>
              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 flex flex-col bg-white shadow-lg rounded-lg mt-2 min-w-[180px] z-50 p-2 gap-2"
                  >
                    <h2
                      onClick={() => navigate("/mission")}
                      className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer rounded-md"
                    >
                      Misson & Vision
                    </h2>
                    <h2
                      onClick={() => navigate("/member")}
                      className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer rounded-md"
                    >
                      Our Member
                    </h2>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <h2
              onClick={() => navigate("/syllabus")}
              className="text-gray-800 hover:text-red-500 cursor-pointer transition "
            >
              Syllabus
            </h2>
            <div
              className="relative"
              onMouseEnter={() => setContactDropdownOpen(true)}
              onMouseLeave={() => setContactDropdownOpen(false)}
            >
              <h2
                className="text-gray-800 hover:text-red-500 cursor-pointer transition "
                onClick={() => navigate("/contact")}
              >
                contact{" "}
              </h2>
              {isAdmin && (
                <AnimatePresence>
                  {contactDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 flex flex-col bg-white shadow-lg rounded-lg mt-2 min-w-[180px] z-50 p-2 gap-2"
                    >
                      <h2
                        onClick={() => navigate("/mission")}
                        className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer rounded-md"
                      >
                        contact list
                      </h2>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
            <h2
              onClick={() => navigate("/gallary")}
              className="text-gray-800 hover:text-red-500 cursor-pointer transition "
            >
              Gallery
            </h2>

            {/* More Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              <h2 className="text-gray-800 hover:text-red-500 cursor-pointer transition">
                More ▾
              </h2>
              <AnimatePresence>
                {desktopDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 flex flex-col bg-white shadow-lg rounded-lg mt-2 min-w-[180px] z-50 p-2 gap-2"
                  >
                    {isAdmin && (
                      <h2
                        onClick={() => navigate("/upload")}
                        className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer rounded-md"
                      >
                        Upload
                      </h2>
                    )}
                    {isLoggedIn ? (
                      <h2
                        onClick={() => setLogoutConfirmOpen(true)}
                        className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer rounded-md"
                      >
                        Logout
                      </h2>
                    ) : (
                      <h2
                        onClick={() => navigate("/login")}
                        className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer rounded-md"
                      >
                        Login
                      </h2>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {isLoggedIn && (
              <Avatar
                username={username!}
                email={email!}
                onLogout={() => setLogoutConfirmOpen(true)}
              />
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-800"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-4 top-[70px] w-[220px] rounded-lg bg-white shadow-lg flex flex-col p-4 gap-3 lg:hidden z-40"
            >
              {mobileMenu.map((item) => (
                <h2
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-800 hover:text-red-500 cursor-pointer"
                >
                  {item.label}
                </h2>
              ))}
              <h2
                onClick={() => {
                  navigate("/member");
                  setMobileMenuOpen(false);
                }}
                className="text-gray-800 hover:text-red-500 cursor-pointer"
              >
                Our Member
              </h2>
              {isAdmin && (
                <h2
                  onClick={() => {
                    navigate("/contact-list");
                    setMobileMenuOpen(false);
                  }}
                  className="text-red-600 hover:text-black cursor-pointer"
                >
                  contact list
                </h2>
              )}

              {isAdmin && (
                <h2
                  onClick={() => {
                    navigate("/upload");
                    setMobileMenuOpen(false);
                  }}
                  className="text-red-600 hover:text-black cursor-pointer"
                >
                  Upload
                </h2>
              )}

              <hr className="border-gray-300 my-2" />

              {isLoggedIn ? (
                <h2
                  onClick={() => {
                    setLogoutConfirmOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="text-red-600 hover:text-red-800 cursor-pointer"
                >
                  Logout
                </h2>
              ) : (
                <h2
                  onClick={() => {
                    navigate("/login");
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-800 hover:text-red-500 cursor-pointer"
                >
                  SignIn
                </h2>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Logout Confirmation Modal */}
      <AnimatePresence>
        {logoutConfirmOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md text-center"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Are you sure you want to logout?
              </h2>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    logout();
                    setLogoutConfirmOpen(false);
                    navigate("/");
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                >
                  Yes
                </button>
                <button
                  onClick={() => setLogoutConfirmOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
                >
                  No
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed headers */}
      <div className="h-[175px]" />
      <main className="container mx-auto px-0 py-0 flex justify-between items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
