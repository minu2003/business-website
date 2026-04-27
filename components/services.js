const serviceCards = [
  {
    title: "AI Solutions",
    tag: "Strategy + Intelligence",
    description: "Practical AI to solve real business tasks.",
    points: ["Use-case planning", "Model integration"],
    accent: "from-violet-500/35 to-indigo-500/10",
  },
  {
    title: "AI Automation",
    tag: "Process Acceleration",
    description: "Automate repetitive work and improve team speed.",
    points: ["Workflow mapping", "Performance tracking"],
    accent: "from-cyan-500/30 to-blue-500/10",
  },
  {
    title: "Website Development",
    tag: "Conversion-Focused Web",
    description: "Fast, secure websites built to convert.",
    points: ["Modern UI", "Technical SEO"],
    accent: "from-fuchsia-500/30 to-purple-500/10",
  },
  {
    title: "Mobile App Development",
    tag: "iOS + Android Delivery",
    description: "Clean, reliable apps for iOS and Android.",
    points: ["User-first UX", "Stable backend sync"],
    accent: "from-emerald-500/30 to-teal-500/10",
  },
];

export default function Services() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/75">
          What We Do
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Premium Digital Services
        </h2>
        <p className="mt-4 text-white/75">
          Elegant, high-impact solutions built for modern business growth.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {serviceCards.map((service, index) => (
          <article
            key={service.title}
            className="group relative overflow-hidden rounded-3xl border border-white/15 bg-[linear-gradient(160deg,rgba(10,20,60,0.62),rgba(2,6,20,0.82))] p-7 shadow-[0_18px_50px_rgba(2,6,25,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
          >
            <div
              className={`absolute -right-12 -top-14 h-40 w-40 rounded-full bg-gradient-to-br ${service.accent} blur-3xl transition-all duration-300 group-hover:scale-110`}
            />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80">
                {service.tag}
              </p>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xs font-semibold text-white/80">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="relative z-10 mt-5 text-xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="relative z-10 mt-3 text-sm leading-6 text-white/80">
              {service.description}
            </p>

            <ul className="relative z-10 mt-5 space-y-2.5">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7fa1ff]" />
                  {point}
                </li>
              ))}
            </ul>

            <button className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white">
              View service
              <span aria-hidden>→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}