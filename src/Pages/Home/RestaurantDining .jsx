import React from "react";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";
import img1 from "../../assets/hero.jpg";
import img2 from "../../assets/hero2.jpg";
import img3 from "../../assets/hero3.jpg";

const diningItems = [
  {
    id: 1,
    title: "Signature Dish: Grilled Salmon",
    description:
      "Freshly grilled salmon served with seasonal vegetables and our special house sauce.",
    image: img1,
  },
  {
    id: 2,
    title: "Breakfast Buffet",
    description:
      "Enjoy a wide variety of fresh fruits, pastries, eggs, and hot beverages every morning.",
    image: img2,
  },
  {
    id: 3,
    title: "Cozy Dining Area",
    description:
      "Experience a warm and inviting atmosphere with elegant decor and attentive service.",
    image: img3,
  },
];

const RestaurantDining = () => {
  return (
    <section className="max-w-screen-2xl mx-auto w-11/12 ">
      <HeaderSection
        title="Restaurant & Dining"
        subtitle=" Discover the delightful dining options available at our hotel, crafted to satisfy every palate"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {diningItems.map((diningItem, idx) => (
          <div key={idx} className="bg-white shadow rounded overflow-hidden">
            <img
              src={diningItem.image}
              alt={diningItem.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-base text-secondary lg:text-lg font-semibold">
                {diningItem.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 my-2">
                {diningItem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RestaurantDining;
