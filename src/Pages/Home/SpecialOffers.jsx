import React from "react";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/Banner2.jpg";
import img3 from "../../assets/Banner3.jpg";
const SpecialOffers = () => {
  const offers = [
    {
      title: "Stay 3 Nights, Get 1 Free",
      description:
        "Enjoy an extra night on us when you book for three consecutive nights.",
      image: img1,
    },
    {
      title: "Summer Escape – 20% Off",
      description:
        "Book your summer vacation now and enjoy 20% off on all room types.",
      image: img2,
    },
    {
      title: "Romantic Getaway Package",
      description:
        "Special couple's package including breakfast, dinner, and a spa session.",
      image: img3,
    },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto w-11/12 ">
      <HeaderSection
        title="Special Offers & Packages"
        subtitle=" Take advantage of our exclusive discounts and packages for an unforgettable stay"
      />

      <div className="grid md:grid-cols-3 gap-8">
        {offers.map((offer, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded overflow-hidden">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-base text-secondary lg:text-lg font-semibold">
                {offer.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 my-2">
                {offer.description}
              </p>
              <button className="btn bg-primary text-white rounded-lg hover:bg-primary/90">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
