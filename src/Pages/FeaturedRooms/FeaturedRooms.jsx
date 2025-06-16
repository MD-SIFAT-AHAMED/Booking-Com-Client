import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import FeaturedRoomCard from "./FeaturedRoomCard";

const FeaturedRooms = () => {
  const [topRoom, setTopRoom] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/rooms/top")
      .then((res) => {
        setTopRoom(res.data);
      })
      .catch(() => {
        toast.error("Failed Fetchig Top Rated Rooms");
      });
  }, []);

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10">
      <h3 className="text-center text-2xl md:text-4xl font-bold my-5">
        Featured Rooms
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topRoom?.map((room) => (
          <FeaturedRoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
