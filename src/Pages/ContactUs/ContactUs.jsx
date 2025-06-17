import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
    <div className="max-w-screen-2xl w-11/12 bg-base-200 mx-auto p-10 my-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 *:border-gray-200 *:outline-none"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full border p-2 rounded"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
