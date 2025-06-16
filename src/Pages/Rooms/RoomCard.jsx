import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const RoomCard = ({ room }) => {
  const { _id, title, image, description, price, reviews } = room;
  const navigate = useNavigate();

  // Calculate average rating (default 0)
  const avgRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length
        ).toFixed(1)
      : "0.0";

  return (
    <div
      onClick={() => navigate(`/roomDetails/${_id}`)}
      className="card bg-base-100 shadow-md hover:shadow-xl transition group cursor-pointer"
    >
      <figure className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover group-hover:scale-105 transition duration-300"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <p className="text-sm text-gray-600 line-clamp-2">
          {description?.slice(0, 100)}...
        </p>

        <div className="flex justify-between items-center mt-2">
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
            <FaStar />
            {avgRating}
            <span className="text-gray-500 ml-1">
              ({reviews.length} reviews)
            </span>
          </div>

          {/* Price */}
          <div>
            <p className="text-blue-600 font-semibold">${price}/night</p>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <button
            className="btn bg-blue-600 text-gray-200 hover:bg-blue-700"
            onClick={() => navigate(`/roomDetails/${_id}`)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
