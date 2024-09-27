import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      subject: formData.subject,
    };

    emailjs
      .send(
        "service_17c371i",
        "template_cgeewpi",
        templateParams,
        "Gk9yjH54-ju1Mce5S"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!"); // Show success toast
          setFormData({ name: "", email: "", message: "", subject: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again later."); // Show error toast
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-200">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0 ml-6 mr-6 mt-4">
          <img
            src="https://i.imgur.com/zhPf9CC.png" // Use the Imgur URL directly
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
      <ToastContainer />
    </section>
  );
}