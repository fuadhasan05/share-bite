import { Link } from "react-router";

const FoodCard = ({ food }) => {
  const { _id, foodName, expiredDate, foodQuantity, foodImage } = food;

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden border hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <figure className="w-full md:w-1/3">
          <img 
            src={foodImage} 
            alt={foodName} 
            className="object-cover w-full h-48 md:h-full" 
          />
        </figure>

        <div className="flex flex-col justify-between p-6 w-full md:w-2/3">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{foodName}</h2>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Quantity:</span> {foodQuantity}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Expires:</span> 
              <span className="ml-2 px-2 py-1 bg-red-100 text-red-500 text-sm rounded-full">
                {expiredDate}
              </span>
            </p>
          </div>

          <div className="mt-4 flex justify-end">
            <Link to={`/food/${_id}`}>
              <button className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium shadow-md transition-all">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
