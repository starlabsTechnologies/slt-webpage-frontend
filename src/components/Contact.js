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
    <section id="contact" className="py-20 px-4 bg-gray-100">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0 ml-6 mr-6 mt-4">
          <img
            src="https://i.imgur.com/zhPf9CC.png"
            alt="Contact Call"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="text-4xl text-black font-bold mb-8 text-center lg:text-left">
            Join Us in Shaping the Future
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full lg:w-3/4 px-4 py-3 rounded-lg bg-gray-300 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full lg:w-3/4 px-4 py-3 rounded-lg bg-gray-300 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full lg:w-3/4 px-4 py-3 rounded-lg bg-gray-300 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full lg:w-3/4 px-4 py-3 rounded-lg bg-gray-300 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full lg:w-3/4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </section>
  );
}
