import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import RoomCard from "./RoomCard";

const Rooms = () => {
  const rooms = useLoaderData();

  useEffect(() => {
    {
      document.title = "Booking.com | Rooms";
    }
  }, []);

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10">
      <h3 className="text-2xl text-center font-bold mb-4">All Rooms</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
