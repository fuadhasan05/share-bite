import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router";

const AddFood = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newFood = Object.fromEntries(formData.entries());

    console.log(newFood);

    axios
      .post(`${import.meta.env.VITE_API_URL}/add-food`, newFood)
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Good Job!",
          text: "Data Added Successfully",
          icon: "success",
        });
        form.reset();
        navigate("/available-foods");
      })
      .catch((error) => {
        console.error("There was an error adding the food:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an error adding the food. Please try again.",
          icon: "error",
        });
      });
  };

  return (
    <div className="px-24 py-12">
      <div className=" text-center space-y-4">
        <h1 className="text-6xl">Add Food</h1>
        <p>
          Please fill out the form below to add a new food donation. All fields
          are required unless marked optional.
        </p>
      </div>
      <form className="py-12" onSubmit={handleAddFood}>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Food Name</label>
            <input
              type="text"
              name="foodName"
              className="input w-full"
              placeholder="Food Name"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Food Quantity</label>
            <input
              type="number"
              name="foodQuantity"
              className="input w-full"
              placeholder="Quantity"
              min="1"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Pickup Location</label>
            <input
              type="text"
              name="pickupLocation"
              className="input w-full"
              placeholder="Pickup Location"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Expired Date</label>
            <input
              type="date-local"
              name="expiredDate"
              className="input w-full"
              required
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
          <label className="label">Food Image (URL)</label>
          <input
            type="text"
            name="foodImage"
            className="input w-full"
            placeholder="Food Image URL"
            required
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
          <label className="label">Additional Notes</label>
          <textarea
            name="notes"
            className="input w-full"
            placeholder="Any additional notes (optional)"
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
          <label className="label">Food Status</label>
          <input
            type="text"
            name="status"
            className="input w-full"
            value="Available"
            readOnly
          />
        </fieldset>
        {/* Donor Section - prefilled and read-only */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4 items-center gap-4">
          <img
            src={user?.photoURL}
            alt="Donor"
            className="rounded-full w-16 h-16"
          />
          <div>
            <label className="label">Donor Name</label>
            <input
              type="text"
              name="donorName"
              className="input w-full mb-2"
              value={user?.displayName || ""}
              readOnly
            />
            <label className="label">Donor Email</label>
            <input
              type="email"
              name="donorEmail"
              className="input w-full"
              value={user?.email || ""}
              readOnly
            />
          </div>
        </fieldset>
        <input type="submit" className="btn w-full" value="Add Food" />
      </form>
    </div>
  );
};

export default AddFood;
