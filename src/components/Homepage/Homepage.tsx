import Hero from "./Hero";
import ParticlesComponent from "./Particles";

export default function Homepage() {
  return (
    <main className="bg-primary">
      <ParticlesComponent />
      <Hero />
    </main>
  );
}
