import Homepage from "./components/Homepage/Homepage";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router";
import Work from "./components/Work/Work";
import Yourney from "./components/Work/Yourney";
import Resume from "./components/Resume/Resume";
import ScrollReset from "./components/shared/Layout/ScrollReset";
import { useEffect, useState } from "react";

function LoadingSpinner() {
  return (
    <div className="loading-overlay d-flex justify-content-center align-items-center w-100 vh-100 bg-primary position-fixed top-0 start-0 z-3">
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide spinner after initial page load
    const handleLoad = () => setIsLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <Router>
        <ScrollReset />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="work" element={<Work />}>
            <Route path="yourney" element={<Yourney />} />
          </Route>
          <Route path="resume" element={<Resume />}></Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
