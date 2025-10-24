import React, { useState } from "react";
import "./contactUs.css";
import video from "../../Video/contact.mp4";
import axios from "axios";
import { toast } from "react-toastify";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [messageLoading, setMessageLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageLoading(true);
    try {
      const response = await axios.post(
        "https://cpcnew.onrender.com/send-email",
        formData
      );

      setMessageLoading(false);
      toast.success("SuccessFully Message Sent");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div
      className="videoSection w-full flex justify-center items-center p-2 tablet:p-4 laptop:p-6 overflow-hidden"
    >
      {messageLoading && (
        <div className="fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-center text-xl text-white bg-black/70">
          <FontAwesomeIcon icon={faRocketchat} className="mr-2" /> Sending...
        </div>
      )}

      {/* Main container */}
      <div className="relative p-4 w-full h-auto min-h-[80vh] tablet:min-h-[90vh] laptop:h-[85vh] desktop:h-[100vh] bg-light-green rounded-xl flex flex-col laptop:flex-row overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          loop
          playsInline
          muted
          className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 w-full h-full bg-black/50 z-0 rounded-xl"></div>

        {/* Left Text Section */}
        <div className="relative z-10 w-full laptop:w-1/2 flex flex-col justify-center items-start text-left p-3 tablet:p-5 laptop:p-10 gap-2">
          <p className="font-bold text-white text-lg tablet:text-3xl laptop:text-4xl font-poppins">
            Let's Get in Touch
          </p>
          <p className="text-white text-sm tablet:text-base laptop:text-lg max-w-xl leading-relaxed">
            We're here to assist you with any questions or concerns. Reach out to us and we'll respond as soon as we can.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="relative z-10 w-full laptop:w-1/2 flex flex-col justify-center items-center px-3 tablet:px-6 laptop:px-10 py-6 laptop:py-0">
          <form
            onSubmit={handleSubmit}
            className="w-full tablet:w-[400px] laptop:w-[500px] flex flex-col gap-4"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-[45px] tablet:h-[55px] outline-none text-base tablet:text-lg p-3 rounded-lg text-white bg-transparent border border-white placeholder-white"
              placeholder="Name"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[45px] tablet:h-[55px] outline-none text-base tablet:text-lg p-3 rounded-lg text-white bg-transparent border border-white placeholder-white"
              placeholder="Email Address"
              required
            />

            {/* Phone */}
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-[45px] tablet:h-[55px] outline-none text-base tablet:text-lg p-3 rounded-lg text-white bg-transparent border border-white placeholder-white"
              placeholder="Phone Number"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Have anything to say..."
              className="w-full h-[120px] tablet:h-[160px] outline-none text-base tablet:text-lg p-3 rounded-lg text-white bg-transparent border border-white placeholder:text-white resize-none"
              required
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button type="submit" className="btn-53">
                <div className="original text-lg">Send</div>
                <div className="letters text-lg">
                  <span>S</span>
                  <span>e</span>
                  <span>n</span>
                  <span>d</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

export default ContactUs;
