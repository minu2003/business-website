import Hero from "../components/Hero";
import Services from "../components/services";
import WhyChooseUs from "../components/WhyChooseUs";
import background from "./assets/background.png";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-white">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background.src})` }}
      />
      <div className="fixed inset-0 -z-10 bg-[#020617]/55" />

      <Hero />
      <Services />
      <WhyChooseUs />
    </div>
  );
}
