import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../Style/Destination.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import img_1 from "../../assets/destination/sunset-with-silhoutte-birds-flying.jpg";
import img_3 from "../../assets/destination/outdoor-fishery-trip-village-thailand.jpg";
import img_4 from "../../assets/destination/landscape-cambodia.jpg";
import img_5 from "../../assets/destination/beautiful-view-island-with-jungle.jpg";
import img_6 from "../../assets/destination/beautiful-sunset-beach.jpg";
import img_7 from "../../assets/destination/beautiful-shot-lodhi-garden-delhi-india-cloudy-sky.jpg";
import img_8 from "../../assets/destination/asian-woman-wearing-chinese-traditional-dress-ban-rak-thai-village-mae-hong-son-province-thailand.jpg";
import img_10 from "../../assets/destination/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand.jpg";
import { IoLocationOutline } from "react-icons/io5";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";
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
      id: 10,
      name: "Lalbagh Fort",
      location: "Dhaka",
      img: img_10,
    },
  ];

  return (
      <div className="max-w-screen-2xl w-11/12 mx-auto my-12">
      <HeaderSection
        title="Most Popular Destinations"
        subtitle="Expand your travel horizons with new facets! Explore the world by choosing your ideal travel destinations across beautiful landscapes, vibrant cities, and breathtaking cultural landmarks."
      />

      {/* Grid layout instead of slider */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {destinations.map((des) => (
          <div
            key={des.id}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
          >
            <img
              src={des.img}
              alt={des.name}
              className="w-full lg:h-52 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Destination info */}
            <div className="absolute bottom-4 left-4 text-white space-y-1">
              <h3 className="text-lg font-bold">{des.name}</h3>
              <p className="flex items-center gap-1 text-sm">
                <IoLocationOutline className="text-primary" />
                {des.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
