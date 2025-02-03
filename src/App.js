import { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router";
import { Loader } from "./components";
import { ReactLenis } from "lenis/react";

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingProcess = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div>
          <Loader handleLoading={handleLoadingProcess} />
        </div>
      ) : (
        <ReactLenis root options={{ smoothWheel: true, lerp: 0.09 }}>
          <div className="w-full min-h-screen bg-black">
            <Outlet />
          </div>
        </ReactLenis>
      )}
    </>
  );
}
