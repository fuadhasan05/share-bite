import { Link } from "react-router";
import FoodCard from "../components/FoodCard";

const FeaturedFoods = ({ foods }) => {
  const foodData = foods?.data || [];

  // Sort by highest quantity and take top 6
  const featuredFoods = [...foodData]
    .sort((a, b) => parseInt(b.foodQuantity) - parseInt(a.foodQuantity))
    .slice(0, 6);

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2F855A] mb-6">
          Featured Foods
        </h2>
        <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Discover the most generous food donations in our community! These featured items 
          represent the largest available quantities—making it easier for you to share, 
          request, or reduce waste. Hungry for more? Explore all available foods below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredFoods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/available-foods">
            <button className="px-8 py-3 rounded-xl bg-[#2F855A] text-white text-lg font-semibold hover:bg-[#276749] transition transform hover:scale-105 shadow-lg">
              Show All Foods
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFoods;
