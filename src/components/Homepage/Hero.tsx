import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import portfolioImage from "../../assets/zsoltnagy.jpeg";

import IconLinkedin from "../Icons/IconLinkedin";
import IconGithub from "../Icons/IconGithub";
import Navigation from "../Navigation";
import { useMediaQuery } from "react-responsive";
import useZustandStore from "../../store/useZustandStore.js";

type Phase = "typing" | "waiting" | "deleting";

interface AnimationStates {
  container: boolean;
  hello: boolean;
  name: boolean;
  image: boolean;
  role: boolean;
  social: boolean;
  techStack: boolean;
  techStackIcons: boolean;
}

export default function Hero() {
  const fullName: string = "Zsolt Nagy";
  const [name, setName] = useState<string>(fullName);
  const [currentIndex, setCurrentIndex] = useState<number>(fullName.length);
  const [phase, setPhase] = useState<Phase>("waiting");
  const isUnderLgScreen = useMediaQuery({ maxWidth: 991 });
  const isXXLargeScreen = useMediaQuery({ minWidth: 1500 });
  const { isOpen } = useZustandStore();
  const [animationStates, setAnimationStates] = useState<AnimationStates>({
    container: false,
    hello: false,
    name: false,
    image: false,
    role: false,
    social: false,
    techStack: false,
    techStackIcons: false,
  });

  useEffect(() => {
    if (phase === "waiting") {
      setTimeout(() => setPhase("deleting"), 3000);
    }
  }, [phase]);

  useEffect(() => {
    const handleTyping = (): void => {
      if (phase === "typing") {
        if (currentIndex < fullName.length) {
          setName(fullName.slice(0, currentIndex + 1));
          setCurrentIndex((prev) => prev + 1);
        } else {
          setPhase("waiting");
          setTimeout(() => setPhase("deleting"), 3000);
        }
      } else if (phase === "deleting") {
        if (currentIndex > 1) {
          setName(fullName.slice(0, currentIndex - 1));
          setCurrentIndex((prev) => prev - 1);
        } else {
          setName("\u00A0");
          setCurrentIndex(0);
          setPhase("typing");
        }
      }
    };

    const intervalId = setInterval(
      handleTyping,
      phase === "deleting" ? 40 : 120
    );
    return () => clearInterval(intervalId);
  }, [currentIndex, fullName, phase]);

  useEffect(() => {
    const animations = [
      { key: "container", delay: 100 },
      { key: "hello", delay: 400 },
      { key: "name", delay: 500 },
      { key: "image", delay: 500 },
      { key: "role", delay: 600 },
      { key: "social", delay: 700 },
      { key: "techStack", delay: 800 },
      { key: "techStackIcons", delay: 900 },
    ] as const;

    const timeouts = animations.map(({ key, delay }) =>
      setTimeout(
        () => setAnimationStates((prev) => ({ ...prev, [key]: true })),
        delay
      )
    );
    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between">
        <Container className="hero-main-container min-vh-100 px-0 d-flex flex-column flex-xxl-row align-items-center justify-content-center gap-5">
          <div
            className={`hero-main ${
              !isXXLargeScreen && isOpen ? "hero-main-exit" : ""
            } blur-bg ${animationStates.container ? "visible" : ""} my-6`}
          >
            <div className="p-3 pb-0 p-xl-5 mx-xl-0 rounded-5 d-flex flex-column flex-lg-row justify-content-between align-items-center position-relative text-center text-lg-start">
              <div className="d-inline-block">
                <div className="hero-heading-container">
                  <h3
                    className={`text-info hero-heading ${
                      animationStates.hello ? "visible" : ""
                    } fs-4 fw-semibold mb-3`}
                  >
                    Hello! I'm
                  </h3>
                  <div className="h1-cursor-wrapper">
                    <h1
                      className={`hero-heading ${
                        animationStates.name ? "visible" : ""
                      } h1-cursor ${phase} d-inline-block text-light display-1 fw-light mb-3`}
                    >
                      {name}
                    </h1>
                  </div>
                  <h2
                    className={`hero-heading ${
                      animationStates.role ? "visible" : ""
                    } text-info fs-4 fw-semibold mb-3`}
                  >
                    A web developer
                    <br />
                    based in Subotica, Serbia.
                  </h2>
                </div>
                <div
                  className={`hero-social-icon-container ${
                    animationStates.social ? "visible" : ""
                  }`}
                >
                  <a
                    href="https://linkedin.com/in/zsolt98"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconLinkedin
                      className="hero-social-icon"
                      size={40}
                      stroke="#e5e7eb"
                    />
                  </a>
                  <a
                    href="https://github.com/zsolt-98"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconGithub
                      className="hero-social-icon"
                      size={40}
                      stroke="#e5e7eb"
                    />
                  </a>
                </div>
              </div>
              <div
                className={`hero-img-container ${
                  animationStates.image ? "visible" : ""
                } position-relative mt-5 mt-lg-0`}
              >
                <div className="hero-glowing-border rounded-5 border-info position-relative overflow-hidden">
                  <Image
                    src={portfolioImage}
                    className="img-fluid w-100 h-100 object-fit-cover"
                  ></Image>
                </div>
              </div>
            </div>
            <div className="hero-tech-stack px-3 py-0 p-xl-5 pt-xl-0 rounded-5 d-flex flex-column justify-content-start  position-relative">
              <div>
                <h3
                  className={`hero-tech-stack-title ${
                    animationStates.techStack ? "visible" : ""
                  } text-info text-center text-lg-start fs-4 mt-5 mt-lg-0  fw-semibold mb-5 mb-lg-3  text-nowrap`}
                >
                  Tech stack
                </h3>
              </div>

              <div
                className={`hero-tech-stack-icons ${
                  animationStates.techStackIcons ? "visible" : ""
                } d-flex flex-column gap-3 `}
              >
                <div className="d-flex flex-column gap-5 gap-lg-3">
                  <div className="d-flex  align-items-start align-items-lg-center justify-content-center justify-content-lg-start">
                    <h4 className="hero-tech-icon-heading text-info mb-0 fw-semibold fs-6">
                      Frontend:
                    </h4>
                    {!isUnderLgScreen ? (
                      <Image
                        className="hero-tech-icon ms-3 img-fluid me-0"
                        src="https://skillicons.dev/icons?i=html,css,js,ts,react,tailwind,bootstrap,sass"
                      />
                    ) : (
                      <Image
                        className="hero-tech-icon-stack ms-3 img-fluid me-0"
                        src="https://skillicons.dev/icons?i=html,css,js,ts,react,tailwind,bootstrap,sass&perline=4"
                      />
                    )}
                  </div>
                  <div className="d-flex  align-items-start align-items-lg-center justify-content-center justify-content-lg-start">
                    <h4 className="hero-tech-icon-heading text-info mb-0 fw-semibold fs-6">
                      Backend:
                    </h4>
                    <Image
                      className="hero-tech-icon ms-3 img-fluid me-0"
                      src="https://skillicons.dev/icons?i=nodejs,express,mongodb,postgresql"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Navigation />
      </div>
    </>
  );
}
