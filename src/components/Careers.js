import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import DiamondBG from "../assets/Images/DiamondGradient.png";
import StarBg from "../assets/SVG/Careers/WorkBg.svg";

export default function Careers() {
  const fileInputRef = useRef(null);
  const [openPositions, setOpenPositions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Handle navigation to job application page
  const handleApplyNow = (jobId) => {
    navigate(`/careers/${jobId}`);
  };

  // Fetch jobs from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API}/jobs`, {
          method: "GET",
        });

        if (response.ok) {
          const jobs = await response.json();

          // Filter jobs to include only those with status "active"
          const activeJobs = jobs.filter((job) => job.status === "active");
          setOpenPositions(activeJobs);
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

    // Create form data for both requests
    const formDataWithJob = new FormData();
    formDataWithJob.append("name", formData.name);
    formDataWithJob.append("email", formData.email);
    formDataWithJob.append("resume", formData.resume);
    formDataWithJob.append("message", formData.message);
    formDataWithJob.append("job_role", formData.job_role);

    // Prepare formData for the second API
    const formDataForResumesApi = new FormData();
    formDataForResumesApi.append("name", formData.name);
    formDataForResumesApi.append("email", formData.email);
    formDataForResumesApi.append("phone", formData.phone);
    formDataForResumesApi.append("country", formData.country);
    formDataForResumesApi.append("coverLetterText", formData.coverLetterText);
    formDataForResumesApi.append("role", formData.job_role);
    formDataForResumesApi.append("message", formData.message);
    formDataForResumesApi.append("status", "new");
    formDataForResumesApi.append("resume", formData.resume);

    try {
      const response = await fetch(`${process.env.REACT_APP_API}/carrier`, {
        method: "POST",
        body: formDataWithJob,
      });

      if (response.ok) {
        const responseResume = await fetch(
          `${process.env.REACT_APP_API}/resumes`,
          {
            method: "POST",
            body: formDataForResumesApi,
          }
        );

        if (responseResume.ok) {
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
          toast.error("Failed to submit application to resumes API");
          setIsSubmitting(false);
        }
      } else {
        toast.error("Failed to submit application to carrier API");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting the application");
      setIsSubmitting(false);
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
    <section id="careers" className="py-20 px-4 bg-black">
      <div className="max-w-screen-2xl mx-auto ">
        <h1 className="text-4xl font-bold text-center text-white mt-5  mb-5">
          Join Our Team
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-6xl mx-auto">
          "Be a part of a dynamic team where your ideas ignite change, and your
          potential knows no bounds. Together, we’ll drive innovation and shape
          a brighter future for technology."
        </p>

        {/* Accordion for Job Positions */}
        <div className="space-y-4 mb-6 pt-10">
          <h1 className="text-white text-center text-2xl md:text-3xl">
            Featured Jobs In Starlabs
          </h1>
          <div
            className="bg-cover w-full"
            style={{ backgroundImage: `url(${StarBg})` }}
          >
            {openPositions.length === 0 ? (
              <p className="text-center text-gray-200 shadow-lg p-4 m-6 md:max-w-4xl mx-auto rounded-lg bg-[#151515]">
                No open positions available
              </p>
            ) : (
              openPositions.map((position) => (
                <div
                  key={position.id}
                  className="shadow-lg flex justify-between p-4 m-6 max-w-2xl md:max-w-4xl mx-auto rounded-lg bg-[#151515]"
                >
                  <div className="text-white w-8/12">
                    <h3 className=" text-base md:text-xl pb-3 ">
                      {position.role}
                    </h3>
                    <div className="">
                      <p className="text-sm">
                        Exp: {position.experience.slice(0, 9)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={() => handleApplyNow(position.id)}
                      className=" bg-[#00ff9d] hover:bg-[#00cc7d] text-black text-[0.73rem] xs:text-sm md:text-base py-1 px-3 rounded-full transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Application Form */}
        <div
          className="bg-cover bg-top w-full h-full"
          style={{ backgroundImage: `url(${DiamondBG})` }}
        >
          <div className="w-full max-w-2xl mx-auto p-6 backdrop-blur-[16px] backdrop-saturate-[180%] bg-[rgba(71,71,71,0.38)] rounded-[12px] border border-[rgba(255,255,255,0.125)]">
            <h3 className="text-2xl font-semibold mb-2 text-[#00ff9d]">
              Can&apos;t See A Position That Fits?
            </h3>
            <p className="text-[#00ff9d] text-sm pt-5 mb-8">
              Send Us Your Resume, And We&apos;ll Keep You In Mind For Future
              Opportunities.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 text-white/80">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium  mb-1"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-white/30 border bg-black text-white placeholder-white focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium   mb-1"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-white/30 border bg-black text-white placeholder-white focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>

              {/* Job Role */}
              <div>
                <label
                  htmlFor="job_role"
                  className="block text-sm font-medium  mb-1"
                >
                  Looking for<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="job_role"
                  name="job_role"
                  value={formData.job_role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-white/30 border bg-black text-white placeholder-white focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium   mb-1"
                >
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  rows="4"
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-white/30 border bg-black text-white placeholder-white focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              {/* Resume */}
              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium mb-1"
                >
                  Upload Resume<span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  ref={fileInputRef}
                  accept=".pdf,.doc,.docx"
                  className="block w-full border border-white/30 bg-black shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
        file:bg-black file:border-0
        file:me-4 file:text-white/40
        file:py-3 file:px-4"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="text-white text-[0.84rem]">
                <p>
                  "I Agree To The{" "}
                  <Link to="/privacypolicy" className="text-blue-500 underline">
                    Privacy Policy
                  </Link>{" "}
                  And{" "}
                  <Link
                    to="/termsofservices"
                    className="text-blue-500 underline"
                  >
                    Terms Of Services
                  </Link>
                  "
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#00ff9d] hover:bg-[#00cc7d] text-black font-medium py-2 rounded transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
