import Hero from "./Hero";
import ParticlesComponent from "./Particles";

export default function Homepage() {
  return (
    <main className="bg-primary overflow-hidden">
      <ParticlesComponent />
      <Hero />
    </main>
  );
}
