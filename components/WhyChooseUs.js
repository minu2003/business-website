const reasons = [
  {
    title: "Outcome-Focused Strategy",
    description:
      "Every project starts with clear KPIs, so your investment maps directly to revenue, efficiency, or customer growth.",
  },
  {
    title: "AI + Engineering Under One Team",
    description:
      "We combine AI consulting, automation, web, and mobile delivery in one workflow to reduce handoff delays and cost.",
  },
  {
    title: "Fast Iteration Cycles",
    description:
      "Weekly releases, rapid feedback loops, and transparent updates keep your product moving without long black-box phases.",
  },
  {
    title: "Built for Scale and Security",
    description:
      "From architecture to deployment, we follow modern standards so your platform stays reliable as traffic and features grow.",
  },
];

const highlights = [
  { value: "4-8 weeks", label: "Typical MVP timeline" },
  { value: "98%", label: "On-time milestone delivery" },
  { value: "24/7", label: "Monitoring-ready systems" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-8 sm:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
          Why Choose Us
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          A Modern Delivery Partner Built For Business Results
        </h2>
        <p className="mt-4 text-white/80">
          We blend product strategy, AI expertise, and clean engineering to help
          you launch faster and scale with confidence.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-2xl border border-white/20 bg-black/30 p-6 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold">{reason.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/80">
                {reason.description}
              </p>
            </article>
          ))}
        </div>

        <aside className="rounded-2xl border border-white/20 bg-[linear-gradient(160deg,rgba(30,64,175,0.35),rgba(3,7,18,0.5))] p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold">Built Around Momentum</h3>
          <p className="mt-3 text-sm leading-6 text-white/80">
            Our delivery model is designed for founders and teams that need speed,
            clarity, and measurable progress from day one.
          </p>

          <div className="mt-6 space-y-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3"
              >
                <p className="text-xl font-bold text-white">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(180deg,#4f7bff_0%,#3556f2_100%)] px-6 py-3 text-sm font-semibold tracking-[0.02em] text-white shadow-[0_10px_28px_rgba(58,98,255,0.42)] transition-transform duration-200 hover:-translate-y-0.5">
            Start Your Project Roadmap
          </button>
        </aside>
      </div>
    </section>
  );
}
