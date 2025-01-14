import Container from "react-bootstrap/Container";
import Navigation from "../Navigation";

export default function Work() {
  return (
    <section className="min-vh-100 position-relative d-flex justify-content-between">
      <div className="work-bg-container position-absolute">
        <div className="work-bg-grain position-absolute" />
      </div>
      <Container></Container>
      <Navigation />
    </section>
  );
}
