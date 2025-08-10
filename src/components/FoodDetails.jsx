import { use, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import Button from "./Button/Button";

const FoodDetails = () => {
  const food = useLoaderData();
  const { user } = use(AuthContext);
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const requestDate = new Date().toLocaleString();
  const {
    _id,
    foodName,
    expiredDate,
    foodQuantity,
    foodImage,
    status,
    pickupLocation,
    donorName,
    donorEmail,
  } = food || {};

  // console.log(food);

  // handle food request submission
  const handleFoodRequest = async (e) => {
    e.preventDefault();
    const requestInfo = {
      requesterEmail: user?.email,
      notes,
      requestDate,
    };

    try {
      const token = await user.getIdToken(); // Get Firebase token
      await axios.post(
        `${import.meta.env.VITE_API_URL}/place-request/${_id}`,
        requestInfo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        title: "Success!",
        text: "Food requested successfully.",
        icon: "success",
        confirmButtonColor: "#3CB371",
      });

      setNotes("");
      document.getElementById("foodRequestModal").close();
      navigate("/my-requested-foods");
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.response?.data?.message || "Failed to request food.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#E6F4EA] via-[#F0FFF4] to-[#E6F4EA] max-w-full py-16">
      <div className="container mx-auto py-12 px-4">
      <div className=" rounded-lg flex flex-col md:flex-row overflow-hidden border border-[#E6F4EA]">
        <img
          src={foodImage}
          alt={foodName || "Food Image"}
          className="w-full md:w-1/2 h-96 object-cover"
        />
        <div className="p-8 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">{foodName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <span className="block text-gray-500">Food Quantity</span>
                <span className="font-semibold">{foodQuantity || "N/A"}</span>
              </div>
              <div>
                <span className="block text-gray-500">Expired Date</span>
                <span className="font-semibold">{expiredDate || "N/A"}</span>
              </div>
              <div>
                <span className="block text-gray-500">Status</span>
                <span className="font-semibold">{status || "N/A"}</span>
              </div>
              <div>
                <span className="block text-gray-500">Pickup Location</span>
                <span className="font-semibold">{pickupLocation || "N/A"}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button
                variant="primary"
                onClick={() =>
                  document.getElementById("foodRequestModal").showModal()
                }
              >
                Request
              </Button>
              <dialog id="foodRequestModal" className="modal">
                <div className="modal-box w-full max-w-2xl">
                  <h3 className="font-bold text-2xl mb-4">
                    Food Request Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <img
                        src={foodImage}
                        alt={foodName}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        <strong>Food Name:</strong> {foodName}
                      </p>
                      <p>
                        <strong>Food ID:</strong> {_id}
                      </p>
                      <p>
                        <strong>Donator Email:</strong> {donorEmail || "N/A"}
                      </p>
                      <p>
                        <strong>Donator Name:</strong> {donorName || "N/A"}
                      </p>
                      <p>
                        <strong>User Email:</strong> {user?.email}
                      </p>
                      <p>
                        <strong>Request Date:</strong> {requestDate}
                      </p>
                      <p>
                        <strong>Pickup Location:</strong> {pickupLocation}
                      </p>
                      <p>
                        <strong>Expire Date:</strong> {expiredDate}
                      </p>
                    </div>
                  </div>

                  <form>
                    <label
                      className="block text-gray-700 mb-1 font-medium"
                      htmlFor="notes"
                    >
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Add any notes or instructions here..."
                      className="w-full border border-gray-300 rounded p-2 mb-4 resize-none"
                      rows="3"
                    />

                    <div className="modal-action">
                      <Button
                        variant="primary"
                        onClick={handleFoodRequest}
                        type="submit"
                      >
                        Request
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() =>
                          document.getElementById("foodRequestModal").close()
                        }
                        type="button"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FoodDetails;
