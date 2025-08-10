import { Link } from "react-router";
import Button from "./Button/Button";
import { FaArrowRight } from "react-icons/fa";

const FoodCard = ({ food }) => {
  const { _id, foodName, expiredDate, foodQuantity, foodImage } = food;

  return (
    <div className="bg-white rounded-md overflow-hidden hover:shadow-md transition-shadow duration-300">
      <figure className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </figure>

      <div className="p-6 flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#2F855A] mb-2">{foodName}</h2>

          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Quantity:</span> {foodQuantity}
          </p>

          <p className="text-gray-700">
            <span className="font-semibold">Expires:</span>{" "}
            <span className="ml-2 px-2 py-1 bg-red-100 text-red-500 text-xs rounded-full">
              {expiredDate}
            </span>
          </p>
        </div>
        <Link to={`/food/${_id}`}>
          <p className="flex items-center font-semibold gap-1 text-[#2F855A] hover:underline underline-offset-2 cursor-pointer">
            View Details <FaArrowRight />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
