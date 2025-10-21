// Place your images in public/images/ as course1.jpg, course2.jpg, course3.jpg
// Usage: import CourseCategories from './CourseCategories'; then <CourseCategories /> in your page

import { motion } from "framer-motion";
import type React from "react";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import vP from "../assets/vPjpeg.jpeg";

const cards = [
  {
    title: "Early Childhood Education",
    description:
      "Engaging young children in Activity Based Learning, enhancing their understanding and retention through hands-on tasks and projects.",
    image: "/images/course1.jpg",
    number: "01",
  },
  {
    title: "Basic Level Education",
    description:
      "Incorporating the Playway Method, using interactive play and hands-on activities to promote cognitive and social development.",
    image: "/images/course2.jpg",
    number: "02",
  },
  {
    title: "Secondary Level Education",
    description:
      "A progressive approach focused on student-centered learning, emphasizing critical thinking, collaboration, and real-world problem-solving.",
    image: vP,
    number: "03",
  },
];

export default function CourseCategories(): React.ReactElement {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-6 md:px-12 bg-[#f5fbfc] font-poppins">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#334] tracking-wide mb-10">
          Browse Our Course Category
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((c, idx) => (
            <motion.article
              key={c.title}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden p-8 flex flex-col items-center text-center min-h-[420px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {/* decorative vertical stripes top-right */}
              <div className="absolute top-6 right-6 flex space-x-1">
                <motion.span
                  className="block w-0.5 h-10 bg-[#e44] rounded"
                  initial={{ height: 0 }}
                  animate={{ height: 40 }}
                  transition={{ duration: 0.5 }}
                ></motion.span>
                <motion.span
                  className="block w-0.5 h-8 bg-[#0fb5b5] rounded"
                  initial={{ height: 0 }}
                  animate={{ height: 32 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                ></motion.span>
                <motion.span
                  className="block w-0.5 h-4 bg-[#e44] rounded"
                  style={{ opacity: 0.4 }}
                  initial={{ height: 0 }}
                  animate={{ height: 16 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.span>
              </div>

              <motion.div
                className="w-full max-w-[420px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-40 object-cover rounded-md shadow-sm hover:transition-transform duration-300 hover:scale-105"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </motion.div>

              <motion.h3
                className="mt-8 text-xl md:text-2xl font-medium text-[#445] font-[poppins]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {c.title}
              </motion.h3>

              <motion.p
                className="mt-6 text-sm md:text-base text-[#607080] leading-relaxed max-w-[38ch] font-normal font-poppins"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {c.description}
              </motion.p>

              <motion.a
                className="inline-flex items-center justify-center lg:justify-start gap-2 text-[#eb2929] hover:text-[#138496] font-semibold text-base sm:text-lg transition-colors font-[poppins] mt-6"
                href="#"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Read More →
              </motion.a>

              {/* number badge bottom-left */}
              <motion.div
                className="absolute -left-6 -bottom-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-semibold text-[#cde] bg-[rgba(220,245,245,0.8)] font-[poppins]`}
                  aria-hidden
                >
                  {c.number}
                </div>
              </motion.div>

              {/* subtle inner glow to mimic screenshot */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  boxShadow: "inset 0 30px 60px -36px rgba(3,37,51,0.04)",
                }}
              />
            </motion.article>
          ))}
        </div>
      </div>

      {/* Responsive tweaks */}
      <style>{`
        @media (max-width: 768px) {
          section { padding-top: 3rem; padding-bottom: 3rem; }
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center items-center py-10"
      >
        <Button
          className="bg-gradient-to-r from-sky-500 to-blue-400 hover:from-sky-600 hover:to-blue-500 text-white px-8 py-3 rounded-xl shadow-lg font-semibold text-lg transition-all duration-300"
          type="button"
          onClick={() => navigate("/about")}
          label="Read More"
        />
      </motion.div>
    </section>
  );
}
