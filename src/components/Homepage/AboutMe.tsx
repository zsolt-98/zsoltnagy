import Container from "react-bootstrap/Container";
import { useEffect, useRef, useState } from "react";

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
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollY = useRef(0);
  const aboutMeRef = useRef(null);
  const engineeringRef = useRef(null);
  const designRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const updateState = (key: keyof AboutAnimation) => {
            setAnimationStates((prev) => {
              if (!entry.isIntersecting && isScrollingUp) {
                return { ...prev, [key]: false };
              }
              if (entry.isIntersecting) {
                return { ...prev, [key]: true };
              }
              return prev;
            });
          };
          if (entry.target === aboutMeRef.current) {
            updateState("aboutMe");
          }
          if (entry.target === engineeringRef.current) {
            updateState("engineering");
          }
          if (entry.target === designRef.current) {
            updateState("design");
          }
        });
      },
      { threshold: 0.75 }
    );

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    if (aboutMeRef.current) observer.observe(aboutMeRef.current);
    if (engineeringRef.current) observer.observe(engineeringRef.current);
    if (designRef.current) observer.observe(designRef.current);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollingUp]);

  return (
    <div className="about-wrapper bg-primary overflow-hidden">
      <div className="about-bg-container">
        <div className="about-bg-grain"></div>
      </div>

      <Container className="py-6 px-0 d-flex align-items-center position-relative ">
        <div className="about w-100 d-flex flex-column gap-5 gap-lg-4">
          <div className="about-me d-flex justify-content-center justify-content-lg-start">
            <div className="w-100 w-lg-50 text-center text-lg-start pe-0 pe-lg-5 pe-xl-6">
              <div
                ref={aboutMeRef}
                className={`about-content-wrapper mx-3 p-3 ${
                  animationStates.aboutMe ? "animating" : ""
                }`}
              >
                <h2 className="about-me-header text-info display-4 fw-bold text-capitalize">
                  About me
                </h2>
                <p className="about-me-paragraph text-light">
                  My journey began with maintaining Shopify sites, where I
                  discovered my true passion for web development. This led me to
                  transition into coding. I blend technical expertise with
                  user-focused design principles to craft responsive web
                  applications that prioritize user experience and performance.
                </p>
              </div>
            </div>
          </div>

          <div className="about-engineering d-flex justify-content-center justify-content-lg-end">
            <div className="w-100 w-lg-50 text-center text-lg-start ps-0 ps-lg-5 ps-xl-6 position-relative">
              <div
                ref={engineeringRef}
                className={`about-content-wrapper mx-3 p-3 ${
                  animationStates.engineering ? "animating" : ""
                }`}
              >
                <h2 className="about-engineering-header text-info display-4 fw-bold text-capitalize">
                  Engineering
                </h2>
                <p className="about-engineering-paragraph text-light">
                  I build scalable web applications that meet technical
                  requirements and business needs. My engineering approach
                  creates resilient systems that grow alongside business needs
                  while maintaining optimal performance.
                </p>
              </div>
            </div>
          </div>

          <div className="about-design d-flex justify-content-center justify-content-lg-start">
            <div className="w-100 w-lg-50 text-center text-lg-start pe-0 pe-lg-5 pe-xl-6 position-relative ">
              <div
                ref={designRef}
                className={`about-content-wrapper mx-3 p-3 ${
                  animationStates.design ? "animating" : ""
                }`}
              >
                <div className="">
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
        </div>
      </Container>
    </div>
  );
}
