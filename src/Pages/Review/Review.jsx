import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../Style/Review.css";

const Review = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    axios
      .get("https://booking-com-server-murex.vercel.app/rooms/all-review")
      .then((res) => {
        setReviews(res.data);
      })
      .catch(() => {});
  }, []);
  // console.log(reviews);
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10 overflow-hidden">
        <h3 className="text-center text-2xl md:text-4xl font-bold my-5">Our Customers Review</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="reviewSwiper"
      >
        {reviews?.map((review,index) => (
          <SwiperSlide key={`${review._id}+${index}`}>
            <div className="bg-white p-5 shadow-2xl text-center w-full ">
              <h2 className="text-sm font-bold text-gray-800 mb-2">
                {review.user}
              </h2>
              <p className="text-yellow-500 text-sm mb-2">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </p>
              <p className="text-gray-600 text-sm italic">"{review.comment}"</p>
              <p className="text-sm text-gray-800 mb-2">{new Date(review.timestamp).toLocaleString()}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
