import Container from "react-bootstrap/Container";
import AboutBG from "../SVG/AboutBG";
import Line from "../SVG/Line";

export default function AboutMe() {
  return (
    <div className="about-wrapper bg-secondary overflow-hidden">
      <Container
        fluid="md"
        className="vh-100 py-6 px-0 d-flex align-items-center position-relative"
      >
        <div className="about px-4 w-100 d-flex flex-column gap-5 gap-lg-4">
          <div className="about-me d-flex justify-content-center justify-content-lg-start">
            <div className="w-100 w-lg-50 text-center text-lg-start pe-0 pe-lg-5 pe-xl-6">
              <div className="about-content-wrapper">
                <h2 className="about-me-header text-info display-4 fw-bold text-capitalize">
                  About me
                </h2>
                <p className="about-me-paragraph text-light">
                  As a web developer, I blend technical expertise with
                  user-focused design principles. My journey began with
                  maintaining Shopify sites, where I discovered my true passion
                  for web development. This led me to transition into coding. I
                  craft responsive web applications that prioritize user
                  experience and performance.
                </p>
              </div>
            </div>
          </div>

          <div className="about-engineering d-flex justify-content-center justify-content-lg-end">
            <div className="w-100 w-lg-50 text-center text-lg-start ps-0 ps-lg-5 ps-xl-6">
              <div className="about-content-wrapper">
                <h2 className="about-engineering-header text-info display-4 fw-bold text-capitalize">
                  Engineering
                </h2>
                <p className="about-engineering-paragraph text-light">
                  I build scalable web applications optimized for performance
                  that meet technical requirements and business needs. My
                  engineering approach creates resilient systems that grow
                  alongside business needs while maintaining optimal
                  performance.
                </p>
              </div>
            </div>
          </div>

          <div className="about-design d-flex justify-content-center justify-content-lg-start">
            <div className="w-100 w-lg-50 text-center text-lg-start pe-0 pe-lg-5 pe-xl-6">
              <div className="about-content-wrapper">
                <h2 className="about-design-header text-info display-4 fw-bold text-capitalize">
                  Design
                </h2>
                <p className="about-design-paragraph text-light">
                  While my foundation is in development, I have a keen eye for
                  design. Using tools like Figma and Canva, I create intuitive
                  interfaces that enhance user engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <AboutBG className="about-bg d-none d-xl-block position-absolute" />
        <Line className="about-bg-line position-absolute" />
      </Container>
    </div>
  );
}
