import React, { useEffect } from "react";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";

const AboutUs = () => {
  useEffect(() => {
    {
      document.title = "About Us ";
    }
  });
  return (
    <div>
      <div className="max-w-screen-2xl min-h-80 w-11/12 mx-auto p-5 my-10">
        <HeaderSection 
        title="About Us"
        />
        <p className="text-sm md:text-lg text-gray-700 w-9/10 mx-auto text-center leading-7">
          Welcome to Booking.com! We are dedicated to providing the best hotel
          booking experience. Whether you're planning a relaxing vacation or a
          business trip, we aim to make your stay comfortable and memorable.
        </p>
        <p className="text-gray-700  w-9/10 mx-auto mt-4 text-center leading-7">
          Our platform features top-rated rooms, real customer reviews, secure
          booking, and reliable customer support. With years of experience in
          hospitality, we ensure that your satisfaction is our priority.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
