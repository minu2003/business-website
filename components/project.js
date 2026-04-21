export default function project(){
    return(
        <div>
            <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-white/20 bg-black/30 p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold">Reliable Coverage</h2>
            <p className="mt-3 text-sm text-white/80">
              Built for uninterrupted performance in both urban and remote areas.
            </p>
          </article>
          <article className="rounded-2xl border border-white/20 bg-black/30 p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold">High-Speed Access</h2>
            <p className="mt-3 text-sm text-white/80">
              Enjoy smooth streaming, work calls, and low-latency browsing.
            </p>
          </article>
          <article className="rounded-2xl border border-white/20 bg-black/30 p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold">Flexible Plans</h2>
            <p className="mt-3 text-sm text-white/80">
              Scale your plan based on travel, business growth, and seasonal use.
            </p>
          </article>
        </div>
      </section>
        </div>
    )
}