import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
const Banner = () => {
  const sliderData = [
    {
      id: 1,
      heading: "Welcome to Hotel Paradise",
      description: "Experience luxury and comfort in the heart of the city.",
      image: banner3, // optional
    },
    {
      id: 2,
      heading: "Unwind in Style",
      description: "Book our top-rated deluxe suites at special prices.",
      image: banner1,
    },
    {
      id: 3,
      heading: "Your Getaway Starts Here",
      description: "Enjoy world-class service and scenic views.",
      image: banner2,
    },
  ];

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="bannerSwiper"
      >
        {sliderData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-[400px] md:[600px] w-full ">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={banner.image}
                alt="hotelRooms"
              />
              <div className="absolute top-[40%] left-2 md:left-[10%] space-y-2 bg-white/70 rounded p-5 md:p-10">
                <h2 className=" text-2xl md:text-5xl text-black/70 text-shadow-lg font-bold">
                  {banner.heading}
                </h2>
                <p className="md:text-lg font-semibold text-black/70">
                  {banner.description}
                </p>
                <button className="btn border-none text-black/70 bg-gray-200 rounded-lg">
                  Explore Room
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
