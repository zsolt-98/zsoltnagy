import Container from "react-bootstrap/Container";
import Navigation from "../Navigation";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useMediaQuery } from "react-responsive";
import useZustandStore from "../../store/useZustandStore";

import bgWork from "../../assets/bg-work.png";
import yourneyLogo from "../../assets/yourney-logo.png";
import yourneyHero from "../../assets/yourney-linkedin.png";
import portfolioLogo from "../../assets/zsn-logo-270x63.png";
import portfoliHero from "../../assets/portfolio-hero.png";

export default function Work() {
  const isXXLargeScreen = useMediaQuery({ minWidth: 1500 });
  const { isOpen } = useZustandStore();

  return (
    <section className="min-vh-100 position-relative d-flex justify-content-between">
      <Image
        className="position-absolute w-100 h-100 z-1 opacity-25 py-5"
        src={bgWork}
      />
      <div className="work-bg-container position-absolute">
        <div className="work-bg-grain position-absolute" />
      </div>
      <Container
        className={`work-project-container d-flex
         justify-content-center align-items-center z-2`}
      >
        <div
          className={`work-project-main ${
            !isXXLargeScreen && isOpen ? "d-none" : "d-flex"
          } flex-column px-3 py-6 p-xl-5 gap-6 my-7`}
        >
          <div className="text-center">
            <h2 className="text-light display-4">
              <span className="text-info">/</span>work
              <span className="text-info ms-1">.</span>
            </h2>
            <p className="text-info fs-5">
              A collection of the projects that I have worked on.
            </p>
          </div>
          <Row className="gap-5 gap-xl-3 justify-content-center">
            <Col xs="auto" as="button" className="border-0 bg-transparent p-0">
              <figure className="work-project-figure m-0">
                <div className="work-project-img position-relative bg-light p-6">
                  <div className="default-state d-flex justify-content-center align-items-center w-100 h-100">
                    <Image src={yourneyLogo} className="img-fluid" />
                  </div>
                  <div className="hover-state position-absolute top-0 start-0 w-100 h-100">
                    <Image
                      src={yourneyHero}
                      className="w-100 h-100 object-fit-cover"
                      style={{
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                      }}
                    />
                  </div>
                </div>
                <figcaption className="work-project-text text-start p-4">
                  <h3 className="text-info">Yourney</h3>
                  <p className="mb-0 text-light">your-ney.netlify.app</p>
                </figcaption>
              </figure>
            </Col>
            <Col xs="auto" as="button" className="border-0 bg-transparent p-0">
              <figure className="work-project-figure m-0">
                <div className="work-project-img position-relative bg-light p-6">
                  <div className="default-state d-flex justify-content-center align-items-center w-100 h-100">
                    <Image src={portfolioLogo} className="img-fluid" />
                  </div>
                  <div className="hover-state position-absolute top-0 start-0 w-100 h-100">
                    <Image
                      src={portfoliHero}
                      className="w-100 h-100 object-fit-cover"
                      style={{
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                      }}
                    />
                  </div>
                </div>
                <figcaption className="work-project-text text-start p-4">
                  <h3 className="text-info">Personal Website</h3>
                  <p className="mb-0 text-light">zsn.guru</p>
                </figcaption>
              </figure>
            </Col>
          </Row>
        </div>
      </Container>
      <Navigation />
    </section>
  );
}
