import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import portfolioImage from "../../assets/zsoltnagy.jpeg";

import IconLinkedin from "../Icons/IconLinkedin";
import IconGithub from "../Icons/IconGithub";
import Navigation from "../Navigation";
import { useMediaQuery } from "react-responsive";

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
  const isXXLargeScreen = useMediaQuery({ minWidth: 1500 });
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="d-flex justify-content-between blur-bg">
        <Container
          fluid="xl"
          className="min-vh-100 px-0 bg-primary d-flex flex-column flex-xxl-row align-items-center justify-content-center gap-5"
        >
          <div
            className={`hero-main ${
              !isXXLargeScreen && isOpen ? "hero-main-exit" : ""
            } blur-bg ${animationStates.container ? "animating" : ""} my-6`}
          >
            <div className="p-3 p-xl-5 mx-xl-0 rounded-5 d-flex flex-column flex-lg-row justify-content-between align-items-center position-relative text-center text-lg-start">
              <div className="d-inline-block">
                <div className="hero-heading-container">
                  <h3
                    className={`text-info hero-heading ${
                      animationStates.hello ? "animating" : ""
                    } fs-4 fw-semibold mb-3`}
                  >
                    Hello! I'm
                  </h3>
                  <div className="h1-cursor-wrapper">
                    <h1
                      className={`hero-heading ${
                        animationStates.name ? "animating" : ""
                      } h1-cursor ${phase} d-inline-block text-light display-1 fw-light mb-3`}
                    >
                      {name}
                    </h1>
                  </div>
                  <h2
                    className={`hero-heading ${
                      animationStates.role ? "animating" : ""
                    } text-info fs-4 fw-semibold mb-3`}
                  >
                    A front-end developer
                    <br />
                    based in Subotica, Serbia.
                  </h2>
                </div>
                <div
                  className={`hero-social-icon-container ${
                    animationStates.social ? "animating" : ""
                  }`}
                >
                  <a href="">
                    <IconLinkedin
                      className="hero-social-icon"
                      size={40}
                      stroke="#e5e7eb"
                    />
                  </a>
                  <a href="">
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
                  animationStates.image ? "animating" : ""
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
            <div className="hero-tech-stack p-5 rounded-5 d-flex flex-column justify-content-start  position-relative">
              <div>
                <h3
                  className={`hero-tech-stack-title ${
                    animationStates.techStack ? "animating" : ""
                  } text-info text-center text-lg-start fs-4 fw-semibold mb-3 text-nowrap`}
                >
                  Tech stack
                </h3>
              </div>
              <div
                className={`hero-tech-stack-icons ${
                  animationStates.techStackIcons ? "animating" : ""
                } d-flex flex-column flex-md-row`}
              >
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                  <div className="d-flex flex-row">
                    <Image
                      className="hero-tech-icon first-icon"
                      src="https://skillicons.dev/icons?i=html"
                    />
                    <Image
                      className="hero-tech-icon"
                      src="https://skillicons.dev/icons?i=css"
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <Image
                      className="hero-tech-icon"
                      src="https://skillicons.dev/icons?i=js"
                    />
                    <Image
                      className="hero-tech-icon"
                      src="https://skillicons.dev/icons?i=ts"
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                  <div className="d-flex flex-row">
                    <Image
                      className="hero-tech-icon"
                      src="https://skillicons.dev/icons?i=react"
                    />
                    <Image
                      className="hero-tech-icon"
                      src="https://skillicons.dev/icons?i=bootstrap"
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <Image
                      className="hero-tech-icon"
                      src="https://skillicons.dev/icons?i=sass"
                    />
                    <Image
                      className="hero-tech-icon"
                      src="https://skillicons.dev/icons?i=git"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}
