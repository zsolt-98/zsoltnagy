import Hero from "./Hero";
import AboutMe from "./AboutMe";
import ParticlesComponent from "./Particles";
import WorkAndCV from "./WorkAndCV";
import FooterHomepage from "./FooterHomepage";
import bgNetwork from "../../assets/bg-network.png";
import { useMediaQuery } from "react-responsive";

export default function Homepage() {
  const isLgScreen = useMediaQuery({ minWidth: 992 });

  return (
    <>
      <main className="hero-container bg-primary position-relative">
        <div className="hero-bg-grain position-absolute top-0 start-0 w-100 h-100"></div>
        <ParticlesComponent />
        <Hero />
      </main>
      <div className="position-relative ">
        <img
          src={bgNetwork}
          className={`position-absolute opacity-25 h-100 ${
            isLgScreen
              ? "w-75  py-6 start-50 translate-middle-x"
              : "w-100 object-fit-cover"
          } `}
          style={{ zIndex: 3 }}
        />
        <section>
          <AboutMe />
        </section>
        <section>
          <WorkAndCV />
        </section>
      </div>
      <FooterHomepage />
    </>
  );
}
