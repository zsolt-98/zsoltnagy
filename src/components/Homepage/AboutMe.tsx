import Container from "react-bootstrap/Container";
import { useEffect, useRef, useState } from "react";

interface AboutAnimation {
  aboutMe: boolean;
  aboutMeTitle: boolean;
  aboutMeText: boolean;
  engineering: boolean;
  engineeringTitle: boolean;
  engineeringText: boolean;
  design: boolean;
  designTitle: boolean;
  designText: boolean;
}

export default function AboutMe() {
  const [animationStates, setAnimationStates] = useState<AboutAnimation>({
    aboutMe: false,
    aboutMeTitle: false,
    aboutMeText: false,
    engineering: false,
    engineeringTitle: false,
    engineeringText: false,
    design: false,
    designTitle: false,
    designText: false,
  });

  const aboutMeRef = useRef(null);
  const engineeringRef = useRef(null);
  const designRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section =
              entry.target === aboutMeRef.current
                ? "aboutMe"
                : entry.target === engineeringRef.current
                ? "engineering"
                : entry.target === designRef.current
                ? "design"
                : null;

            if (section) {
              setAnimationStates((prev) => ({ ...prev, [section]: true }));

              setTimeout(() => {
                setAnimationStates((prev) => ({
                  ...prev,
                  [`${section}Title`]: true,
                }));
              }, 300);

              setTimeout(() => {
                setAnimationStates((prev) => ({
                  ...prev,
                  [`${section}Text`]: true,
                }));
              }, 500);
            }
          }
        });
      },
      { threshold: 0.75 }
    );

    if (aboutMeRef.current) observer.observe(aboutMeRef.current);
    if (engineeringRef.current) observer.observe(engineeringRef.current);
    if (designRef.current) observer.observe(designRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

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
                <h2
                  className={`about-me-header text-info display-4 fw-bold text-capitalize ${
                    animationStates.aboutMeTitle ? "animating" : ""
                  }`}
                >
                  About me
                </h2>
                <p
                  className={`about-me-paragraph text-light ${
                    animationStates.aboutMeText ? "animating" : ""
                  }`}
                >
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
                <h2
                  className={`about-engineering-header text-info display-4 fw-bold text-capitalize ${
                    animationStates.engineeringTitle ? "animating" : ""
                  }`}
                >
                  Engineering
                </h2>
                <p
                  className={`about-engineering text-light ${
                    animationStates.engineeringText ? "animating" : ""
                  }`}
                >
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
                  <h2
                    className={`about-design-header text-info display-4 fw-bold text-capitalize ${
                      animationStates.designTitle ? "animating" : ""
                    }`}
                  >
                    Design
                  </h2>
                  <p
                    className={`about-design text-light ${
                      animationStates.designText ? "animating" : ""
                    }`}
                  >
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
