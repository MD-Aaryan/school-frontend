import { CheckCircle, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import bpic from "../assets/bpic.jpeg";

export default function ShreeMillsMissionVisionPage() {
  return (
    <main className="bg-gray-50 text-gray-800 antialiased ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: Mission & Vision */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed font-[poppins]">
                The vision of <strong>Shree Mills Ma.Vi</strong> is to create an
                inclusive and inspiring environment where every student can
                achieve academic success and personal growth. We nurture
                curiosity, creativity, and a lifelong love for learning.
              </p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mt-6"
            >
              <img
                src={bpic}
                alt="Shree Mills School"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed font-[poppins]">
                Our mission is to provide a well-rounded education that promotes
                knowledge, character, and lifelong learning.{" "}
                <strong>Shree Mills Ma.Vi</strong> offers a safe and engaging
                atmosphere for every child to reach their full potential.
              </p>
            </motion.div>

            {/* ✅ Goals section (visible on mobile also) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl transition w-full lg:hidden"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Our Goals
              </h3>
              <ul className="space-y-2 text-gray-700 font-[poppins]">
                <li className="flex gap-2 items-start">
                  <CheckCircle className="text-blue-500 mt-1" size={18} /> Value
                  and respect the voices of students, parents, and teachers.
                </li>
                <li className="flex gap-2 items-start">
                  <Users className="text-blue-500 mt-1" size={18} /> Provide a
                  safe and welcoming environment that celebrates diversity.
                </li>
                <li className="flex gap-2 items-start">
                  <BookOpen className="text-blue-500 mt-1" size={18} /> Deliver
                  learning experiences that build the whole child.
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="text-blue-500 mt-1" size={18} />{" "}
                  Encourage creativity, discipline, and critical thinking.
                </li>
                <li className="flex gap-2 items-start">
                  <Users className="text-blue-500 mt-1" size={18} /> Promote
                  active citizenship through leadership and community service.
                </li>
              </ul>
              <p className="mt-4 text-gray-500 text-sm">
                Our motto:{" "}
                <strong>Knowledge, Wisdom, and Education Par Excellence</strong>
              </p>
            </motion.div>
          </div>

          {/* ✅ Right column: visible only on desktop */}
          <aside className="hidden lg:flex lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl transition w-full"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Our Goals
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2 items-start font-[poppins]">
                  <CheckCircle className="text-blue-500 mt-1 " size={18} />{" "}
                  Value and respect the voices of students, parents, and
                  teachers.
                </li>
                <li className="flex gap-2 items-start font-[poppins]">
                  <Users className="text-blue-500 mt-1" size={18} /> Provide a
                  safe and welcoming environment that celebrates diversity.
                </li>
                <li className="flex gap-2 items-start font-[poppins]">
                  <BookOpen className="text-blue-500 mt-1 " size={18} /> Deliver
                  learning experiences that build the whole child.
                </li>
                <li className="flex gap-2 items-start font-[poppins]">
                  <CheckCircle className="text-blue-500 mt-1 " size={18} />{" "}
                  Encourage creativity, discipline, and critical thinking.
                </li>
                <li className="flex gap-2 items-start font-[poppins]">
                  <Users className="text-blue-500 mt-1 " size={18} /> Promote
                  active citizenship through leadership and community service.
                </li>
              </ul>
              <p className="mt-4 text-gray-500 text-sm font-[poppins]">
                Our motto:{" "}
                <strong>Knowledge, Wisdom, and Education Par Excellence</strong>
              </p>
            </motion.div>
          </aside>
        </div>
      </div>
      <Footer />
    </main>
  );
}
