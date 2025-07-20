import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router";
import axios from "axios";
import useAxiosSecure from "../utils/useAxiosSecure";
import { use } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const ManageFood = () => {
  // Set dynamic title
  useEffect(() => {
    document.title = "Share Bite - Manage My Food";
  }, []);

  const { user } = use(AuthContext);
  const [foodData, setFoodData] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        if (user?.email) {
          const res = await axiosSecure.get(`/manage-my-food/${user?.email}`);
          setFoodData(res.data);
        }
      } catch (err) {
        console.error("Failed to load foods:", err);
      }
    };

    fetchFoods();
  }, [user, axiosSecure]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This food will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/delete-food/${id}`);
        setFoodData(foodData.filter((food) => food._id !== id));
        Swal.fire("Deleted!", "The food has been deleted.", "success");
      } catch {
        Swal.fire("Error", "Failed to delete food.", "error");
      }
    }
  };

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage My Foods</h2>
      <table className="table table-zebra w-full">
        <thead className="bg-green-100 text-gray-700">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Expire Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(foodData) && foodData.length > 0 ? (
            foodData.map((food) => (
              <tr key={food._id}>
                <td>
                  <img
                    src={food.foodImage}
                    alt={food.foodName}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td>{food.foodName}</td>
                <td>{food.foodQuantity}</td>
                <td>{food.expiredDate}</td>
                <td className="space-x-2">
                  <Link to={`/update-food/${food._id}`}>
                    <button className="btn btn-sm bg-yellow-400 hover:bg-yellow-500 text-white">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-8 text-gray-500">
                No food items added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFood;
