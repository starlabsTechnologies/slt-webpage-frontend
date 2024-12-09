import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CareerModal from "./CareerModal";
import { Footer, Navbar } from "../components";
import { MapPin, Briefcase } from "lucide-react";
import DiamondBg from "../assets/Images/DiamondGradient.png";
import { motion } from "motion/react";

export default function JobDetailPage() {
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    // Fetch job details based on jobId
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API}/jobs/${jobId}`
        );
        const data = await response.json();
        setJobDetails(data);
      } catch (error) {
        console.error("Failed to fetch job details:", error);
      }
    };
    fetchJobDetails();
  }, [jobId]);

  if (!jobDetails) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Loading job details...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div
        className=" bg-black bg-center bg-contain "
        style={{ backgroundImage: `url(${DiamondBg})` }}
      >
        <div className="relative mx-auto max-w-screen-2xl flex flex-col md:flex-row pt-20 px-4 md:px-10 lg:px-20 gap-6">
          {/* Left side - Job Details */}
          <div className="w-full md:w-1/2 p-4 md:p-6 shadow-lg mb-6 backdrop-blur-[16px] backdrop-saturate-[180%] bg-[rgba(71,71,71,0.38)] rounded-[12px] border border-[rgba(255,255,255,0.125)]">
            <h1 className="text-2xl md:text-xl text-center font-semibold text-green-400 mb-4">
              {jobDetails.role}
            </h1>
            <div className="flex flex-col gap-4 mt-8 mb-16">
              <div className="flex gap-4 text-white">
                <MapPin className="w-6 h-6  flex-shrink-0" />
                <div className="">
                  <p className="tracking-tight">
                    Location - {jobDetails.location} - {jobDetails.country}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Briefcase className="w-6 h-6 text-white flex-shrink-0" />
                <div className="">
                  <p className="text-white">
                    Experience - {jobDetails.experience.slice(0, 9)}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:pl-12 text-white/90 ">
              <h3 className="text-base md:text-lg ">Job Summary:</h3>
              <p className="text-white/80 text-sm xs:text-base leading-relaxed  mt-8 md:my-12">
                {jobDetails.description}
              </p>

              <h3 className="mt-10 md:mt-0">Qualifications :</h3>
              <ul className=" list-disc pl-7 my-10 flex flex-col gap-3">
                {jobDetails.qualifications.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" absolute md:left-[45%] lg:left-[46.3%] xl:left-[47.6%] 2xl:left-[47.7%] z-40 md:flex overflow-visible">
            {" "}
            {/*For Larger Screen*/}
            <motion.svg
              className="md:h-[45rem] xl:h-[40rem]  2xl:h-[40rem]"
              viewBox="0 0 96 902"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M47.4995 0.500192L52.7572 853.25L95.1003 845.507L55.9249 863.345L76.3733 901.222L47.303 869.477L17.5977 900.629L38.8067 863.172L-0.000523802 844.547L42.1776 853.143L47.4995 0.500192Z"
                initial={{ pathLength: 0, fill: "none" }}
                animate={{
                  pathLength: 1,
                  fill: "url(#paint0_linear_639_1599)",
                }}
                transition={{
                  pathLength: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 1, delay: 2 },
                }}
                stroke="url(#paint0_linear_639_1599)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_639_1599"
                  x1="62.5304"
                  y1="-5.51988"
                  x2="52.5505"
                  y2="982.925"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.3" stopColor="#53C888" />
                  <stop offset="1" stopColor="#3A86FF" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>

          {/*For Mobile Screen*/}
          <div className="absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex md:hidden">
            <motion.svg
              className="h-48 w-auto rotate-90"
              viewBox="0 0 96 902"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M47.4995 0.500192L52.7572 853.25L95.1003 845.507L55.9249 863.345L76.3733 901.222L47.303 869.477L17.5977 900.629L38.8067 863.172L-0.000523802 844.547L42.1776 853.143L47.4995 0.500192Z"
                initial={{ pathLength: 0, fill: "none" }}
                animate={{
                  pathLength: 1,
                  fill: "url(#paint0_linear_639_1599)",
                }}
                transition={{
                  pathLength: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 1, delay: 2 },
                }}
                stroke="url(#paint0_linear_639_1599)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_639_1599"
                  x1="62.5304"
                  y1="-5.51988"
                  x2="52.5505"
                  y2="982.925"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.3" stopColor="#53C888" />
                  <stop offset="1" stopColor="#3A86FF" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>

          {/* Right side - Application Summary */}
          <div className="w-full md:w-1/2 py-10 md:p-6 backdrop-blur-[16px] backdrop-saturate-[180%] bg-[rgba(71,71,71,0.38)] rounded-[12px] border border-[rgba(255,255,255,0.125)] mb-6">
            <CareerModal selectedJob={jobDetails.role} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
