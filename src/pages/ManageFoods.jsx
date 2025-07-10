import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router";

const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  // Fetch user-specific foods
  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `${import.meta.env.VITE_API_URL}/manage-my-food/${encodeURIComponent(
            user.email
          )}`
        )
        .then((res) => {
          console.log("API Response:", res.data);
          if (Array.isArray(res.data)) {
            setFoods(res.data);
          } else {
            setFoods([]); // fallback in case response is not an array
          }
        })
        .catch((err) => {
          console.error("Failed to load foods:", err);
          setFoods([]); // handle error case
        });
    }
  }, [user]);

  // Delete food item with confirmation
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This food item will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3CB371",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/foods/${id}`);
        setFoods(foods.filter((food) => food._id !== id));
        Swal.fire("Deleted!", "Your food has been removed.", "success");
      } catch (error) {
        console.error("Delete failed:", error);
        Swal.fire("Error!", "Could not delete the item.", "error");
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
          {Array.isArray(foods) && foods.length > 0 ? (
            foods.map((food) => (
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
                  {/* Update (route-based) */}
                  <Link to={`/update-food/${food._id}`}>
                    <button className="btn btn-sm bg-yellow-400 hover:bg-yellow-500 text-white">
                      Update
                    </button>
                  </Link>
                  {/* Delete with confirmation */}
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
