import { useState } from "react";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router";

const ManageFood = () => {
  const foods = useLoaderData();
  const [foodData] = useState(foods.data || []);

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
