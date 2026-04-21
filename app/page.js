import Hero from "../components/Hero";
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

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            End-to-End Digital Services For Modern Businesses
          </h2>
          <p className="mt-4 text-white/80">
            From strategy to launch, we build practical technology solutions that
            improve operations, customer experience, and growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/20 bg-black/30 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold">AI Solutions</h3>
            <p className="mt-3 text-sm text-white/80">
              We design and integrate AI tools such as chat assistants, smart
              workflows, and data-driven insights tailored to your business.
            </p>
          </article>
          <article className="rounded-2xl border border-white/20 bg-black/30 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold">AI Automation</h3>
            <p className="mt-3 text-sm text-white/80">
              We automate repetitive tasks across sales, support, and operations
              to save time, reduce errors, and boost team productivity.
            </p>
          </article>
          <article className="rounded-2xl border border-white/20 bg-black/30 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold">Website Development</h3>
            <p className="mt-3 text-sm text-white/80">
              We build fast, secure, and conversion-focused websites that reflect
              your brand and support long-term business growth.
            </p>
          </article>
          <article className="rounded-2xl border border-white/20 bg-black/30 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold">Mobile App Development</h3>
            <p className="mt-3 text-sm text-white/80">
              We create scalable iOS and Android apps with intuitive UX, robust
              performance, and clean architecture for future expansion.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
