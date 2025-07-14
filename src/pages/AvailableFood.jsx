import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../components/FoodCard";
import axios from "axios";

const AvailableFood = () => {
  const foods = useLoaderData();
  const [foodData] = useState(foods.data || []);

  const [displayFoods, setDisplayFoods] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"

  // Filter only available foods initially
  useEffect(() => {
    const availableFoods = foodData.filter(food => food.status === "Available");
    setDisplayFoods(availableFoods);
  }, [foodData]);

  // Handle Sorting
  const handleSort = async (order) => {
    setSortOrder(order);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/available-foods?sort=expiredDate&order=${order}`
      );
      setDisplayFoods(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="flex justify-end gap-4 mb-6">
        <button 
          onClick={() => handleSort("asc")} 
          className={`px-4 py-2 rounded ${sortOrder === "asc" ? "bg-green-500 text-white" : "bg-gray-200"}`}
        >
          Sort by Expire Date ↑
        </button>
        <button 
          onClick={() => handleSort("desc")} 
          className={`px-4 py-2 rounded ${sortOrder === "desc" ? "bg-green-500 text-white" : "bg-gray-200"}`}
        >
          Sort by Expire Date ↓
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
        {displayFoods.length > 0 ? (
          displayFoods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">No available food found.</p>
        )}
      </div>
    </div>
  );
};

export default AvailableFood;

