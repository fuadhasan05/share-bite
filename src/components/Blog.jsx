import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        // Sort blogs by createdAt descending
        const sortedBlogs = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        // Take only first 4
        setBlogs(sortedBlogs.slice(0, 4));
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl font-semibold tracking-wide"
            style={{ wordSpacing: "8px" }}
          >
            LATEST BLOG
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-4">
            Join our community in reducing food waste — discover tips, stories,
            and recipes that make every bite count.
          </p>
        </div>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-md overflow-hidden flex flex-col"
              >
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />

                <div className="py-8 px-4 flex flex-col flex-1">
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {blog.title}
                  </h3>

                  <p className="text-gray-500 mb-2">
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>

                  <p className="text-gray-700 mb-4 flex-1">{blog.excerpt}</p>

                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-gray-400 text-sm">
                      {blog.readingTime}
                    </span>
                    <a
                      href={`/blogs/${blog._id}`}
                      className="text-[#2F855A] font-medium hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
