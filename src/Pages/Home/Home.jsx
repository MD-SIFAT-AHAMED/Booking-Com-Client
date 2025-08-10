import Banner from "./Banner";
import Faq from "./Faq";
import Destination from "./Destination";
import HotelLocation from "./HotelLocation";
import { Helmet } from "react-helmet-async";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import Review from "../Review/Review";
import SpecialOffers from "./SpecialOffers";
import AmenitiesAndServices from "./AmenitiesAndServices";
import WhyChooseUs from "./WhyChooseUs";


const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedRooms />
      <SpecialOffers />
      <AmenitiesAndServices/>
      <Destination />
      <WhyChooseUs/>
      <Review />
      <HotelLocation />
      <Faq />
    </div>
  );
};

export default Home;
