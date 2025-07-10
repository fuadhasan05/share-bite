import { Link } from "react-router";

const FoodCard = ({ food }) => {
  const { _id, foodName, expiredDate, foodQuantity, foodImage } = food;

  return (
    <div className="card card-side bg-base-100 shadow-sm border-2">
      <figure>
        <img src={foodImage} alt="foodImg" />
      </figure>
      <div className="flex mt-8 w-full justify-around">
        <div>
          <h2 className=""> Food Name: {foodName}</h2>
          <p>Expired Date: {expiredDate}</p>
          <p>Quantity: {foodQuantity}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            <Link to={`/food/${_id}`}>
              <button className="btn join-item">View</button>
            </Link>
            <Link >
              <button className="btn join-item">Edit</button>
            </Link>
            <button className="btn join-item">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
