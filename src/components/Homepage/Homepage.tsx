import Hero from "./Hero";
import AboutMe from "./AboutMe";
import ParticlesComponent from "./Particles";
import WorkAndCV from "./WorkAndCV";
import PageDividerTop from "../SVG/PageDividerTop";

export default function Homepage() {
  return (
    <>
      <main className="hero-container bg-primary position-relative d-flex flex-column">
        <ParticlesComponent />
        <Hero />
        <PageDividerTop className="test" />
      </main>
      <section>
        <AboutMe />
      </section>
      <section>
        <WorkAndCV />
      </section>
    </>
  );
}
