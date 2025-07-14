import { useState } from "react";
import FoodCard from "../components/FoodCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AvailableFood = () => {
  // State to toggle between 2 and 3 column layouts
  const [columns, setColumns] = useState(3);

  // State to control sort order of foods by expiration date
  const [sortOrder, setSortOrder] = useState("asc");

  // State to handle search query input
  const [search, setSearch] = useState("");

  // Fetch available foods using React Query
  const { data: foods = [], isLoading, refetch } = useQuery({
    queryKey: ["available-foods", sortOrder],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/available-foods?sort=expiredDate&order=${sortOrder}`
      );
      return res.data;
    },
  });

  // Handle sort button clicks (asc/desc)
  const handleSort = (order) => {
    setSortOrder(order); 
    refetch(); 
  };

  // Toggle between 2-column and 3-column layout
  const handleLayoutToggle = () => {
    setColumns((prev) => (prev === 3 ? 2 : 3));
  };

  // Filter foods by search keyword (case-insensitive)
  const filteredFoods = foods.filter((food) =>
    food.foodName?.toLowerCase().includes(search.toLowerCase())
  );

  // Map column count to valid Tailwind classes
  const gridColsClass =
    columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <div>
      {/* Controls: sorting, layout toggle, search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        {/* Sort buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => handleSort("asc")}
            className={`px-4 py-2 rounded ${
              sortOrder === "asc" ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            Sort by Expire Date ↑
          </button>
          <button
            onClick={() => handleSort("desc")}
            className={`px-4 py-2 rounded ${
              sortOrder === "desc" ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            Sort by Expire Date ↓
          </button>
        </div>

        {/* Layout toggle button */}
        <button
          onClick={handleLayoutToggle}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Change Layout ({columns} Columns)
        </button>

        {/* Search input field */}
        <input
          type="text"
          placeholder="Search by food name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-64"
        />
      </div>

      {/* Display loading message while fetching */}
      {isLoading ? (
        <div className="text-center text-lg text-gray-500 py-12">Loading...</div>
      ) : (
        // Display food cards in a responsive grid
        <div className={`grid grid-cols-1 ${gridColsClass} gap-6 py-12`}>
          {filteredFoods.length > 0 ? (
            // Render each food as a FoodCard
            filteredFoods.map((food) => (
              <FoodCard key={food._id} food={food} />
            ))
          ) : (
            // Fallback message if no food matches search
            <p className="text-center text-lg text-gray-500 col-span-full">
              No available food found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AvailableFood;
