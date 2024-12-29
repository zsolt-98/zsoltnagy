import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

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
      className="vh-100 bg-primary d-flex align-items-center"
    >
      <div
        className="hero-main p-6 rounded-5 w-100 d-flex justify-content-between align-items-center position-relative"
        style={{
          zIndex: 2,
          backgroundColor: "rgba(9, 10, 12, 0.75)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
        }}
      >
        <div className="d-inline-block">
          <div className="hero-heading-container">
            <h3 className="text-light fs-4 fw-semibold mb-3">Hello! I'm</h3>
            <h1
              className={`h1-cursor ${phase} d-inline-block text-white display-1 fw-light mb-3`}
            >
              {name}
            </h1>
            <h2 className="text-light fs-4 fw-semibold mb-3">
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
        <div
          className="img-container position-relative"
          style={{ margin: "0 2rem 2rem 0" }}
        >
          <div
            className="rounded-5 bg-light position-relative overflow-hidden"
            style={{
              height: "400px",
              width: "400px",
              zIndex: "2",
              // transform: "rotate(10deg)",
            }}
          >
            <Image src={portfolioImage}></Image>
          </div>
          <div
            className="glowing-border rounded-5 border border-2 border-info position-absolute"
            style={{
              height: "400px",
              width: "400px",
              top: "2rem",
              left: "2rem",
              zIndex: "1",
              background: "none",
            }}
          ></div>
        </div>
      </div>
    </Container>
  );
}
