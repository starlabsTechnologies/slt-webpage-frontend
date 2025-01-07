import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ExploreCarrers from "./Pages/ExploreCarrers";
import { JobDetailPage } from "./components";
import MeetScheduler from "./Pages/MeetScheduler";
import Career from "./Pages/Career";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfServices from "./Pages/TermsOfServices";
import Assignment from "./Pages/Assignment";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explorecareers",
        element: <ExploreCarrers />,
      },
      {
        path: "/careers",
        element: <Career />,
      },
      {
        path: "/scheduler",
        element: <MeetScheduler />,
      },
      {
        path: "/careers/:jobId",
        element: <JobDetailPage />,
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/termsofservices",
        element: <TermsOfServices />,
      },
      {
        path: "/assignment",
        element: <Assignment />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
