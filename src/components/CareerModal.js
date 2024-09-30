import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Modal({ isOpen, onClose, selectedJob }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetterText: "",
    resume: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formDataWithJob = new FormData();
    formDataWithJob.append("name", formData.name);
    formDataWithJob.append("email", formData.email);
    formDataWithJob.append("phone", formData.phone);
    formDataWithJob.append("coverLetterText", formData.coverLetterText);
    formDataWithJob.append("resume", formData.resume);
    formDataWithJob.append("job_role", selectedJob);

    try {
      const response = await fetch(`${process.env.REACT_APP_API}/carrier`, {
        method: "POST",
        body: formDataWithJob,
      });

      if (response.ok) {
        console.log(response);
        toast.success("Application Submitted Successfully!");
        setTimeout(() => {
          onClose();
        }, 1000);
        setIsSubmitting(false);
      } else {
        toast.error("Failed to submit application");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting the application");
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Apply for {selectedJob}
        </h3>
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div>
            <label
              htmlFor="modal-name"
              className="block text-sm font-medium text-gray-700"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="modal-name"
              name="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="modal-email"
              className="block text-sm font-medium text-gray-700"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="modal-email"
              name="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800"
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="modal-phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="modal-phone"
              name="phone"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800"
              onChange={handleInputChange}
            />
          </div>

          {/* Cover Letter */}
          <div>
            <label
              htmlFor="modal-cover-letter-text"
              className="block text-sm font-medium text-gray-700"
            >
              Cover Letter<span className="text-red-500">*</span>
            </label>
            <textarea
              id="modal-cover-letter-text"
              name="coverLetterText"
              rows="4"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800"
              placeholder="Write your cover letter here..."
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          {/* Upload Resume */}
          <div>
            <label
              htmlFor="modal-resume"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Resume<span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              onChange={handleInputChange}
              name="resume"
              id="resume"
              accept=".pdf,.doc,.docx"
              class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm text-gray-900 focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
        file:bg-gray-200 file:border-0
        file:me-4
        file:py-3 file:px-4
      "
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
}
