import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import FeaturedRoomCard from "./FeaturedRoomCard";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";

const FeaturedRooms = () => {
  const [topRoom, setTopRoom] = useState();

  useEffect(() => {
    axios
      .get("https://booking-com-server-murex.vercel.app/rooms/top")
      .then((res) => {
        setTopRoom(res.data);
      })
      .catch(() => {
        toast.error("Failed Fetchig Top Rated Rooms");
      });
  }, []);

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10">
      <HeaderSection
        title=" Featured Rooms"
        subtitle="Discover our selection of premium rooms, each designed to offer exceptional comfort, modern amenities, and a truly memorable stay"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topRoom?.map((room) => (
          <FeaturedRoomCard key={room._id} room={room} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn bg-primary text-white ">See All Rooms</button>
      </div>
    </div>
  );
};

export default FeaturedRooms;
