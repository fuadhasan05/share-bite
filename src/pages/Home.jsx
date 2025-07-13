import React from "react";
import Banner from "../assets/banner.jpeg";
import { motion } from "framer-motion";

const headlineVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const spanVariants = {
  animate: {
    color: ["#2563eb", "#16a34a", "#eab308", "#ef4444", "#2563eb"],
    transition: { duration: 4, repeat: Infinity },
  },
};

const Home = () => {
  return (
    <div
      className="hero min-h-96"
      style={{
        background:
          "linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 flex flex-col items-center gap-4">
          <motion.img
            src={Banner}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
            alt="ShareBite Banner"
          />
          <motion.img
            src={Banner}
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
            alt="ShareBite Banner"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start">
          <motion.h1
            className="text-5xl font-extrabold leading-tight mb-4"
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
              Feed Communities
            </motion.span>{" "}
            with ShareBite.
          </motion.h1>
          <motion.p
            className="py-6 text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Join a growing movement to reduce food waste and nourish lives.
            <br />
            Share your surplus, find meals, and make a difference—one bite at a
            time.
          </motion.p>
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 16px #2563eb",
            }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-primary shadow-lg transition-all duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Home;
