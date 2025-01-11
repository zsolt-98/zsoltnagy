import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import PageDivider from "../SVG/PageDivider";
import IconArrowRight from "../Icons/IconArrowRight";

export default function WorkAndCV() {
  return (
    <div className="workcv-wrapper min-vh-100 bg-secondary position-relative d-flex justify-content-center align-items-center">
      <div className="workcv-bg-container position-absolute">
        <div className="workcv-bg-grain position-absolute"></div>
        <PageDivider />
      </div>
      <Container fluid="md" className="workcv-content">
        <div className="workcv-content-container d-flex justify-content-evenly position-relative gap-6">
          <div className="d-flex flex-column gap-6 p-3 p-xl-5 w-50">
            <div className="">
              <h2 className="text-capitalize text-info display-4 fw-bold">
                My work
              </h2>
              <p className="text-light fs-4">
                A showcase of my latest web projects.
              </p>
            </div>
            <Button
              variant="outline-info"
              size="lg"
              className="workcv-button rounded-0 text-uppercase fs-6 border-2 w-75"
            >
              See my work
              <span className="ms-4">
                <IconArrowRight className="workcv-arrow-right" />
              </span>
            </Button>
          </div>
          <div className="workcv-divider bg-info text-info opacity-100 position-absolute top-50 start-50 translate-middle" />
          <div className="d-flex flex-column gap-6 p-3 p-xl-5 w-50">
            <div className="">
              <h2 className="text-capitalize text-info display-4 fw-bold">
                My résumé
              </h2>
              <p className="text-light fs-4">
                See my professional experience and skills.
              </p>
            </div>
            <Button
              variant="outline-info"
              size="lg"
              className="workcv-button rounded-0 text-uppercase fs-6 border-2 w-75"
            >
              See my résumé
              <span className="ms-4">
                <IconArrowRight className="workcv-arrow-right" />
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
