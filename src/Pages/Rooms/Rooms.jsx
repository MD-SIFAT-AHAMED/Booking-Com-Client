import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import axios from "axios";
import toast from "react-hot-toast";
import Sppiner from "../Shared/Sppiner";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [max, setMax] = useState(null);
  const [min, setMin] = useState(null);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    {
      document.title = "Booking.com | Rooms";
    }
    axios
      .get(`https://booking-com-server-murex.vercel.app/rooms?min=${min}&max=${max}`)
      .then((res) => {
        setRooms(res.data);
        setReload(false);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, [max, min]);

  if(reload)
  {
    return <Sppiner/>
  }

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-25">
      <HeaderSection 
      title="All Rooms"
      subtitle="Explore our diverse range of comfortable and stylish rooms designed to suit every traveler’s needs and budget"
      />
      <div className="flex items-center justify-end my-5">
        <span className="text-lg font-extrabold"> Filter By Price :</span>
        <select
          className="w-3xs border-1 px-2 py-1 border-gray-300 bg-base-100 ml-2 "
          onChange={(e) => {
            const [min, max] = e.target.value.split("-");
            setReload(true);
            setMax(max);
            setMin(min);
          }}
        >
          <option value="">All Price</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-100000">$200 +</option>
        </select>
      </div>

      {rooms.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {rooms?.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center my-30">
          <span className="text-2xl font-bold">No Room Available !!</span>
        </div>
      )}
    </div>
  );
};

export default Rooms;
