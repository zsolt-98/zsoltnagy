import Container from "react-bootstrap/Container";
import Navigation from "../Navigation";
import Image from "react-bootstrap/Image";

import bgWork from "../../assets/bg-work.png";
import test from "../../assets/yourney-linkedin.jpg";

export default function Work() {
  return (
    <section className="min-vh-100 position-relative d-flex justify-content-between">
      <Image
        className="position-absolute w-100 h-100 z-1 opacity-25 py-6"
        src={bgWork}
      />
      <div className="work-bg-container position-absolute">
        <div className="work-bg-grain position-absolute" />
      </div>
      <Container className="d-flex justify-content-center align-items-center z-2">
        <div className="work-carousel-container w-100 position-relative px-5 py-4">
          <Image src={test} className="w-100 h-100" />
        </div>
      </Container>
      <Navigation />
    </section>
  );
}
