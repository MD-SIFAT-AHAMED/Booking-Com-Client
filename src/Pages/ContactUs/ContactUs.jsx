import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    {
      document.title = "Contact Us ";
    }
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto px-10 py-5">
      <HeaderSection
        title="Contact Us"
        subtitle="Have a question or special request? Contact us and we’ll respond promptly"
      />
      <form onSubmit={handleSubmit} className="space-y-4 *:border *:border-gray-200 shadow-xs md:p-7 text-sm ">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full  p-2 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full  p-2 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full  p-2 rounded"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
