import Container from "react-bootstrap/Container";

export default function Hero() {
  return (
    <Container
      fluid="xl"
      className="vh-100 bg-primary d-flex align-items-center"
    >
      <div className="mx-5">
        <h3 className="text-light fs-4 fw-semibold">Hello! I'm</h3>
        <h1 className="h1-cursor text-white display-1 fw-light">Zsolt Nagy</h1>
        <h2 className="text-light fs-4 fw-semibold">
          A front-end developer
          <br />
          based in Subotica, Serbia.
        </h2>
      </div>
    </Container>
  );
}
