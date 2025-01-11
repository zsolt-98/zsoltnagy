import Container from "react-bootstrap/Container";

import PageDivider from "../SVG/PageDivider";

export default function WorkAndCV() {
  return (
    <div className="workcv-wrapper min-vh-100 bg-secondary position-relative d-flex justify-content-center align-items-center">
      <div className="workcv-bg-container position-absolute">
        <div className="workcv-bg-grain position-absolute"></div>
        <PageDivider />
      </div>
      <Container fluid="md">
        <div className="p-3 p-xl-5 d-flex justify-content-evenly bg-primary">
          <div className="">
            <h2 className="text-capitalize text-info display-4 fw-bold">
              My work
            </h2>
            <p className="text-light fs-4">
              A showcase of my latest web projects.
            </p>
          </div>
          <div className="">
            <h2 className="text-capitalize text-info display-4 fw-bold">
              My résumé
            </h2>
            <p className="text-light fs-4">
              See my professional experience and skills.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
