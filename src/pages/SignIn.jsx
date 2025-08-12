import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../contexts/AuthProvider";
import Button from "../components/Button/Button";

const SignIn = () => {
  const [error, setError] = useState("");
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Share Bite - Login";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(`Login failed: ${error.message}`);
      });
  };

  const handleGoogleLogin = () => {
    toast.info("Attempting Google login...");
    googleLogin()
      .then(() => {
        toast.success("Google login successful!");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(`Google login failed: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#E6F4EA] via-[#F0FFF4] to-[#E6F4EA] max-w-full ">
      <ToastContainer position="top-right" autoClose={1500} />
      <div className="max-w-lg w-full bg-white p-8 rounded-md shadow-lg border border-[#E6F4EA]">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#3CB371]">
          Sign in to Share Bite
        </h2>
        {/* Demo User */}
        <div className="mb-4 p-3 bg-yellow-100 text-yellow-900 rounded border border-yellow-300">
          <p className="mb-2">
            <strong>Use this if you don't want to create account:</strong>
          </p>
          <p>
            Email: <code>sharebite@admin.com</code>
          </p>
          <p>
            Password: <code>Pa$$w0rd!</code>
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-[#222]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CB371] bg-[#F8FBF9]"
              autoComplete="email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-[#222]"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CB371] bg-[#F8FBF9]"
              autoComplete="current-password"
            />
          </div>
          {error && <p className="text-red-600 text-xs">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <div className="my-5 flex items-center justify-center">
          <span className="text-gray-400">OR</span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md bg-white hover:bg-[#E6F4EA] transition duration-200 font-medium text-[#222] shadow"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-sm text-center mt-6 text-[#222]">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#3CB371] hover:underline font-semibold"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
