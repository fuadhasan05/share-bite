import { Link } from "react-router";
import { motion } from "framer-motion";
import gardenerImg from "../assets/lotties/Farmers.json";
import pantryImg from "../assets/lotties/Food.json";
import hungryImg from "../assets/lotties/Hungry.json";
import Lottie from "lottie-react";

const WhoWeServe = () => {
  const cardVariants = {
    hover: { y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#FFFDEE] via-[#FFF8E7] to-[#FFFDEE]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 text-center mb-12">
          Who Do We Serve?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Gardener Card */}
          <motion.div
            whileHover="hover"
            variants={cardVariants}
            className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all flex flex-col justify-between items-center overflow-hidden"
          >
            {/* Yellow Top Bar */}
            <div className="w-full h-3 bg-[#F4B400]"></div>

            <div className="p-8 text-center flex-1 flex flex-col justify-between items-center w-full">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Gardeners
                </h3>
                <p className="text-gray-600 mb-6">
                  Do you have extra fruits, vegetables, or herbs? Share them with
                  those in need.
                </p>
                <Link to="/addfood">
                  <button className="w-full bg-[#F4B400] text-[#1F2937] font-bold uppercase py-3 rounded-xl hover:bg-[#E9A800] transition-all">
                    Donate Food
                  </button>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-6">
                <Lottie
                  animationData={gardenerImg}
                  loop={true}
                  style={{ height: "260px", width: "300px" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Pantry Card */}
          <motion.div
            whileHover="hover"
            variants={cardVariants}
            className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all flex flex-col justify-between items-center overflow-hidden"
          >
            {/* Yellow Top Bar */}
            <div className="w-full h-3 bg-[#F4B400]"></div>

            <div className="p-8 text-center flex-1 flex flex-col justify-between items-center w-full">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Food Pantries
                </h3>
                <p className="text-gray-600 mb-6">
                  Register your pantry and receive fresh food from local donors.
                </p>
                <Link to="/register-pantry">
                  <button className="w-full bg-[#F4B400] text-[#1F2937] font-bold uppercase py-3 rounded-xl hover:bg-[#E9A800] transition-all">
                    Register Pantry
                  </button>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-6">
                <Lottie
                  animationData={pantryImg}
                  loop={true}
                  style={{ height: "260px", width: "300px" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Hungry Families Card */}
          <motion.div
            whileHover="hover"
            variants={cardVariants}
            className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all flex flex-col justify-between items-center overflow-hidden"
          >
            {/* Yellow Top Bar */}
            <div className="w-full h-3 bg-[#F4B400]"></div>

            <div className="p-8 text-center flex-1 flex flex-col justify-between items-center w-full">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Hungry Families
                </h3>
                <p className="text-gray-600 mb-6">
                  Need food? Use our tool to find nearby available meals and
                  pantries.
                </p>
                <Link to="/available-foods">
                  <button className="w-full bg-[#F4B400] text-[#1F2937] font-bold uppercase py-3 rounded-xl hover:bg-[#E9A800] transition-all">
                    Find Food
                  </button>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-6">
                <Lottie
                  animationData={hungryImg}
                  loop={true}
                  style={{ height: "260px", width: "300px" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
