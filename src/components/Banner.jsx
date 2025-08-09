import React from "react";
import { useNavigate } from "react-router";
import BgBanner from "../assets/food-banner.jpg";
import Button from "./Button/Button";

const Hero = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <section className="relative flex items-center w-screen overflow-hidden min-h-[70vh] mb-16">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: `url(${BgBanner})` }}
      ></div>

      {/* Content */}
      <div className="container mx-auto relative px-6 py-20 flex flex-col items-start text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2F855A] mb-6 leading-tight">
          Share More. Waste Less. <br />
          <span className="text-[#2F855A]">Feed Communities.</span>
        </h1>

        <p className="text-xl font-extrabold mb-8 max-w-2xl">
          Join a growing movement to reduce food waste and nourish lives.
          <br />
          Share your surplus, find meals, and make a difference <br /> —one bite
          at a time.
        </p>
        <div>
          <Button onClick={handleLearnMore} variant="primary">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
