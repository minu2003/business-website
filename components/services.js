const serviceCards = [
  {
    title: "AI Solutions",
    tag: "Strategy + Intelligence",
    description:
      "We design AI systems that solve real business problems, from assistants to predictive workflows.",
    points: ["Use-case discovery", "Model integration", "Measurable ROI"],
  },
  {
    title: "AI Automation",
    tag: "Process Acceleration",
    description:
      "Automate repetitive work across operations, support, and sales to increase output with less manual effort.",
    points: ["Workflow mapping", "No-code/low-code automation", "Performance monitoring"],
  },
  {
    title: "Website Development",
    tag: "Conversion-Focused Web",
    description:
      "Build fast, secure websites engineered for trust, SEO visibility, and conversion at every stage.",
    points: ["Premium UI systems", "Technical SEO setup", "Scalable architecture"],
  },
  {
    title: "Mobile App Development",
    tag: "iOS + Android Delivery",
    description:
      "Launch robust mobile apps with clean architecture and user-first journeys that support product growth.",
    points: ["Modern app UX", "Reliable backend sync", "Future-ready codebase"],
  },
];

export default function Services() {
  return (
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
        {serviceCards.map((service) => (
          <article
            key={service.title}
            className="group relative overflow-hidden rounded-2xl border border-white/20 bg-[linear-gradient(150deg,rgba(16,30,80,0.45),rgba(0,0,0,0.45))] p-6 shadow-[0_10px_40px_rgba(5,8,28,0.45)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80">
              {service.tag}
            </p>
            <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/80">
              {service.description}
            </p>

            <ul className="mt-5 space-y-2">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5f82ff]" />
                  {point}
                </li>
              ))}
            </ul>

            <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-opacity duration-200 group-hover:opacity-100 md:opacity-85">
              Learn more
              <span aria-hidden>→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}