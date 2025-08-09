import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import { motion } from "motion/react";
import { Link } from "react-router";
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
            <div className="relative h-[400px] md:h-[550px] w-full ">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={banner.image}
                alt="hotelRooms"
              />
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                // viewport={{once:true}}

                className="absolute top-[40%] right-2 md:right-30 left-2 md:left-[10%] space-y-2 bg-white/80 rounded p-5 md:p-10"
              >
                <h2 className=" text-2xl md:text-5xl text-black/85 text-shadow-lg font-bold">
                  {banner.heading}
                </h2>
                <p className="md:text-lg font-semibold text-black/85">
                  {banner.description}
                </p>
                <Link to={'/rooms'}>
                  <button className="btn border-none text-black/85 bg-primary rounded-lg">
                    Explore Room
                  </button>
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
