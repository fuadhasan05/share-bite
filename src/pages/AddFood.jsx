import React from "react";

const AddFood = () => {
  return (
    <div className="px-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Add Food</h1>
        <p>
          Please fill out the form below to add a new food donation. All fields
          are required unless marked optional.
        </p>
      </div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <label className="label">Expired Date/Time</label>
            <input
              type="datetime-local"
              name="expiredDateTime"
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
          <input type="text" name="status" className="input w-full" readOnly />
        </fieldset>
        <input type="submit" className="btn w-full" value="Add Food" />
      </form>
      <div className="mt-10 flex items-center gap-4 bg-base-200 p-6 rounded-box border border-base-300">
        <img alt="Donor" className="rounded-full w-16 h-16" />
        <div>
          <div className="font-bold">Donor: </div>
          <div className="text-sm text-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
