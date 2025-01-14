import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PageDivider from "../SVG/PageDivider";
import IconArrowRight from "../Icons/IconArrowRight";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router";

export default function WorkAndCV() {
  const isLgScreen = useMediaQuery({ minWidth: 992 });
  const navigate = useNavigate();

  interface workAndCVAnimation {
    contentContainer: boolean;
    contentTitle: boolean;
    contentText: boolean;
    contentBtn: boolean;
  }

  const [animationStates, setAnimationStates] = useState<workAndCVAnimation>({
    contentContainer: false,
    contentTitle: false,
    contentText: false,
    contentBtn: false,
  });
  const contentContainerRef = useRef(null);

  useEffect(() => {
    const thresholdValue = isLgScreen ? 0.5 : 0.25;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimationStates((prev) => ({ ...prev, contentContainer: true }));

            setTimeout(() => {
              setAnimationStates((prev) => ({ ...prev, contentTitle: true }));
            }, 300);

            setTimeout(() => {
              setAnimationStates((prev) => ({ ...prev, contentText: true }));
            }, 500);

            setTimeout(() => {
              setAnimationStates((prev) => ({ ...prev, contentBtn: true }));
            }, 700);
          }
        });
      },
      { threshold: thresholdValue }
    );

    if (contentContainerRef.current)
      observer.observe(contentContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isLgScreen]);

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
              <h2
                className={`text-capitalize text-info fw-bold ${
                  animationStates.contentTitle ? "animating" : ""
                }`}
              >
                My work
              </h2>
              <p
                className={`text-light fs-4 ${
                  animationStates.contentText ? "animating" : ""
                }`}
              >
                A showcase of my latest web projects.
              </p>
            </div>
            <Button
              variant="outline-info"
              size="lg"
              className={`workcv-button ${
                animationStates.contentBtn ? "animating" : ""
              } rounded-0 text-uppercase fs-6 border-2 w-100 w-xl-75`}
              onClick={() => {
                navigate("/work");
              }}
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
              <h2
                className={`text-capitalize text-info fw-bold ${
                  animationStates.contentTitle ? "animating" : ""
                }`}
              >
                My résumé
              </h2>
              <p
                className={`text-light fs-4 ${
                  animationStates.contentText ? "animating" : ""
                }`}
              >
                See my professional experience and skills.
              </p>
            </div>
            <Button
              variant="outline-info"
              size="lg"
              className={`workcv-button ${
                animationStates.contentBtn ? "animating" : ""
              } rounded-0 text-uppercase fs-6 border-2 w-100 w-xl-75`}
              onClick={() => {
                navigate("/resume");
              }}
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
