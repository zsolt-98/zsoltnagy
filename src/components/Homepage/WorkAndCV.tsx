import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PageDivider from "../SVG/PageDivider";
import IconArrowRight from "../Icons/IconArrowRight";
import { useEffect, useRef, useState } from "react";

export default function WorkAndCV() {
  interface workAndCVAnimation {
    contentContainer: boolean;
  }

  const [animationStates, setAnimationStates] = useState<workAndCVAnimation>({
    contentContainer: false,
  });
  const contentContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const updateState = (key: keyof workAndCVAnimation) => {
            setAnimationStates((prev) => {
              if (entry.isIntersecting && !prev[key]) {
                return { ...prev, [key]: true };
              }
              return prev;
            });
          };
          if (entry.target === contentContainerRef.current) {
            updateState("contentContainer");
          }
        });
      },
      { threshold: 0.75 }
    );

    if (contentContainerRef.current)
      observer.observe(contentContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="workcv-wrapper position-relative d-flex justify-content-center align-items-center py-6">
      <div className="workcv-bg-container position-absolute">
        <div className="workcv-bg-grain position-absolute"></div>
        <PageDivider />
      </div>
      <Container className="workcv-content py-6 px-0 text-center text-lg-start">
        <Row
          ref={contentContainerRef}
          className={`workcv-content-container ${
            animationStates.contentContainer ? "animating" : ""
          } d-flex mx-3 justify-content-evenly position-relative`}
        >
          <Col
            xs={12}
            lg={6}
            className="workcv-container-left d-flex flex-column justify-content-between gap-5 gap-lg-6 p-3 p-lg-6 my-6 my-lg-0"
          >
            <div className="">
              <h2 className="text-capitalize text-info fw-bold">My work</h2>
              <p className="text-light fs-4">
                A showcase of my latest web projects.
              </p>
            </div>
            <Button
              variant="outline-info"
              size="lg"
              className="workcv-button rounded-0 text-uppercase fs-6 border-2 w-100 w-xl-75"
            >
              See my work
              <span className="ms-4">
                <IconArrowRight className="workcv-arrow-right" />
              </span>
            </Button>
          </Col>
          <div className="workcv-divider bg-info text-info opacity-100 position-absolute" />
          <Col
            xs={12}
            lg={6}
            className="workcv-container-right d-flex flex-column justify-content-between gap-5 gap-lg-6 p-3 p-lg-6 my-6 my-lg-0"
          >
            <div className="">
              <h2 className="text-capitalize text-info fw-bold">My résumé</h2>
              <p className="text-light fs-4">
                See my professional experience and skills.
              </p>
            </div>
            <Button
              variant="outline-info"
              size="lg"
              className="workcv-button rounded-0 text-uppercase fs-6 border-2 w-100 w-xl-75"
            >
              See my résumé
              <span className="ms-4">
                <IconArrowRight className="workcv-arrow-right" />
              </span>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
