import {
  FaCheckCircle,
  FaStar,
  FaMapMarkerAlt,
  FaDollarSign,
} from "react-icons/fa";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <FaDollarSign className="text-3xl  md:text-4xl text-primary" />
      ),
      title: "Best Price Guarantee",
      desc: "We offer the best prices with no hidden fees — guaranteed.",
    },
    {
      icon: <FaStar className="text-3xl md:text-4xl text-primary" />,
      title: "Top-Rated Service",
      desc: "Our guests love our friendly staff and 5-star service.",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl md:text-4xl text-primary" />,
      title: "Prime Location",
      desc: "Stay in the heart of the city, close to major attractions.",
    },
    {
      icon: <FaCheckCircle className="text-3xl md:text-4xl text-primary" />,
      title: "Clean & Safe",
      desc: "We maintain the highest standards of cleanliness and safety.",
    },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto w-11/12">
      <HeaderSection
        title="Why Choose Us"
        subtitle="Discover the reasons why thousands of guests choose our hotel for an
          unforgettable stay"
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-base-100 rounded-2xl shadow p-6 flex flex-col items-center text-center hover:shadow transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-sm md:text-xl text-secondary font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-xs md:text-sm ">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
