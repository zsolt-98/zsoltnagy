import AboutMe from "./AboutMe";
import Hero from "./Hero";
import ParticlesComponent from "./Particles";

export default function Homepage() {
  return (
    <>
      <main className="bg-primary overflow-hidden position-relative">
        <ParticlesComponent />
        <Hero />
      </main>
      <section>
        <AboutMe />
      </section>
    </>
  );
}
