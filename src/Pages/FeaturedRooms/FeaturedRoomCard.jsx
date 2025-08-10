import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const FeaturedRoomCard = ({ room }) => {
  const navigate = useNavigate();
  const { _id, title, image, description, price, reviews } = room;

  // Calculate average rating
  const averageRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(
        1
      )
    : "No rating";

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition group cursor-pointer">
      <figure className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-42 w-full object-cover group-hover:scale-105 transition duration-300"
        />
      </figure>

      <div className="card-body">
        <h2 className="text-lg font-semibold">{title}</h2>

        <p className="text-xs text-gray-600 line-clamp-2">
          {description?.slice(0, 100)}...
        </p>

        <div className="flex justify-between items-center mt-2">
          {/* Rating */}
          <div className="flex text-xs items-center gap-1 text-yellow-500 font-medium">
            <FaStar />
            {averageRating}
            <span className="text-gray-500 ml-1">
              ({reviews.length} reviews)
            </span>
          </div>
          {/* Price */}
          <div className="hidden lg:flex">
            <p className="text-[#876527] text-xs font-semibold">${price}/night</p>
          </div>
        </div>
        <div className="lg:hidden">
          <p className="text-[#5a4317] text-xs font-semibold">${price}/night</p>
        </div>

        <div className="card-actions justify-end mt-4">
          <button
            className="btn text-xs w-full bg-primary/85 text-white font-semibold hover:bg-primary"
            onClick={() => navigate(`/roomDetails/${_id}`)}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoomCard;
