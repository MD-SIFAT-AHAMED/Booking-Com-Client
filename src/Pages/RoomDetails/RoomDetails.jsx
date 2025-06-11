import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Sppiner from "../Shared/Sppiner";

const RoomDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [roomData, setRoomData] = useState(null);
  const [reload, setReload] = useState(false);
  const { user } = useAuth();
  const { roomId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/rooms/${roomId}`)
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
    console.log(bookRoomData)
    axios
      .post("http://localhost:5000/booking", bookRoomData)
      .then((res) => {
        if (res.data.success && res.data.insertedId) {
          setReload(!reload);
          setShowModal(false);
          toast.success("Room booked successfully!");
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
        <img
          className="w-full h-80 object-cover rounded-xl mb-6"
          src={image}
          alt={title}
        />
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="grid grid-cols-2 gap-4 text-gray-700 mb-4">
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
          className="btn w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {available ? "Book Now" : "Not Available"}
        </button>
        <div className="my-6">
          <h3 className="text-xl font-semibold mb-2">Reviews</h3>
          {reviews.length > 0 ? (
            <ul className="space-y-2">
              {reviews.map((review) => (
                <li key={review.id} className="bg-gray-100 p-3 rounded">
                  <p className="font-semibold">{review.user}</p>
                  <p className="flex items-center gap-1 text-yellow-500">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </p>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No reviews available for this room.</p>
          )}
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
