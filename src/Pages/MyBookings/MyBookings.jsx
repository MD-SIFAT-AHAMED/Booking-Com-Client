import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaTrash, FaEdit, FaStar } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
// import { Helmet } from "react-helmet-async";


const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [reload, setReload] = useState(false);
  const [showModalDate, setShowModalDate] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModalCandel, setShowModalCancel] = useState(false);
  const [selectedCancel, setSelectedCancel] = useState(null);
  const [newDate, setNewDate] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    {
      document.title='My Booking'
    }
    axios
      .get(`http://localhost:5000/booking?email=${user.email}`)
      .then((res) => setBookings(res.data))
      .catch(() => toast.error("Failed to load bookings"));
  }, [reload, user.email]);

  const handleCancel = () => {
    const todayDate = new Date();
    const selectedDate = new Date(selectedCancel.bookingDate);
    const diff = Math.abs(todayDate - selectedDate);
    const diffDays = diff / (1000 * 60 * 60 * 24);

    if (diffDays < 1) {
      return toast.error(
        "You can only cancel the booking at least 1 day before the booking date"
      );
    }

    axios
      .delete(`http://localhost:5000/booking/${selectedCancel._id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          toast.success("Booking cancelled successfully");
          setShowModalCancel(false);
          setReload(!reload);
        }
      })
      .catch(() => toast.error("Cancellation failed"));
  };

  const handleDateUpdate = () => {
    if (!newDate) return toast.error("Please select a new date");
    axios
      .patch(`http://localhost:5000/booking/${selectedBooking._id}`, {
        bookingDate: newDate,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Booking date updated successfully");
          setShowModalDate(false);
          setReload(!reload);
        }
      })
      .catch(() => toast.error("Failed to update date"));
  };

  return (
    <div className="max-w-screen w-11/12 mx-auto my-10">
      {/* <Helmet key={location.pathname}>
        <title>My Booking</title>
      </Helmet> */}
      <div className="p-4 overflow-x-auto">
        <h2 className="text-2xl text-center font-bold mb-4">My Bookings</h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>
                  <img
                    src={booking.image}
                    alt={booking.name}
                    className="w-16 h-16 rounded"
                  />
                </td>
                <td>{booking.title}</td>
                <td>${booking.price}</td>
                <td>{booking.bookingDate}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <button
                      className="btn bg-red-500 text-gray-200 "
                      onClick={() => {
                        setSelectedCancel(booking);
                        setShowModalCancel(true);
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn text-gray-100 bg-blue-400"
                      onClick={() => {
                        setSelectedBooking(booking);
                        setShowModalDate(true);
                      }}
                    >
                      Update Date
                    </button>
                    <button
                      className="btn btn-info btn-xs"
                      onClick={() => toast.success("Review form coming soon!")}
                    >
                      <FaStar size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModalDate && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg mb-4">Update Booking Date</h3>
              <input
                type="date"
                className="input input-bordered w-full mb-4"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
              />
              <div className="modal-action">
                <button className="btn" onClick={() => setShowModalDate(false)}>
                  Cancel
                </button>
                <button
                  className="btn bg-green-400 text-gray-100"
                  onClick={handleDateUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}

        {showModalCandel && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg mb-4">Cancel Booking </h3>
              <div className="modal-action">
                <button
                  className="btn"
                  onClick={() => setShowModalCancel(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn bg-red-500 text-gray-100"
                  onClick={handleCancel}
                >
                  Confrim
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
