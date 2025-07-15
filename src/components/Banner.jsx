import React from "react";
import Banner from "../assets/banner.jpeg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const headlineVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const spanVariants = {
  animate: {
    color: ["#2F855A", "#16a34a", "#eab308", "#ef4444", "#2F855A"],
    transition: { duration: 4, repeat: Infinity },
  },
};

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/addfood");
  };

  const handleLearnMore = () => {
    navigate("/available-foods");
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#E6F4EA] via-[#F0FFF4] to-[#E6F4EA]">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-10 px-6 py-12">
        {/* Image */}
        <motion.img
          src={Banner}
          alt="ShareBite Banner"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-full max-w-md rounded-3xl shadow-xl border-4 border-[#2F855A]/30"
        />

        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-[#2F855A] mb-6 leading-tight"
            variants={headlineVariants}
            initial="initial"
            animate="animate"
          >
            Share More. Waste Less.{" "}
            <motion.span
              className="inline-block"
              variants={spanVariants}
              animate="animate"
            >
              Feed Communities.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Join a growing movement to reduce food waste and nourish lives.
            <br />
            Share your surplus, find meals, and make a difference—one bite at a
            time.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.button
              onClick={handleGetStarted}
              whileHover={{ scale: 1.05, boxShadow: "0 0 16px #2F855A" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2F855A] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#276749] transition"
            >
              Get Started
            </motion.button>
            <motion.button
              onClick={handleLearnMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#2F855A] text-[#2F855A] px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#E6F4EA] transition"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
