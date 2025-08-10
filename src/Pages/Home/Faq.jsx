import React from "react";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";

const Faq = () => {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10">
      <HeaderSection
        title="FAQ"
        subtitle="Find quick answers to the most common questions about our services, bookings, and policies."
      />
      <div className="join join-vertical bg-base-100 w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-sm md:text-base font-semibold">
            How can I book a room?
          </div>
          <div className="collapse-content text-xs md:text-sm">
            You can book a room by browsing our "Rooms" page, selecting your
            preferred room, and clicking the "Book Now" button. You'll need to
            log in or create an account to complete your booking.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-sm md:text-base font-semibold">
            Can I cancel or modify my booking?
          </div>
          <div className="collapse-content text-xs md:text-sm">
            Yes, you can cancel or modify your booking from the "My Bookings"
            page. Free cancellation is available up to 24 hours before your
            check-in date, depending on the room policy.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-sm md:text-base font-semibold">
            Do you offer any discounts or promo codes?
          </div>
          <div className="collapse-content text-xs md:text-sm">
            Yes! We offer seasonal discounts and promotional codes. Subscribe to
            our newsletter or check the homepage banner for current offers.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
