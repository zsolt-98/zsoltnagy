import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

type Phase = "typing" | "waiting" | "deleting";

export default function Hero() {
  const [name, setName] = useState("\u00A0");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const fullName = "Zsolt Nagy";

  useEffect(() => {
    const handleTyping = () => {
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
      <div className="mx-5">
        <h3 className="text-light fs-4 fw-semibold">Hello! I'm</h3>
        <h1 className="d-inline-block h1-cursor text-white display-1 fw-light">
          {name}
        </h1>
        <h2 className="text-light fs-4 fw-semibold">
          A front-end developer
          <br />
          based in Subotica, Serbia.
        </h2>
      </div>
    </Container>
  );
}
