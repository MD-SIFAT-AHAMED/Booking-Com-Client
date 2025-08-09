import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Faq from "./Faq";
import Destination from "./Destination";
import HotelLocation from "./HotelLocation";
import { Helmet } from "react-helmet-async";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import Review from "../Review/Review";
import SpecialOffer from "../SpecialOffer/SpecialOffer";

const Home = () => {
  const [showOffer, setShowOffer] = useState(false);
  useEffect(() => {
    {
      document.title = "Booking.com | Home";
    }
    const offerSeen = localStorage.getItem("specialOfferShown");
    if (!offerSeen) {
      setShowOffer(true);
      localStorage.setItem("specialOfferShown", "true");
    }
  }, []);
  const handleClosePopup = () => {
    setShowOffer(false);
  };
  return (
    <div>
      {showOffer && <SpecialOffer onClose={handleClosePopup} />}
      <Banner />
      <FeaturedRooms />
      <Destination />
      <Review />
      <HotelLocation />
      <Faq />
    </div>
  );
};  

export default Home;
