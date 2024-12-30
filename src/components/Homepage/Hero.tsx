import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import portfolioImage from "../../assets/Dutch-Van-Der-Linde-Red-Dead-Redemption-2.jpg";

import IconLinkedin from "../Icons/IconLinkedin";
import IconGithub from "../Icons/IconGithub";

type Phase = "typing" | "waiting" | "deleting";

export default function Hero() {
  const [name, setName] = useState<string>("\u00A0");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const fullName: string = "Zsolt Nagy";

  useEffect(() => {
    const handleTyping = (): void => {
      if (phase === "typing") {
        if (currentIndex < fullName.length) {
          setName(fullName.slice(0, currentIndex + 1));
          setCurrentIndex((prev) => prev + 1);
        } else {
          setPhase("waiting");
          setTimeout(() => setPhase("deleting"), 4000);
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

  return (
    <Container
      fluid="xl"
      className="min-vh-100 px-0 bg-primary d-flex flex-column flex-xxl-row align-items-center justify-content-center gap-5"
    >
      <div className="hero-main p-3 p-xl-5 mx-xl-0 rounded-5 d-flex flex-column flex-lg-row justify-content-between align-items-center position-relative text-center text-lg-start">
        <div className="d-inline-block">
          <div className="hero-heading-container">
            <h3 className="text-info fs-4 fw-semibold mb-3">Hello! I'm</h3>
            <div className="h1-cursor-wrapper">
              <h1
                className={`h1-cursor ${phase} d-inline-block text-white display-1 fw-light mb-3`}
              >
                {name}
              </h1>
            </div>
            <h2 className="text-info fs-4 fw-semibold mb-3">
              A front-end developer
              <br />
              based in Subotica, Serbia.
            </h2>
          </div>
          <div className="hero-social-icon-container">
            <a href="">
              <IconLinkedin size={40} stroke="var(--bs-light)" />
            </a>
            <a href="">
              <IconGithub size={40} stroke="var(--bs-light)" />
            </a>
          </div>
        </div>
        <div className="img-container position-relative mt-5 mt-lg-0">
          <div className="hero-glowing-border rounded-5 border-info position-relative overflow-hidden">
            <Image src={portfolioImage}></Image>
          </div>
        </div>
      </div>
      <div className="hero-tech-stack p-5 rounded-5 d-flex flex-column justify-content-center align-items-center position-relative">
        <div className="">
          <h3 className="text-info fs-4 fw-semibold mb-3 text-nowrap">
            Tech stack
          </h3>
        </div>
        <div className="hero-tech-stack-icons d-flex flex-column flex-md-row flex-xxl-column align-items-center">
          <div className="d-flex flex-row flex-xxl-column">
            <div className="d-flex">
              <Image
                className="hero-tech-icon"
                src="https://skillicons.dev/icons?i=html"
              />
              <Image
                className="hero-tech-icon"
                src="https://skillicons.dev/icons?i=css"
              />
            </div>
            <div className="d-flex">
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
          <div className="d-flex flex-row flex-xxl-column">
            <div className="d-flex">
              <Image
                className="hero-tech-icon"
                src="https://skillicons.dev/icons?i=react"
              />
              <Image
                className="hero-tech-icon"
                src="https://skillicons.dev/icons?i=bootstrap"
              />
            </div>
            <div className="d-flex">
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
    </Container>
  );
}
