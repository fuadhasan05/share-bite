import React from "react";
import { Link } from "react-router";
import aboutImg from "../../assets/food-banner.jpg"; 

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          About ShareBite
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          ShareBite is a community-driven platform dedicated to reducing food waste and
          providing meals for those in need. We connect individuals, restaurants, and
          organizations to share surplus food with people who can use it most.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Every year, tons of edible food go to waste while millions go hungry.
            Our mission is to bridge this gap by making it simple, safe, and efficient
            for donors to share surplus food, and for recipients to access meals quickly.
          </p>

          <h2 className="text-2xl font-semibold text-green-700">
            How It Works
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Donors list their surplus food on ShareBite.</li>
            <li>Users can browse available meals in their area.</li>
            <li>Recipients request meals and arrange safe collection or delivery.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-700">
            Why Choose ShareBite?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We believe in community, compassion, and sustainability. ShareBite
            helps reduce environmental impact, supports local communities, and
            ensures that good food nourishes people, not landfills.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={aboutImg}
            alt="About ShareBite"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Extra Links Section */}
      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">
          Learn More
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <Link
            to="/faq"
            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
          >
            FAQ
          </Link>
          <Link
            to="/privacy-policy"
            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/support"
            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
          >
            Support
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
