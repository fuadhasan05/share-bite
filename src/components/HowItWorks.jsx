import { Link } from "react-router";
import Lottie from "lottie-react";
import ourImpactAnimation from "../assets/lotties/our-impact.json";
import whatWeDoAnimation from "../assets/lotties/what-we-do.json";

const HowItWorks = () => {
  return (
    <section className="py-30 px-4 md:px-24 ">
      <div className="container mx-auto ">
        <h2 className="text-3xl md:text-5xl font-extrabold text-green-800 mb-4 text-center">
        How ShareBite Works
      </h2>

      <p className="text-center text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
        ShareBite connects communities to reduce food waste and fight hunger.
        Easily donate extra food or request meals—building a world where sharing food is simple, impactful, and rewarding.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mb-10 md:mb-14">
        <Link to="#" className="font-bold text-gray-800 relative hover:text-green-600 text-center">
          WHAT WE DO
          <span className="block h-1 w-16 bg-yellow-400 mt-1 mx-auto"></span>
        </Link>
        <Link to="#" className="font-bold text-gray-800 relative hover:text-green-600 text-center">
          OUR IMPACT
          <span className="block h-1 w-16 bg-yellow-400 mt-1 mx-auto"></span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
        <div className="flex justify-center">
          <Lottie
            animationData={whatWeDoAnimation}
            loop
            className="w-full max-w-[460px] h-auto"
          />
        </div>
        <div>
          <h4 className="text-green-700 text-xs md:text-sm uppercase font-semibold mb-2 tracking-wide">
            Step 1: Food Pantries
          </h4>
          <h3 className="text-xl md:text-3xl font-bold mb-4">
            Pantries set schedules to receive fresh food.
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Food pantries list their pickup times on ShareBite so donations arrive fresh and fast—no refrigeration needed.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:order-2">
          <Lottie
            animationData={ourImpactAnimation}
            loop
            className="w-full max-w-[460px] h-auto"
          />
        </div>
        <div className="md:order-1">
          <h4 className="text-green-700 text-xs md:text-sm uppercase font-semibold mb-2 tracking-wide">
            Step 2: Food Donors
          </h4>
          <h3 className="text-xl md:text-3xl font-bold mb-4">
            Donors share surplus food directly with the community.
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Whether you’re a gardener, restaurant, or home cook—post your surplus, skip the waste, and feed your neighbors.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HowItWorks;
