import { useLoaderData } from "react-router";
import FoodCard from "../components/FoodCard";

const FeaturedFoods = () => {
  const foods = useLoaderData();
  const foodData = foods?.data || [];
  console.log(foodData);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
        {/* Food Cards */}
        {foodData.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedFoods;
