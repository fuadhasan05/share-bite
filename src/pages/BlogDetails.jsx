import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch main blog post
    fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    // Fetch recent posts for sidebar
    fetch(`${import.meta.env.VITE_API_URL}/blogs?limit=5&sort=-createdAt`)
      .then((res) => res.json())
      .then((data) => {
        setRecentPosts(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!blog)
    return <p className="text-center mt-20 text-red-500">Blog not found.</p>;

  return (
    <div className="bg-gradient-to-br from-[#E6F4EA] via-[#F0FFF4] to-[#E6F4EA] max-w-full">
      <div className="container mx-auto py-16 px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Main Blog Content */}
        <article className="md:col-span-2 bg-white rounded-md p-6">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
          <h1 className="text-5xl font-extrabold text-gray-900 mb-3">
            {blog.title}
          </h1>
          <div className="flex items-center text-sm text-gray-600 mb-8 space-x-4">
            <span>
              By <strong>{blog.author}</strong>
            </span>
            <span className="border-l border-gray-300 h-4"></span>
            <time
              dateTime={blog.createdAt}
              className="text-green-600 font-medium"
            >
              {new Date(blog.createdAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="border-l border-gray-300 h-4"></span>
            <span>{blog.readingTime}</span>
          </div>
          <div
            className="prose prose-green max-w-none text-lg"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {blog.tags?.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-4 py-1 rounded-full cursor-pointer hover:bg-green-200 transition"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Right: Sidebar with Recent Posts */}
        <aside className="bg-white rounded-md p-6">
          <h2 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">
            Recent Posts
          </h2>
          <ul className="space-y-6">
            {recentPosts.map((post) => (
              <li
                key={post._id}
                className="flex items-center gap-4 hover:bg-green-50 rounded p-2 transition"
              >
                <Link
                  to={`/blogs/${post._id}`}
                  className="flex items-center gap-4 w-full"
                >
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-20 h-14 object-cover rounded-md flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                      {post.title}
                    </h3>
                    <time className="text-[#2F855A] text-xs font-medium">
                      {new Date(post.createdAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a
              href="/blogs"
              className="text-[#2F855A] font-semibold hover:underline"
            >
              View All Blog Posts
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
