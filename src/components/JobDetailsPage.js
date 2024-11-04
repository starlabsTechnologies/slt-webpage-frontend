import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CareerModal from "./CareerModal";

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
      <div className="flex justify-center items-center h-screen">
        Loading job details...
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-200 text-gray-900 pt-20 px-4 md:px-10 lg:px-20 gap-6">
      {/* Left side - Job Details */}
      <div className="w-full md:w-1/2 p-4 md:p-6 bg-white shadow-lg rounded-lg mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
          {jobDetails.role}
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-4">
          {jobDetails.description}
        </p>

        <div className="text-gray-600">
          <h2 className="font-semibold text-lg md:text-xl mb-2">Experience</h2>
          <p>{jobDetails.experience}</p>

          <h2 className="font-semibold text-lg md:text-xl mt-6 mb-2">
            Location
          </h2>
          <p>
            {jobDetails.location} - {jobDetails.country}
          </p>

          <h2 className="font-semibold text-lg md:text-xl mt-6 mb-2">
            Qualifications
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            {jobDetails.qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right side - Application Summary */}
      <div className="w-full md:w-1/2 p-4 md:p-6 bg-white shadow-lg rounded-lg flex flex-col justify-center mb-6">
        <CareerModal selectedJob={jobDetails.role} />
      </div>
    </div>
  );
}
