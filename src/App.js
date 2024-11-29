import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import About from "./components/About";
// import Services from "./components/Services";
// import Values from "./components/Values";
// import Contact from "./components/Contact";
// import Careers from "./components/Careers";
// import { ToastContainer } from "react-toastify";
// import Culture from "./components/Culture";
// import Mission from "./components/Mission";
// import History from "./components/History";
// // import Visual from "./components/Visual";
// import JobDetailPage from "./components/JobDetailsPage";
import { Outlet } from "react-router";
import { Loader } from "./components";

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingProcess = () => {
    setLoading(false);
  };

  // const [activeSection, setActiveSection] = useState("home");

  // const scrollTo = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //     setActiveSection(id);
  //   }
  // };

  return (
    <>
      {loading ? (
        <div>
          <Loader handleLoading={handleLoadingProcess} />
        </div>
      ) : (
        <div className="w-full min-h-screen">
          <Outlet />
        </div>
      )}
    </>

    // <Router>
    //   <div className="min-h-screen text-white bg-gradient-to-b from-gray-900 to-gray-800">
    //     <Navbar activeSection={activeSection} scrollTo={scrollTo} />
    //     <main>
    //       <Routes>
    //         {/* Route for the Home Page (which includes multiple sections) */}
    //         <Route
    //           path="/"
    //           element={
    //             <>
    //               <Home />
    //               <About />
    //               <Services />
    //               <Values />
    //               <Mission />
    //               <Culture />
    //               <History />
    //               {/* <Visual /> */}
    //               <Contact />
    //             </>
    //           }
    //         />
    //         {/* Separate Route for the Careers Page */}
    //         <Route path="/careers" element={<Careers />} />
    //         <Route path="/careers" element={<Careers />} />
    //         <Route path="/careers/:jobId" element={<JobDetailPage />} />
    //       </Routes>
    //     </main>
    //     <Footer />
    //     <ToastContainer
    //       position="top-right"
    //       autoClose={5000}
    //       hideProgressBar={false}
    //       newestOnTop={false}
    //       closeOnClick
    //       rtl={false}
    //       pauseOnFocusLoss
    //       draggable
    //       pauseOnHover
    //       theme="dark"
    //     />
    //   </div>
    // </Router>
  );
}
