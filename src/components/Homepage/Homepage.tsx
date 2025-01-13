import Hero from "./Hero";
import AboutMe from "./AboutMe";
import ParticlesComponent from "./Particles";
import WorkAndCV from "./WorkAndCV";
import FooterHomepage from "./FooterHomepage";
import bgNetwork from "../../assets/bg-network.png";

export default function Homepage() {
  return (
    <>
      <main className="hero-container bg-primary position-relative">
        <div className="hero-bg-grain position-absolute top-0 start-0 w-100 h-100"></div>
        <ParticlesComponent />
        <Hero />
      </main>
      <div className="position-relative">
        <img
          src={bgNetwork}
          className="position-absolute w-100 h-100"
          style={{ zIndex: 1 }}
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
