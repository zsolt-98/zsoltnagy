import Homepage from "./components/Homepage/Homepage";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Work from "./components/Work/Work";
import Yourney from "./components/Work/Yourney";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="work" element={<Work />}>
            <Route path="yourney" element={<Yourney />} />
          </Route>
          <Route path="resume" element={<Resume />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
