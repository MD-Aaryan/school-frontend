import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Computer, BookOpen, FlaskConical } from "lucide-react";
import lab from "../assets/lab.jpeg";
import cLab from "../assets/cLab.jpeg";
import pLab from "../assets/pLab.jpeg";

interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Cafeteria",
    icon: <Coffee size={32} />,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    description:
      "Indulge in a healthy culinary experience at our school cafeteria, where we prioritize the well-being of our students. Our hygienic cafeteria is dedicated to serving nutritious meals, providing a foundation for overall growth and development.",
  },
  {
    id: 2,
    title: "Computer Lab",
    icon: <Computer size={32} />,
    image: cLab,
    description:
      "Our state-of-the-art computer lab provides students with hands-on experience in coding, digital design, and research. Equipped with modern systems and high-speed internet, it encourages innovation and creativity.",
  },
  {
    id: 3,
    title: "Library",
    icon: <BookOpen size={32} />,
    image: lab,
    description:
      "Our library is a hub of knowledge with a vast collection of books, journals, and digital resources. It offers a peaceful learning environment where students can explore and grow intellectually.",
  },
  {
    id: 4,
    title: "Physics Lab",
    icon: <FlaskConical size={32} />,
    image: pLab,
    description:
      "Our physics lab is fully equipped to conduct experiments that help students understand scientific concepts through practical application. Safety and innovation are at the heart of every experiment.",
  },
];

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<Service>(services[0]);

  return (
    <section className=" bg-gradient-to-b from-sky-200 to-sky-50 py-12 px-4 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Services We Provide
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 relative">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="relative"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: service.id * 0.08 }}
          >
            <button
              onClick={() => setActiveService(service)}
              className={`flex flex-col items-center justify-center px-6 py-6 rounded-2xl shadow-md transition-all duration-300 w-36 md:w-44 
                ${
                  activeService.id === service.id
                    ? "bg-red-600 text-white scale-105"
                    : "bg-white hover:bg-red-50 text-gray-800"
                }`}
            >
              <div className="mb-2">{service.icon}</div>
              <span className="text-sm font-semibold uppercase tracking-wide font-[Poppins]">
                {service.title}
              </span>
            </button>

            {/* Arrow Indicator */}
            {activeService.id === service.id && (
              <motion.div
                layoutId="tab-arrow"
                className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-0 h-0 
                              border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-600 transition-all duration-300 "
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Active Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl mx-auto"
        >
          <motion.div
            className="md:w-1/2 rounded-2xl overflow-hidden shadow-md mb-6 md:mb-0"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-56 sm:h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {activeService.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg font-[Poppins]">
              {activeService.description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
