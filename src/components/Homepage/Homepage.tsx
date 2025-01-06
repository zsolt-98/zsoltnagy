// Homepage.tsx
import FullpageScroll from "../../FullPageScroll";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import ParticlesComponent from "./Particles";

export default function Homepage() {
  return (
    <FullpageScroll>
      <main className="hero-container bg-primary min-vh-100 position-relative">
        <ParticlesComponent />
        <Hero />
      </main>
      <section>
        <AboutMe />
      </section>
    </FullpageScroll>
  );
}
