import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const RoomCard = ({ room }) => {
  const { _id, title, reviews, image } = room;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/roomDetails/${_id}`)}
      className="group overflow-hidden hover:cursor-pointer p-6 bg-white rounded-xl shadow-md"
    >
      <figure className="overflow-hidden rounded-xl">
        <img
          className="h-54 w-full transition-transform duration-300 group-hover:scale-110"
          src={image}
          alt=""
        />
      </figure>
      <div className="my-3">
        <h3 className="text-lg md:text-xl font-semibold group-hover:underline group-hover:text-blue-400 ">
          {title}
        </h3>
        <p className="flex items-center gap-1">
          <span className="flex items-center gap-1 font-semibold">
            <FaStar className="text-orange-400" />5
          </span>
          <span>( {reviews.length} Reviews )</span>
        </p>
      </div>
    </div>
  );
};

export default RoomCard;
