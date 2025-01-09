import Container from "react-bootstrap/Container";
import AboutBG from "../SVG/AboutBG";
import Line from "../SVG/Line";
import { useEffect, useRef, useState } from "react";
// import { motion, useScroll } from "motion/react";

interface AboutAnimation {
  aboutMe: boolean;
  engineering: boolean;
  design: boolean;
}

export default function AboutMe() {
  const [animationStates, setAnimationStates] = useState<AboutAnimation>({
    aboutMe: false,
    engineering: false,
    design: false,
  });
  const aboutMeRef = useRef(null);
  const engineeringRef = useRef(null);
  const designRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutMeRef.current) {
            setAnimationStates((prev) => ({
              ...prev,
              aboutMe: entry.isIntersecting,
            }));
          }
          if (entry.target === engineeringRef.current) {
            setAnimationStates((prev) => ({
              ...prev,
              engineering: entry.isIntersecting,
            }));
          }
          if (entry.target === designRef.current) {
            setAnimationStates((prev) => ({
              ...prev,
              design: entry.isIntersecting,
            }));
          }
        });
      },
      { threshold: 0.75 }
    );
    if (aboutMeRef.current) observer.observe(aboutMeRef.current);
    if (engineeringRef.current) observer.observe(engineeringRef.current);
    if (designRef.current) observer.observe(designRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-wrapper bg-secondary overflow-hidden">
      <div className="bg-line-container d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
        <Line className="about-bg-line w-100" />
      </div>
      <Container
        fluid="md"
        className="min-vh-100 py-6 px-0 d-flex align-items-center position-relative "
      >
        <div className="about px-4 w-100 d-flex flex-column gap-5 gap-lg-4">
          <div className="about-me d-flex justify-content-center justify-content-lg-start">
            <div className="w-100 w-lg-50 text-center text-lg-start pe-0 pe-lg-5 pe-xl-6">
              <div
                ref={aboutMeRef}
                className={`about-content-wrapper ${
                  animationStates.aboutMe ? "animating" : ""
                }`}
              >
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
              <div
                ref={engineeringRef}
                className={`about-content-wrapper ${
                  animationStates.engineering ? "animating" : ""
                }`}
              >
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
              <div
                ref={designRef}
                className={`about-content-wrapper ${
                  animationStates.design ? "animating" : ""
                }`}
              >
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
      </Container>
    </div>
  );
}
