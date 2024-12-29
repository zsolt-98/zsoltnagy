import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { type Container, type ISourceOptions } from "@tsparticles/engine";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initEngine = async () => {
      await initParticlesEngine(async (engine) => {
        await loadFull(engine);
      });
      setInit(true);
    };
    initEngine();
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles container loaded:", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#58c4dc",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 2, max: 3 },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#e5e7eb", // Light colored links
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: true,
          outModes: {
            default: "bounce",
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="position-absolute w-100"
      />
    );
  }

  return null;
};

export default ParticlesComponent;
