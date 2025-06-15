import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const RoomCard = ({ room }) => {
  const { _id, title, reviews = [], image, price, location } = room;
  const navigate = useNavigate();

  // Calculate average rating (default 0)
  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length).toFixed(1)
      : "0.0";

  return (
    <div
      onClick={() => navigate(`/roomDetails/${_id}`)}
      className="group overflow-hidden hover:cursor-pointer p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
    >
      <figure className="overflow-hidden rounded-lg">
        <img
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
          src={image}
          alt={title}
        />
      </figure>

      <div className="mt-4 space-y-1">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500 transition">
          {title}
        </h3>

        {location && (
          <p className="text-sm text-gray-500">{location}</p>
        )}

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-orange-400 font-semibold">
            <FaStar /> {avgRating}
          </span>
          <span className="text-sm text-gray-600">({reviews.length} reviews)</span>
        </div>

        <p className="text-base font-bold text-gray-800">$ {price} / night</p>
      </div>
    </div>
  );
};

export default RoomCard;
