import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router";
import useAxiosSecure from "../utils/useAxiosSecure";

const AddFood = () => {
  // Set dynamic title
  useEffect(() => {
    document.title = "Share Bite - Add Food";
  }, []);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newFood = Object.fromEntries(formData.entries());

    axiosSecure
      .post(`${import.meta.env.VITE_API_URL}/add-food`, newFood)
      .then(() => {
        Swal.fire({
          title: "Good Job!",
          text: "Food added successfully.",
          icon: "success",
          confirmButtonColor: "#2F855A",
        });
        form.reset();
        navigate("/available-foods");
      })
      .catch((error) => {
        console.error("Error adding food:", error);
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-10 space-y-4">
        <h1 className="text-5xl font-extrabold text-green-800">Add Food</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Please fill out the form below to add a new food donation. All fields
          are required unless marked optional.
        </p>
      </div>

      <form onSubmit={handleAddFood} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="bg-base-200 p-4 rounded-lg border border-base-300">
            <label className="label">Food Name</label>
            <input
              type="text"
              name="foodName"
              className="input input-bordered w-full"
              placeholder="Enter food name"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 p-4 rounded-lg border border-base-300">
            <label className="label">Quantity</label>
            <input
              type="number"
              name="foodQuantity"
              className="input input-bordered w-full"
              placeholder="Enter quantity"
              min="1"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 p-4 rounded-lg border border-base-300">
            <label className="label">Pickup Location</label>
            <input
              type="text"
              name="pickupLocation"
              className="input input-bordered w-full"
              placeholder="Enter pickup location"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 p-4 rounded-lg border border-base-300">
            <label className="label">Expired Date</label>
            <input
              type="date"
              name="expiredDate"
              className="input input-bordered w-full"
              required
            />
          </fieldset>
        </div>

        <fieldset className="bg-base-200 p-4 rounded-lg border border-base-300">
          <label className="label">Food Image URL</label>
          <input
            type="text"
            name="foodImage"
            className="input input-bordered w-full"
            placeholder="Enter image URL"
            required
          />
        </fieldset>

        <fieldset className="bg-base-200 p-4 rounded-lg border border-base-300">
          <label className="label">Additional Notes</label>
          <textarea
            name="notes"
            className="textarea textarea-bordered w-full"
            placeholder="Optional notes (e.g., contains nuts, fresh baked)"
          ></textarea>
        </fieldset>

        <fieldset className="bg-base-200 p-4 rounded-lg border border-base-300">
          <label className="label">Food Status</label>
          <input
            type="text"
            name="status"
            className="input input-bordered w-full"
            value="Available"
            readOnly
          />
        </fieldset>

        {/* Donor Info */}
        <fieldset className="bg-base-200 p-4 rounded-lg border border-base-300 flex items-center gap-4">
          <img
            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="Donor"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="w-full">
            <label className="label">Donor Name</label>
            <input
              type="text"
              name="donorName"
              className="input input-bordered w-full mb-2"
              value={user?.displayName || ""}
              readOnly
            />
            <label className="label">Donor Email</label>
            <input
              type="email"
              name="donorEmail"
              className="input input-bordered w-full"
              value={user?.email || ""}
              readOnly
            />
          </div>
        </fieldset>

        <input
          type="submit"
          value="Add Food"
          className="btn bg-[#2F855A] text-white rounded-xl w-full hover:bg-green-700 transition-all"
        />
      </form>
    </div>
  );
};

export default AddFood;
