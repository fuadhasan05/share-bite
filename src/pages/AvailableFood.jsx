import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AvailableFood = () => {
  useEffect(() => {
    document.title = "Share Bite - Available Food";
  }, []);

  const [columns, setColumns] = useState(3);
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { data: foods = [], isLoading } = useQuery({
    queryKey: ["available-foods", sortOrder],
    queryFn: async () => {
      const res = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/available-foods?sort=expiredDate&order=${sortOrder}`
      );
      return res.data;
    },
  });

  // Filter by search
  const filteredFoods = foods.filter((food) =>
    food.foodName?.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);

  // Get current page foods
  const currentFoods = filteredFoods.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset page if filteredFoods changes and currentPage is out of range
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredFoods, currentPage, totalPages]);

  const gridColsClass = columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <div className="bg-gradient-to-br from-[#E6F4EA] via-[#F0FFF4] to-[#E6F4EA] max-w-full py-16">
      <section className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
           <h2
          className="text-3xl font-semibold text-center mb-4"
          style={{ wordSpacing: "8px" }}
        >
            Browse Available Foods
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover fresh surplus food shared by generous community members.
            Request meals easily and help reduce food waste while feeding
            families in need.
          </p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left sidebar: Filters */}
          <aside className="lg:w-72 flex-shrink-0 bg-white p-6 rounded-md top-24">
            <h3 className="text-xl font-semibold mb-6 text-green-800">
              Filter & Sort
            </h3>

            {/* Sort Buttons */}
            <div className="mb-6 flex flex-col gap-3">
              <button
                onClick={() => setSortOrder("asc")}
                className={`w-full px-4 py-2 rounded-md font-medium transition-all text-center ${
                  sortOrder === "asc"
                    ? "bg-[#2F855A] text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Expire Date ↑
              </button>
              <button
                onClick={() => setSortOrder("desc")}
                className={`w-full px-4 py-2 rounded-md font-medium transition-all text-center ${
                  sortOrder === "desc"
                    ? "bg-[#2F855A] text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Expire Date ↓
              </button>
            </div>

            {/* Layout Toggle */}
            <button
              onClick={() => setColumns(columns === 3 ? 2 : 3)}
              className="w-full px-4 py-2 rounded-md bg-[#f7ca18] text-[#1F2937] font-semibold hover:bg-[#2F855A] transition-all mb-6"
            >
              {columns === 3 ? "2 Column View" : "3 Column View"}
            </button>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by food name..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1); // Reset page on search change
              }}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </aside>

          {/* Right content: Food list */}
          <main className="flex-1">
            {isLoading ? (
              <div className="text-center text-lg text-gray-500 py-20">
                Loading available foods...
              </div>
            ) : currentFoods.length > 0 ? (
              <>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-6`}
                >
                  {currentFoods.map((food) => (
                    <FoodCard key={food._id} food={food} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <nav
                    className="flex justify-center mt-10 space-x-2"
                    aria-label="Pagination"
                  >
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                      disabled={currentPage === 1}
                      className={`px-3 py-1 rounded-md font-medium ${
                        currentPage === 1
                          ? "cursor-not-allowed bg-gray-300 text-gray-600"
                          : "bg-green-600 text-white hover:bg-green-700"
                      }`}
                    >
                      Previous
                    </button>

                    {[...Array(totalPages)].map((_, i) => {
                      const pageNum = i + 1;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          aria-current={
                            currentPage === pageNum ? "page" : undefined
                          }
                          className={`px-3 py-1 rounded-md font-medium ${
                            currentPage === pageNum
                              ? "bg-green-700 text-white"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}

                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className={`px-3 py-1 rounded-md font-medium ${
                        currentPage === totalPages
                          ? "cursor-not-allowed bg-gray-300 text-gray-600"
                          : "bg-green-600 text-white hover:bg-green-700"
                      }`}
                    >
                      Next
                    </button>
                  </nav>
                )}
              </>
            ) : (
              <p className="text-center text-lg text-gray-500">
                No food items matched your search.
              </p>
            )}
          </main>
        </div>
      </section>
    </div>
  );
};

export default AvailableFood;
