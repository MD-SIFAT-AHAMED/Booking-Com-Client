import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Sppiner from "../Shared/Sppiner";
import { Navigate } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";

const RoomDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [roomData, setRoomData] = useState(null);
  const [reload, setReload] = useState(false);
  const { user } = useAuth();
  const { roomId } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    {
      document.title = "Room Details";
    }

    axios
      .get(`https://booking-com-server-murex.vercel.app/rooms/${roomId}`)
      .then((res) => {
        setRoomData(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch room:", err);
        toast.error("Could not load room details.");
      });
  }, [roomId, reload]);

  if (!roomData) {
    return <Sppiner />;
  }

  const {
    title,
    description,
    image,
    price,
    bed,
    size,
    capacity,
    services,
    available,
    reviews,
  } = roomData;

  const handlerBooking = () => {
    if (!user) {
      return navigate("/login");
    }

    if (!available) return toast.error("This Room Already Booked");
    setShowModal(true);
  };

  const handleBookingConfirm = () => {
    const { _id, ...restRoomData } = roomData;
    const bookRoomData = {
      ...restRoomData,
      roomId: _id,
      email: user.email,
      name: user.displayName,
      bookingDate: selectedDate,
    };

    axiosSecure
      .post(`/booking`, bookRoomData)
      .then((res) => {
        if (res.data.success && res.data.insertedId) {
          setReload(!reload);
          setShowModal(false);
          toast.success("Room booked successfully!");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  if (!reviews || reviews.length === 0) {
    return <p className="text-gray-500">No reviews available for this room.</p>;
  }

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-25">
      <HeaderSection
        title="Room Details"
        subtitle="Discover everything you need to know about this room — comfort features, availability, and guest feedback"
      />
      <div className="bg-white rounded-xl  p-6 flex flex-col md:flex-row gap-8">
        {/* Image */}
        <img
          className="w-full md:w-1/2 h-80 object-cover rounded-xl"
          src={image}
          alt={title}
        />

        {/* Details */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-xl lg:text-2xl text-primary font-bold mb-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-4">{description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
            <p>
              <strong>Price:</strong> ${price}
            </p>
            <p>
              <strong>Bed:</strong> {bed}
            </p>
            <p>
              <strong>Size:</strong> {size}
            </p>
            <p>
              <strong>Capacity:</strong> {capacity} person(s)
            </p>
            <p>
              <strong className={available ? "text-green-400" : "text-red-500"}>
                {available ? "Available" : "Unavailable"}
              </strong>
            </p>
            <p>
              <strong>Services:</strong> {services?.join(", ")}
            </p>
          </div>

          <button
            onClick={handlerBooking}
            className="btn w-full bg-primary text-white px-6 py-2 rounded hover:bg-primary/80 mb-6"
          >
            Book Now
          </button>

          <div>
            <h3 className="text-lg font-semibold mb-4">Reviews</h3>
            <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-shrink-0 w-72 bg-gray-100 p-4 rounded"
                >
                  <p className="text-sm font-semibold mb-1">{review.user}</p>
                  <p className="flex items-center gap-1 text-yellow-500 mb-2">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    {Array(5 - review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={`empty-${i}`} className="text-gray-300" />
                      ))}
                  </p>
                  <p className="text-xs lg:text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-white/70 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
              <button
                className="absolute top-2 right-2 text-xl"
                onClick={() => setShowModal(false)}
              >
                <RxCross1 />
              </button>
              <h3 className="text-2xl font-bold mb-4">Booking Summary</h3>
              <p>
                <strong>Room:</strong> {title}
              </p>
              <p>
                <strong>Price:</strong> ${price}
              </p>
              <p>
                <strong>Description:</strong> {description}
              </p>

              <div className="my-4">
                <label className="block font-semibold mb-1">
                  Select Booking Date
                </label>
                <input
                  type="date"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="input"
                />
              </div>

              <button
                onClick={handleBookingConfirm}
                className="btn bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full"
                disabled={!selectedDate}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomDetails;
