import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import school from "../assets/school.png";
import Button from "../components/button";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import ServicesSection from "../components/service";
import CourseCategories from "../components/courseCategories";
import PrincipalSection from "../components/principleSection";
import LocationMap from "../components/locationMap";
const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-16 px-2 md:px-0">
      {/* Hero Banner */}
      <section className="relative w-full h-[60vw] max-h-[500px] flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl mt-4">
        <motion.img
          src={school}
          alt="School Banner"
          className="w-full h-full object-cover scale-110 md:scale-100 transition-transform duration-700"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/60 via-sky-900/40 to-sky-700/30 flex flex-col justify-center items-center text-center p-6 md:p-12 rounded-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Welcome to Our School
          </motion.h1>
          <motion.p
            className="mt-4 text-white text-base md:text-2xl font-medium max-w-2xl mx-auto drop-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Empowering students for a brighter future
          </motion.p>
        </motion.div>
      </section>

      {/* Info Section */}
      <section className="flex flex-col md:flex-row gap-10 items-center p-4 md:p-12 bg-white/90 rounded-3xl shadow-xl overflow-hidden">
        {/* Left: Image with animation */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg w-full md:w-1/2 flex-shrink-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={school}
            alt="Shree Mills Secondary School"
            className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Right: Text with animation */}
        <motion.div
          className="space-y-6 w-full md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sky-500 font-semibold text-lg tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Welcome To
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Shree Mills Secondary School
          </motion.h2>
          <motion.p
            className="text-gray-600 leading-relaxed text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Since 2007, we have been a community of passionate educators
            dedicated to creating a dynamic and engaging learning environment
            for our students. Located in BRT-16, Biratnagar, we take pride in
            nurturing every learner’s potential through care, creativity, and
            collaboration.
          </motion.p>
          <motion.p
            className="text-gray-600 leading-relaxed text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Our team of experienced and dedicated teachers works tirelessly to
            inspire and motivate students to achieve their best.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              className="bg-gradient-to-r from-sky-500 to-blue-400 hover:from-sky-600 hover:to-blue-500 text-white px-8 py-3 rounded-xl shadow-lg font-semibold text-lg transition-all duration-300"
              type="button"
              onClick={() => navigate("/about")}
              label="Read More"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-red-500 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
      <PrincipalSection />
      <ServicesSection />
      <CourseCategories />
      <LocationMap />
      <Footer />
    </div>
  );
};
export default Home;
