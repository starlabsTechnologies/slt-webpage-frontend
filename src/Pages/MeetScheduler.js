import React from "react";
import { Footer, Navbar } from "../components";
import Scheduler from "../components/Scheduler";

const MeetScheduler = () => {
  return (
    <>
      <Navbar />
      <Scheduler />
      <Footer />
    </>
  );
};

export default MeetScheduler;
