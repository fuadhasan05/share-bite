import { Link } from "react-router";
import { motion } from "framer-motion";
import gardenerImg from "../assets/lotties/Farmers.json";
import pantryImg from "../assets/lotties/Food.json";
import hungryImg from "../assets/lotties/Hungry.json";
import Lottie from "lottie-react";
import Button from "./Button/Button";

const WhoWeServe = () => {
  const cardVariants = {
    hover: { y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" },
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2
          className="text-3xl font-semibold text-center mb-16"
          style={{ wordSpacing: "8px" }}
        >
          WHO DO WE SERVE?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gardener Card */}
          <motion.div
            whileHover="hover"
            variants={cardVariants}
            className="bg-white rounded-md   flex flex-col justify-between items-center overflow-hidden"
          >
            {/* Yellow Top Bar */}
            <div className="w-full h-2 bg-[#f7ca18]"></div>

            <div className="p-8 text-center flex-1 flex flex-col justify-between items-center w-full">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Gardeners
                </h3>
                <p className="text-gray-600 mb-6">
                  Do you have extra fruits, vegetables, or herbs? Share them
                  with those in need.
                </p>
                <Link to="/addfood">
                  <Button variant="secondary" className="w-full">
                    Donate Food
                  </Button>
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
            className="bg-white rounded-md    flex flex-col justify-between items-center overflow-hidden"
          >
            {/* Yellow Top Bar */}
            <div className="w-full h-2 bg-[#f7ca18]"></div>

            <div className="p-8 text-center flex-1 flex flex-col justify-between items-center w-full">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Food Pantries
                </h3>
                <p className="text-gray-600 mb-6">
                  Register your pantry and receive fresh food from local donors.
                </p>
                <Link to="/signup">
                  <Button variant="secondary" className="w-full">
                    Register Pantry
                  </Button>
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
            className="bg-white rounded-md    flex flex-col justify-between items-center overflow-hidden"
          >
            {/* Yellow Top Bar */}
            <div className="w-full h-2 bg-[#f7ca18]"></div>

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
                  <Button variant="secondary" className="w-full">
                    Find Food
                  </Button>
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
