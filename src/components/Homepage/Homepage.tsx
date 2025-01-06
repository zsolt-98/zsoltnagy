// Homepage.tsx
import FullpageScroll from "../../FullPageScroll";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import ParticlesComponent from "./Particles";

export default function Homepage() {
  return (
    <FullpageScroll>
      <div className="hero-container bg-primary position-relative">
        <ParticlesComponent />
        <Hero />
      </div>
      <AboutMe />
    </FullpageScroll>
  );
}
