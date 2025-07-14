import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthProvider';

const FoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [requestedFoods, setRequestedFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequestedFoods = async () => {
      if (!user?.email) return;
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/my-requested-foods/${encodeURIComponent(user.email)}`
        );
        setRequestedFoods(res.data);
      } catch (err) {
        setRequestedFoods([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRequestedFoods();
  }, [user?.email]);

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">My Requested Foods</h2>

      {loading ? (
        <div className="text-center text-gray-500 py-8">Loading...</div>
      ) : requestedFoods.length === 0 ? (
        <div className="text-center text-gray-500 py-8">No requested foods found.</div>
      ) : (
        <table className="table table-zebra w-full">
          <thead className="bg-green-100 text-gray-700">
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
            {requestedFoods.map((food, idx) => (
              <tr key={food._id}>
                <td>{food.foodName}</td>
                <td>{food.donorName || 'N/A'}</td>
                <td>{food.pickupLocation}</td>
                <td>{food.expiredDate}</td>
                <td>{food.requestDate}</td>
                <td>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium
                    ${
                      food.status === 'requested'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
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
  );
};

export default FoodRequest;
