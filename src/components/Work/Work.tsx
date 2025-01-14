import Container from "react-bootstrap/Container";
import Navigation from "../Navigation";

import bgWork from "../../assets/bg-work.png";

export default function Work() {
  return (
    <section className="min-vh-100 position-relative d-flex justify-content-between">
      <img
        className="position-absolute w-100 h-100 z-1 opacity-25 py-6"
        src={bgWork}
      />
      <div className="work-bg-container position-absolute">
        <div className="work-bg-grain position-absolute" />
      </div>
      <Container></Container>
      <Navigation />
    </section>
  );
}
