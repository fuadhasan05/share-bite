import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateFood = () => {
  // Set dynamic title
  useEffect(() => {
    document.title = "Share Bite - Update Food";
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    foodName: "",
    foodQuantity: "",
    expiredDate: "",
    foodImage: "",
    pickupLocation: "",
  });

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/food/${id}`
        );
        setFood(res.data);
        setForm({
          foodName: res.data.foodName || "",
          foodQuantity: res.data.foodQuantity || "",
          expiredDate: res.data.expiredDate || "",
          foodImage: res.data.foodImage || "",
          pickupLocation: res.data.pickupLocation || "",
        });
      } catch {
        Swal.fire("Error", "Failed to load food data.", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchFood();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/update-food/${id}`,
        form
      );
      Swal.fire("Success", "Food updated successfully!", "success");
      navigate("/manage-my-food/" + food.donorEmail);
    } catch {
      Swal.fire("Error", "Failed to update food.", "error");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="text-lg text-gray-500">Loading...</span>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Update Food Information
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-medium mb-1">Food Name</label>
          <input
            type="text"
            name="foodName"
            value={form.foodName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-400"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Quantity</label>
          <input
            type="number"
            name="foodQuantity"
            value={form.foodQuantity}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-400"
            required
            min="1"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Expire Date</label>
          <input
            type="date"
            name="expiredDate"
            value={form.expiredDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-400"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Pickup Location</label>
          <input
            type="text"
            name="pickupLocation"
            value={form.pickupLocation}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-400"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="foodImage"
            value={form.foodImage}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded transition"
        >
          Update Food
        </button>
      </form>
    </div>
  );
};

export default UpdateFood;
