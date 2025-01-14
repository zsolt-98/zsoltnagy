import Homepage from "./components/Homepage/Homepage";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="work" element={<Work />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
