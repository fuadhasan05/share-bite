import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import useAxiosSecure from "../utils/useAxiosSecure"; 
import LoadingSpinner from "../components/LoadingSpinner";

const FoodRequest = () => {
  useEffect(() => {
    document.title = "Share Bite - Food Requests";
  }, []);

  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure(); 
  const [requestedFoods, setRequestedFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequestedFoods = async () => {
      if (!user?.email) return;
      try {
        const res = await axiosSecure.get(
          `/my-requested-foods/${encodeURIComponent(user.email)}`
        );
        setRequestedFoods(res.data);
      } catch (err) {
        console.error("Error fetching requested foods:", err);
        setRequestedFoods([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRequestedFoods();
  }, [user?.email, axiosSecure]);

  return (
    <div className="bg-gradient-to-br from-[#E6F4EA] via-[#F0FFF4] to-[#E6F4EA] max-w-full py-16">
      <div className="px-4 min-h-[70vh]">
      <h2
          className="text-3xl font-semibold text-center mb-4"
          style={{ wordSpacing: "8px" }}
        >
        My Requested Foods
      </h2>

      {loading ? (
        <LoadingSpinner/>
      ) : requestedFoods.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          No requested foods found.
        </div>
      ) : (
        <table className="table table-zebra container mx-auto px-4 mt-12">
          <thead className="bg-white text-gray-900">
            <tr>
              <th>Food Name</th>
              <th>Donor Name</th>
              <th>Pickup Location</th>
              <th>Expire Date</th>
              <th>Request Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requestedFoods.map((food) => (
              <tr key={food._id}>
                <td>{food.foodName}</td>
                <td>{food.donorName || "N/A"}</td>
                <td>{food.pickupLocation}</td>
                <td>{food.expiredDate}</td>
                <td>{food.requestDate}</td>
                <td>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium
                    ${
                      food.status === "requested"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {food.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default FoodRequest;
