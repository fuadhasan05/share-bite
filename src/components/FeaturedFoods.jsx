import { Link } from "react-router";
import FoodCard from "../components/FoodCard";
import Button from "./Button/Button";

const FeaturedFoods = ({ foods }) => {
  const foodData = foods?.data || [];

  // Sort by highest quantity and take top 6
  const featuredFoods = [...foodData]
    .sort((a, b) => parseInt(b.foodQuantity) - parseInt(a.foodQuantity))
    .slice(0, 8);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2
          className="text-3xl font-semibold text-center mb-4"
          style={{ wordSpacing: "8px" }}
        >
          OUR FEATURED FOODS
        </h2>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover the most generous food donations in our community!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-16">
          {featuredFoods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/available-foods">
            <Button variant="primary">Show All Foods</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFoods;
