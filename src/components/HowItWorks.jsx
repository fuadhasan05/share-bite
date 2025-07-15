import { Link } from "react-router";
import Lottie from "lottie-react";
import ourImpactAnimation from "../assets/lotties/our-impact.json";
import whatWeDoAnimation from "../assets/lotties/what-we-do.json";

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-br from-[#E6F4EA] via-[#F0FFF4] to-[#E6F4EA] py-16 px-6 md:px-24 rounded-b-3xl">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 text-center">
        How ShareBite Works
      </h2>

      <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
        ShareBite connects communities to reduce food waste and fight hunger.
        Easily donate extra food or request meals—building a world where sharing food is simple, impactful, and rewarding.
      </p>

      <div className="flex justify-center gap-10 mb-12">
        <Link  className="font-bold text-gray-800 relative hover:text-green-600">
          WHAT WE DO
          <span className="block h-1 w-16 bg-yellow-400 mt-1"></span>
        </Link>
        <Link  className="font-bold text-gray-800 relative hover:text-green-600">
          OUR IMPACT
          <span className="block h-1 w-16 bg-yellow-400 mt-1"></span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          
          <Lottie
            animationData={whatWeDoAnimation}
            loop={true}
            style={{ height: "260px", width: "460px" }}
          />
        </div>
        <div>
          <h4 className="text-green-700 text-sm uppercase font-semibold mb-2 tracking-wide">
            Step 1: Food Pantries
          </h4>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pantries set schedules to receive fresh food.
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Food pantries list their pickup times on ShareBite so donations arrive fresh and fast—no refrigeration needed.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:order-2">
          <Lottie
            animationData={ourImpactAnimation}
            loop={true}
            style={{ height: "260px", width: "460px" }}
          />
        </div>
        <div className="md:order-1">
          <h4 className="text-green-700 text-sm uppercase font-semibold mb-2 tracking-wide">
            Step 2: Food Donors
          </h4>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Donors share surplus food directly with the community.
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Whether you’re a gardener, restaurant, or home cook—post your surplus, skip the waste, and feed your neighbors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
