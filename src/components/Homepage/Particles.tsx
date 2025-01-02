import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { type Container, type ISourceOptions } from "@tsparticles/engine";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    if (!container) return;

    const blurBG = document.querySelector(".blur-bg");

    if (blurBG) {
      blurBG.addEventListener("mouseenter", () => {
        container.actualOptions.interactivity.events.onHover.enable = false;
      });

      blurBG.addEventListener("mouseleave", () => {
        container.actualOptions.interactivity.events.onHover.enable = true;
      });
      // });
    }
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fullScreen: { enable: false },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: false },
          onHover: { enable: true, mode: "repulse" },
          resize: {
            enable: true,
            delay: 0,
            factor: 1,
          },
        },
        modes: {
          repulse: { distance: 75, duration: 0.1 },
        },
      },
      particles: {
        number: {
          value: 200,
          density: { enable: true, area: 800 },
        },
        color: { value: "#58c4dc" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: { min: 2, max: 3 } },
        links: {
          enable: true,
          distance: 150,
          color: "#e5e7eb",
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "bounce" },
        },
      },
      retina_detect: true,
      smooth: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="position-fixed w-100 vh-100 overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticlesComponent;
