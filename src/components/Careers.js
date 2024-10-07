import { useEffect, useRef, useState } from "react";
import Modal from "./CareerModal";
import { MapPinIcon } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Careers() {
  const fileInputRef = useRef(null);
  const [openPositions, setOpenPositions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch jobs from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://website-backend.starlabs.co.in/api/jobs",
          {
            method: "GET",
          }
        );

        if (response.ok) {
          const jobs = await response.json();
          setOpenPositions(jobs);
        } else {
          toast.error("Failed to fetch job positions");
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        toast.error("Error fetching job positions");
      }
    };

    fetchJobs();
  }, []);

  const handleApplyNow = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    resume: null,
    job_role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formDataWithJob = new FormData();
    formDataWithJob.append("name", formData.name);
    formDataWithJob.append("email", formData.email);
    formDataWithJob.append("resume", formData.resume);
    formDataWithJob.append("message", formData.message);
    formDataWithJob.append("job_role", formData.job_role);

    try {
      const response = await fetch(`${process.env.REACT_APP_API}/carrier`, {
        method: "POST",
        body: formDataWithJob,
      });

      if (response.ok) {
        toast.success("Application Submitted Successfully!");
        setIsSubmitting(false);
        setFormData({
          name: "",
          email: "",
          message: "",
          job_role: "",
          resume: null,
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
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

  return (
    <section id="careers" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Join Our Team
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          We are a fully remote team looking for passionate individuals to help
          us shape the future of technology.
        </p>

        {/* Job Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {openPositions.length === 0 ? (
            <p className="text-center text-gray-700">
              No open positions available
            </p>
          ) : (
            openPositions.map((position) => (
              <div
                key={position.id}
                className="shadow-lg rounded-lg p-6 bg-gray-100 text-gray-900"
              >
                <h3 className="text-xl font-semibold mb-2">{position.role}</h3>
                <p className="text-gray-600 mb-2">{position.experience}</p>
                <div className="flex items-center mb-2">
                  <MapPinIcon className="w-5 h-5 mr-2 text-blue-600" />
                  <p className="text-gray-600">{position.location}</p>
                </div>

                {/* Directly display Job Description and Qualifications */}
                <div className="mt-4">
                  <p className="mb-2 text-gray-800 font-bold">
                    Job Description:
                  </p>
                  <p className="text-gray-700 mb-4">{position.description}</p>
                  <p className="mb-2 text-gray-800 font-bold">
                    Qualifications:
                  </p>
                  <ul className="list-disc ml-5 text-gray-700">
                    {position.qualifications.map((qualification, index) => (
                      <li key={index}>{qualification}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    onClick={() => handleApplyNow(position.role)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Application Form */}
        <div className="shadow-lg rounded-lg p-6 max-w-2xl mx-auto bg-gray-100 text-gray-900">
          <h3 className="text-2xl font-semibold mb-4">
            Don't see a position that fits?
          </h3>
          <p className="text-gray-600 mb-6">
            Send us your resume, and we'll keep you in mind for future
            opportunities.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Job Role */}
            <div>
              <label
                htmlFor="job_role"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Looking for<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="job_role"
                name="job_role"
                value={formData.job_role}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                rows="4"
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Resume */}
            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Upload Resume<span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="resume"
                id="resume"
                ref={fileInputRef}
                accept=".pdf,.doc,.docx"
                className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
        file:bg-gray-50 file:border-0
        file:me-4
        file:py-3 file:px-4"
                required
                onChange={handleInputChange}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Modal for Job Application */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          selectedJob={selectedJob}
          openPositions={openPositions}
        />
      </div>
    </section>
  );
}
