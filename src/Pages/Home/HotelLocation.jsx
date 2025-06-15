import React from "react";

const HotelLocation = () => {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10 border-gray-300 ">
      <h2 className=" text-2xl text-center my-4 md:text-4xl font-bold">Hotel Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58412.5693232865!2d90.34923943667717!3d23.79064853348935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73a476cd2f1%3A0x8492e0ff0ba05649!2sRenaissance%20Dhaka%20Gulshan%20Hotel!5e0!3m2!1sen!2sbd!4v1749902924977!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default HotelLocation;
