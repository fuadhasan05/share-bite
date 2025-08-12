import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import Button from "../components/Button/Button";
import { Link } from "react-router";

const categories = [
  "All",
  "Community",
];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   // Set dynamic title
    useEffect(() => {
      document.title = "Share Bite - Blogs";
    }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/blogs`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blogs");
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  // Filter blogs by category if not "All"
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) =>
          blog.tags?.includes(selectedCategory.toLowerCase())
        );

  if (loading)
    return <LoadingSpinner/>
  if (error)
    return (
      <p className="text-center mt-8 text-red-500 font-semibold">{error}</p>
    );
  if (filteredBlogs.length === 0)
    return <p className="text-center mt-8 text-gray-600">No blogs found.</p>;

  return (
   <div className="bg-gradient-to-br from-[#E6F4EA] via-[#F0FFF4] to-[#E6F4EA] max-w-full">
     <section className="py-16 container mx-auto px-4">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full font-medium cursor-pointer transition ${
              selectedCategory === cat
                ? "bg-[#2F855A] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <article
            key={blog._id}
            className="bg-white rounded-md overflow-hidden flex flex-col"
          >
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-3">{blog.title}</h3>
              <p className="text-gray-700 flex-1 mb-6">{blog.excerpt}</p>
              <Link to={`/blogs/${blog._id}`}>
              <Button>Read More</Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
   </div>
  );
};

export default Blogs;
