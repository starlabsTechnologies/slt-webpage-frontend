import * as React from "react";
import Calendar from "react-calendar"; // Import react-calendar
import "react-calendar/dist/Calendar.css"; // Import calendar styles
import "./Scheduler.css";
import { toast, ToastContainer } from "react-toastify";

export default function Scheduler() {
  const [date, setDate] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [roles, setRoles] = React.useState([]);
  const [timeSlots, setTimeSlots] = React.useState([]);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    applyingFor: "",
  });
  const [submitted, setSubmitted] = React.useState(false); // State to track submission

  // Fetch roles from the API
  React.useEffect(() => {
    fetch("https://website-backend.starlabs.co.in/api/jobs/roles")
      .then((response) => response.json())
      .then((data) => setRoles(data))
      .catch((error) => console.error("Error fetching roles:", error));
  }, []);

  // Fetch time slots from the API
  React.useEffect(() => {
    fetch("https://website-backend.starlabs.co.in/api/slots")
      .then((response) => response.json())
      .then((data) => setTimeSlots(data))
      .catch((error) => console.error("Error fetching time slots:", error));
  }, []);

  // Get available time slots for the selected date
  const getAvailableSlots = () => {
    if (!date) return [];
    const formattedDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];
    return timeSlots.filter((slot) => slot.date.startsWith(formattedDate));
  };

  // Filter dates to show only weekdays and Saturdays within the next 7 days
  const getValidDates = () => {
    const today = new Date();
    const dates = [];
    for (let i = 1; dates.length < 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const day = nextDate.getDay();
      if (day !== 0) {
        // Only exclude Sundays
        dates.push(nextDate);
      }
    }
    return dates.map((date) => date.toDateString());
  };

  const validDates = getValidDates();

  const tileDisabled = ({ date }) => !validDates.includes(date.toDateString());

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format the date to ISO string (YYYY-MM-DD)
    const formattedDate = date
      ? new Date(date.getTime() - date.getTimezoneOffset() * 60000)
          .toISOString()
          .split("T")[0]
      : "";

    const interviewDetails = {
      name: formData.name,
      email: formData.email,
      role: formData.applyingFor,
      date: formattedDate,
      time: selectedTime,
    };

    try {
      const response = await fetch(
        "https://website-backend.starlabs.co.in/api/meetings",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(interviewDetails),
        }
      );
      const data = await response.json(); // Parse the response body
      if (response.ok) {
        toast.success(data.message);
        setSubmitted(true); // Set submitted to true to show thank you message
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error(error.message);
      console.error("Error posting interview details:", error);
    }
  };

  // The Thank You Message
  const thankYouMessage = (
    <div className="flex items-center justify-center h-screen">
      <div className="p-1 rounded">
        <div className="flex flex-col items-center p-4 space-y-2 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-4xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Thank You!
          </h1>
          <p>Thank you for selecting a slot! We'll get back to you soon!</p>
        </div>
      </div>
    </div>
  );

  if (submitted) {
    return thankYouMessage; // Show the thank you message after submission
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="pt-20 mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        {/* Left Panel */}
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">
            Schedule an interview with us!
          </h2>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border rounded"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Select the role you've applied for
              </label>
              <select
                className="w-full mt-1 p-2 border rounded"
                value={formData.applyingFor}
                onChange={(e) =>
                  setFormData({ ...formData, applyingFor: e.target.value })
                }
                required
              >
                <option value="" disabled>
                  Select a role
                </option>
                {roles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              disabled={!date || !selectedTime}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
          {/* Calendar Card */}
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">Select a Date</h2>
            <Calendar
              onChange={setDate}
              value={date}
              tileDisabled={tileDisabled}
              className="mt-4 custom-calendar"
            />
          </div>

          {/* Time Slots Card */}
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">Available Time Slots</h2>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {getAvailableSlots().length ? (
                getAvailableSlots().map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTime(slot.time)}
                    className={`w-full p-2 rounded border ${
                      selectedTime === slot.time
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {slot.time}
                  </button>
                ))
              ) : (
                <p className="col-span-3 text-gray-500">
                  No available slots for the selected date.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
