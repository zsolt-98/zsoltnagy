import Homepage from "./components/Homepage/Homepage";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router";
import Work from "./components/Work/Work";
import Yourney from "./components/Work/Yourney";
import Resume from "./components/Resume/Resume";
import ScrollReset from "./components/shared/Layout/ScrollReset";
import Footer from "./components/Homepage/Footer";
import Pomegrenade from "./components/Work/Pomegrenade";

function App() {
  return (
    <>
      <Router>
        <ScrollReset />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="work" element={<Work />}>
            <Route path="yourney" element={<Yourney />} />
            <Route path="pomegrenade" element={<Pomegrenade />} />
          </Route>
          <Route path="resume" element={<Resume />}></Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
