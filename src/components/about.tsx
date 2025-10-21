import { useNavigate } from "react-router-dom";
import school from "../assets/school.png";
import Button from "./button";
import Footer from "./footer";

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="relative w-full h-full md:h-100">
        <img
          src={school}
          alt="School Banner"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-black/30  flex flex-col  p-4 rounded-lg">
          <h1 className="text-2xl mt-33 md:text-4xl md:mt-60 font-bold text-white">
            Shree Mills secondary school
          </h1>
          <div className="mt-5 text-white text-sm md:text-lg flex flex-row gap-2">
            <Button
              className="font-semibold hover:text-red-400 text-white gap-8"
              type="button"
              onClick={() => {
                navigate("/home");
              }}
              label="Home"
            ></Button>
            {" >"}
            <Button
              className="font-semibold hover:text-red-400 text-white"
              type="button"
              onClick={() => {
                navigate("/about");
              }}
              label="about us"
            ></Button>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-8 px-4 space-y-4  font-[poppins]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-gray-800 leading-relaxed">
          Since 2007, we have been a community of passionate educators dedicated
          to creating a dynamic and engaging learning environment for our
          students. Located in BRT-16, Biratnagar, we take pride in nurturing
          every learner’s potential through care, creativity, and collaboration.
        </p>
        <p className="text-gray-800 leading-relaxed">
          Our team of experienced and dedicated teachers works tirelessly to
          inspire and motivate students to achieve their best. We believe in
          building a welcoming and inclusive school culture that fosters
          curiosity, innovation, and a lifelong love for learning.
        </p>
        <p className="text-gray-800 leading-relaxed">
          Committed to preparing students for the future, we emphasize
          21st-century skills—critical thinking, communication, creativity, and
          collaboration—ensuring they are well-equipped to thrive in a rapidly
          changing world.
        </p>
      </div>
      <Footer />
    </div>
  );
}
