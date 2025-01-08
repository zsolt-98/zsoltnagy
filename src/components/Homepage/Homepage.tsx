import Hero from "./Hero";
import AboutMe from "./AboutMe";
import ParticlesComponent from "./Particles";

export default function Homepage() {
  return (
    <>
      <main className="hero-container bg-primary position-relative">
        <ParticlesComponent />
        <Hero />
      </main>
      <section>
        <AboutMe />
      </section>
    </>
  );
}
