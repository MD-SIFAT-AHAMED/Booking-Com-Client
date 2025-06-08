import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../Style/Destination.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import img_1 from "../../assets/destination/sunset-with-silhoutte-birds-flying.jpg";
import img_2 from "../../assets/destination/palace-king-mahal-kingdom-shiva.jpg";
import img_3 from "../../assets/destination/outdoor-fishery-trip-village-thailand.jpg";
import img_4 from "../../assets/destination/landscape-cambodia.jpg";
import img_5 from "../../assets/destination/beautiful-view-island-with-jungle.jpg";
import img_6 from "../../assets/destination/beautiful-sunset-beach.jpg";
import img_7 from "../../assets/destination/beautiful-shot-lodhi-garden-delhi-india-cloudy-sky.jpg";
import img_8 from "../../assets/destination/asian-woman-wearing-chinese-traditional-dress-ban-rak-thai-village-mae-hong-son-province-thailand.jpg";
import img_9 from "../../assets/destination/architecture-ancient-monument-world-heritage-day-celebration.jpg";
import img_10 from "../../assets/destination/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand.jpg";
import { IoLocationOutline } from "react-icons/io5";
const Destination = () => {
  const destinations = [
    {
      id: 1,
      name: "Cox's Bazar",
      location: "Chattogram Division",
      img: img_1,
    },
    {
      id: 2,
      name: "Sundarbans",
      location: "Khulna Division",
      img: img_2,
    },
    {
      id: 3,
      name: "Srimangal",
      location: "Sylhet Division",
      img: img_3,
    },
    {
      id: 4,
      name: "Bandarban",
      location: "Chattogram Hill Tracts",
      img: img_4,
    },
    {
      id: 5,
      name: "Paharpur",
      location: "Naogaon, Rajshahi Division",
      img: img_5,
    },
    {
      id: 6,
      name: "Rangamati",
      location: "Chattogram Hill Tracts",
      img: img_6,
    },
    {
      id: 7,
      name: "Mahasthangarh",
      location: "Bogra, Rajshahi Division",
      img: img_7,
    },
    {
      id: 8,
      name: "Kuakata",
      location: "Patuakhali, Barisal Division",
      img: img_8,
    },
    {
      id: 9,
      name: "Saint Martin's Island",
      location: "Bay of Bengal, Cox's Bazar",
      img: img_9,
    },
    {
      id: 10,
      name: "Lalbagh Fort",
      location: "Dhaka",
      img: img_10,
    },
  ];

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto ">
      <div className="place-items-center text-center space-y-2 my-10">
        <h2 className=" text-2xl md:text-4xl font-bold">
          Most Popular Destinations
        </h2>
        <p className="md:w-1/2 text-gray-400">
          Expand your travel horizons with new facets! Explore the world by
          choosing your ideal travel destinations in Asia, Europe, America,
          Australia and more with ShareTrip.
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={6}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 3,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="destinationSwiper"
      >
        {destinations.map((des) => (
          <SwiperSlide key={des.id}>
            <div className="relative">
              <img src={des.img} />
              <div className="absolute top-2 left-3 space-y-1 font-semibold">
                <h3 className="bg-white/70 w-fit text-gray-800 px-2 py-1 rounded-full">{des.name}</h3>
                <p className="bg-white/70 w-fit text-gray-800 px-2 py-1 rounded-full flex items-center gap-1"><IoLocationOutline />{des.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Destination;
