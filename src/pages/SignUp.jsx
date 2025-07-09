import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../contexts/AuthProvider";

const Register = () => {
  const { createUser, setUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  // Set dynamic title
  useEffect(() => {
    document.title = "Share Bite - Register";
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters, include 1 uppercase, 1 lowercase, and a special character."
      );
      return;
    } else {
      setPasswordError("");
    }

    // Call createUser function to register the user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // Update the user's profile with name and photo URL
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          toast.success("Registration successful!");
          setTimeout(() => {
            navigate("/"); // <-- navigate to home after success
          }, 1200); // Give toast time to show
        });
      })
      .catch((error) => {
        setError(error.message);
        toast.error(`Registration failed: ${error.message}`);
      });
  };

  // Handle Google login
  const handleGoogleLogin = () => {
    toast.info("Attempting Google login...");
    googleLogin()
      .then(() => {
        toast.success("Google login successful!");
        setTimeout(() => {
          navigate("/");
        }, 1200);
      })
      .catch((error) => {
        setError(error.message);
        toast.error(`Google login failed: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Toast container for notifications */}
      <ToastContainer position="top-right" autoClose={1800} />

      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-[#E6F4EA]">
        {/* Page title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-[#3CB371]">
          Create your account
        </h2>

        {/* Registration form */}
        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name input */}
          <div>
            <label
              className="block mb-1 font-medium text-[#222]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CB371] bg-[#F8FBF9]"
            />
          </div>

          {/* Email input */}
          <div>
            <label
              className="block mb-1 font-medium text-[#222]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CB371] bg-[#F8FBF9]"
              autoComplete="email"
            />
          </div>

          {/* Photo URL input */}
          <div>
            <label
              className="block mb-1 font-medium text-[#222]"
              htmlFor="photo"
            >
              Photo URL
            </label>
            <input
              id="photo"
              name="photo"
              type="text"
              required
              placeholder="Link to your profile picture"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CB371] bg-[#F8FBF9]"
            />
          </div>

          {/* Password input */}
          <div>
            <label
              className="block mb-1 font-medium text-[#222]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CB371] bg-[#F8FBF9]"
              autoComplete="new-password"
            />
          </div>

          {/* Password error message */}
          {passwordError && (
            <p className="text-xs text-red-600">{passwordError}</p>
          )}
          {error && <p className="text-xs text-red-600">{error}</p>}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-[#3CB371] text-white py-2 rounded-lg font-semibold hover:bg-[#319e5c] transition duration-200 shadow"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center justify-center">
          <span className="text-gray-400">OR</span>
        </div>

        {/* Google login button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg bg-white hover:bg-[#E6F4EA] transition duration-200 font-medium text-[#222] shadow"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Redirect to login page */}
        <p className="text-sm text-center mt-6 text-[#222]">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-[#3CB371] hover:underline font-semibold"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
