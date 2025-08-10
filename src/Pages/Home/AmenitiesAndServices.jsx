import {
  FaSwimmingPool,
  FaWifi,
  FaShuttleVan,
  FaConciergeBell,
  FaUtensils,
  FaSpa,
} from "react-icons/fa";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";

const AmenitiesAndServices = () => {
  const amenities = [
    {
      icon: <FaSwimmingPool className="text-4xl text-primary" />,
      title: "Swimming Pool",
      desc: "Relax and enjoy our luxurious outdoor pool with scenic views.",
    },
    {
      icon: <FaSpa className="text-4xl text-primary" />,
      title: "Spa & Wellness",
      desc: "Rejuvenate your body and mind with our premium spa treatments.",
    },
    {
      icon: <FaUtensils className="text-4xl text-primary" />,
      title: "Free Breakfast",
      desc: "Start your day with a variety of delicious breakfast options.",
    },
    {
      icon: <FaWifi className="text-4xl text-primary" />,
      title: "Free Wi-Fi",
      desc: "Stay connected with high-speed internet throughout the hotel.",
    },
    {
      icon: <FaShuttleVan className="text-4xl text-primary" />,
      title: "Airport Shuttle",
      desc: "Convenient transfers to and from the airport for a stress-free trip.",
    },
    {
      icon: <FaConciergeBell className="text-4xl text-primary" />,
      title: "24/7 Concierge",
      desc: "Our friendly staff is here to assist you anytime.",
    },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto w-11/12">
      <HeaderSection
        title="Amenities & Services"
        subtitle="Enjoy top-notch facilities and services designed to make your stay
            unforgettable"
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {item.icon}
              <h3 className="text-sm md:text-xl font-semibold text-secondary">
                {item.title}
              </h3>
            </div>
            <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesAndServices;
