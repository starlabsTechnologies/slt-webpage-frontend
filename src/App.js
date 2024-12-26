import { useState } from "react";
import { Outlet } from "react-router";
import { Loader } from "./components";

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
        <div className="w-full min-h-screen bg-black">
          <Outlet />
        </div>
      )}
    </>
  );
}
