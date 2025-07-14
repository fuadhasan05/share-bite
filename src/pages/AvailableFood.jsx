import { useState } from "react";
import FoodCard from "../components/FoodCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AvailableFood = () => {
  const [columns, setColumns] = useState(3);
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");

  // TanStack Query for fetching
  const { data: foods = [], isLoading, refetch } = useQuery({
    queryKey: ["available-foods", sortOrder],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/available-foods?sort=expiredDate&order=${sortOrder}`
      );
      return res.data;
    },
  });

  // Handle Sorting
  const handleSort = (order) => {
    setSortOrder(order);
    refetch();
  };

  // Handle Layout Toggle
  const handleLayoutToggle = () => {
    setColumns((prev) => (prev === 3 ? 2 : 3));
  };

  // Handle Search
  const filteredFoods = foods.filter((food) =>
    food.foodName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex gap-2">
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
        <button
          onClick={handleLayoutToggle}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Change Layout ({columns} Columns)
        </button>
        <input
          type="text"
          placeholder="Search by food name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-64"
        />
      </div>

      {isLoading ? (
        <div className="text-center text-lg text-gray-500 py-12">Loading...</div>
      ) : (
        <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6 py-12`}>
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <FoodCard key={food._id} food={food} />
            ))
          ) : (
            <p className="text-center text-lg text-gray-500 col-span-full">No available food found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AvailableFood;

