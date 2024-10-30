import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API}/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("SUCCESS!", result);
        toast.success("Message sent successfully!"); // Show success toast
        setFormData({ name: "", email: "", message: "", subject: "" });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Failed to send message. Please try again later."); // Show error toast
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 bg-gray-100"
      style={{
        backgroundImage: "url('https://website-container.s3.ap-south-1.amazonaws.com/contact.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to adjust opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-between z-10">
        {/* Title and Description */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 ml-6 mr-6 mt-20 lg:mt-32 xl:mt-48 text-blue-500 text-4xl font-bold">
          Contact Us
          <p className="mt-4 text-white text-2xl">
            Connect with Starlabs Technologies to explore cutting-edge solutions
            tailored to your business needs. Our team is here to help you
            innovate and achieve your goals.
          </p>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="text-4xl text-blue-500 font-bold mb-8 text-center lg:text-left">
            Get In Touch
          </h2>
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-md">
            {/* Background for the form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
