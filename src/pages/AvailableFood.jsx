import { useState } from "react";
import FoodCard from "../components/FoodCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AvailableFood = () => {
  const [columns, setColumns] = useState(3);
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");

  const { data: foods = [], isLoading } = useQuery({
    queryKey: ["available-foods", sortOrder],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/available-foods?sort=expiredDate&order=${sortOrder}`
      );
      return res.data;
    },
  });

  const filteredFoods = foods.filter((food) =>
    food.foodName?.toLowerCase().includes(search.toLowerCase())
  );

  const gridColsClass = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Heading & Paragraph */}
      <div className="text-center mb-30">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Browse Available Foods
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover fresh surplus food shared by generous community members. Request meals easily and help reduce food waste while feeding families in need.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        {/* Sort Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setSortOrder("asc")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              sortOrder === "asc"
                ? "bg-green-500 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Expire Date ↑
          </button>
          <button
            onClick={() => setSortOrder("desc")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              sortOrder === "desc"
                ? "bg-green-500 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Expire Date ↓
          </button>
        </div>

        {/* Layout Toggle */}
        <button
          onClick={() => setColumns(columns === 3 ? 2 : 3)}
          className="px-4 py-2 rounded-lg bg-yellow-400 text-[#1F2937] font-semibold hover:bg-yellow-500 transition-all"
        >
          {columns === 3 ? "2 Column View" : "3 Column View"}
        </button>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by food name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Food List */}
      {isLoading ? (
        <div className="text-center text-lg text-gray-500 py-20">Loading available foods...</div>
      ) : (
        <div className={`grid grid-cols-1 ${gridColsClass} gap-6`}>
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => <FoodCard key={food._id} food={food} />)
          ) : (
            <p className="text-center text-lg text-gray-500 col-span-full">
              No food items matched your search.
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default AvailableFood;
