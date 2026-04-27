import hero from "../app/assets/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh]">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.src})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-[#020617]/80" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[min(45%,22rem)] bg-gradient-to-t from-[#020617] via-[#020617]/75 to-transparent sm:h-[min(50%,26rem)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(90vh-5rem)] w-full max-w-6xl items-center justify-center px-6 pt-25 sm:px-8">
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
          <div className="mt-10 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(180deg,#4f7bff_0%,#3556f2_100%)] px-8 py-3 text-sm font-semibold tracking-[0.02em] text-white shadow-[0_10px_28px_rgba(58,98,255,0.42)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto sm:min-w-[235px]">
              Get Free Strategy Call
            </button>
            <button className="inline-flex w-full items-center justify-center rounded-full border border-white/35 bg-white/10 px-8 py-3 text-sm font-semibold tracking-[0.02em] text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto sm:min-w-[235px]">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
