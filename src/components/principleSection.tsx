"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import vP from "../assets/remove background fr.png";
import principle from "../assets/principle.jpeg";

export default function PrincipalSection() {
  // ====== Slides Data ======
  const slides = [
    {
      title: "Message from Principal",
      quote:
        '"If there is no struggle, there is no progress" - Frederick Douglass',
      text: "At Shree Mills Secondary School, we believe education should ignite curiosity and nurture creativity. Our goal is to help students grow with discipline, knowledge, and confidence.",
      image: principle,
      author: "Principal",
    },
    {
      title: "Message from Vice Principal",
      quote:
        '"Education is not preparation for life; education is life itself." - John Dewey',
      text: "We aim to provide high-quality education from PG to +2 level, empowering every student with values, leadership, and lifelong learning skills for a brighter future.",
      image: vP,
      author: "Vice Principal",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ====== Auto Slide (every 7 seconds) ======
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // ====== Manual Navigation ======
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // ====== Current Slide Data ======
  const slide = slides[currentIndex];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-100 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 ">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* ===== Left Side: Text Content ===== */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl font-bold leading-tight font-[poppins]">
              <span className=" text-[#be3b3b]">
                {slide.title.split(" ")[0]}
              </span>{" "}
              <span className="text-gray-500">{slide.title.split(" ")[1]}</span>{" "}
              <span className="text-[#0a8193]">
                {slide.title.split(" ").slice(2).join(" ")}
              </span>
            </h1>

            <blockquote className="text-lg sm:text-xl font-semibold text-gray-800 italic">
              {slide.quote}
            </blockquote>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-[poppins]">
              {slide.text}
            </p>

            {/* <a
              href="#"
              className="inline-flex items-center justify-center lg:justify-start gap-2 text-[#17a2b8] hover:text-[#138496] font-semibold text-base sm:text-lg transition-colors"
            >
              Read More <ArrowRight className="w-5 h-5" />
            </a> */}

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                {slide.title}
              </h3>
              <p className="text-gray-500 italic">{slide.author}</p>
            </div>

            {/* ===== Navigation Arrows ===== */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
              <button
                onClick={handlePrev}
                className="text-[#17a2b8] hover:text-[#138496] transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-10 h-10" strokeWidth={3} />
              </button>
              <button
                onClick={handleNext}
                className="text-[#17a2b8] hover:text-[#138496] transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-10 h-10" strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* ===== Right Side: Image Section ===== */}
          <div className="relative flex justify-center lg:justify-end w-full order-1 lg:order-none mb-8 lg:mb-0">
            {/* Decorative Background */}
            <div className="relative w-full max-w-[500px] md:max-w-[600px] overflow-hidden rounded-bl-[200px] bg-gray-100 shadow-lg">
              {/* Red line at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-red-500 rounded-t-full"></div>

              {/* Image Slide slightly above red line */}
              <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-bl-[200px] flex items-end justify-center pb-2 md:pb-2 hover:scale-105 transition-transform duration-500">
                {slides.map((item, index) => (
                  <img
                    key={index}
                    src={item.image}
                    alt={item.title}
                    className={`absolute max-w-full max-h-full object-contain transition-opacity duration-1000 ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
