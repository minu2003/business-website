import Navbar from "./Navbar";
import hero from "../app/assets/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh]">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.src})` }}
      />
      <div className="absolute inset-0 -z-10 bg-black/35" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[min(45%,22rem)] bg-gradient-to-t from-[#020617] via-[#020617]/75 to-transparent sm:h-[min(50%,26rem)]"
        aria-hidden
      />

      <Navbar />

      <div className="relative z-10 mx-auto flex min-h-[calc(90vh-5rem)] w-full max-w-6xl items-center justify-center px-6 pt-20 sm:px-8">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            AI Solutions Company
          </p>
          <h1 className="max-w-4xl text-center text-4xl font-bold leading-tight sm:text-6xl">
            Build Smarter Digital Products With Provixo
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-white/85">
            We deliver AI-powered solutions, AI automations, modern websites, and
            high-performance mobile apps that help your business grow faster.
          </p>
          <button className="mt-10 rounded-md bg-white px-10 py-3 text-sm font-semibold text-[#0b1022] transition-colors hover:bg-white/90">
            BOOK A FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}
