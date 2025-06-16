import React, { useEffect } from "react";
import Banner from "./Banner";
import Faq from "./Faq";
import Destination from "./Destination";
import HotelLocation from "./HotelLocation";
import { Helmet } from "react-helmet-async";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";

const Home = () => {
  useEffect(() => {
    {
      document.title = "Booking.com | Home";
    }
  }, []);

  return (
    <div>
      <Banner />
      <FeaturedRooms/>
      <Destination />
      <HotelLocation />
      <Faq />
    </div>
  );
};

export default Home;
