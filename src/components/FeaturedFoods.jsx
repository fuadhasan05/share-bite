import { Link } from "react-router";
import FoodCard from "../components/FoodCard";

const FeaturedFoods = ({ foods }) => {
  const foodData = foods?.data || [];

  // Sort by highest quantity and take top 6
  const featuredFoods = [...foodData]
    .sort((a, b) => parseInt(b.foodQuantity) - parseInt(a.foodQuantity))
    .slice(0, 6);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Foods</h2>
      <p className="text-center text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Discover the most generous food donations in our community! These
        featured items represent the largest available quantities, making it
        easier for you to share, request, or reduce waste. Hungry for more?
        Click below to explore all available foods.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {featuredFoods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>

      <div className="text-center">
        <Link to="/available-foods">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
            Show All Foods
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFoods;
