import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    title: "Platform-agnostic automation",
    description:
      "Design workflows that standardize change delivery across vendors, environments, and operating models.",
  },
  {
    title: "AI-assisted operations",
    description:
      "Apply intelligent analysis to detect drift, surface risk, and reduce time spent chasing noisy signals.",
  },
  {
    title: "Executive-ready roadmaps",
    description:
      "Turn engineering priorities into phased transformation plans with measurable operational outcomes.",
  },
];

const outcomes = [
  { value: "90%", label: "less manual effort in routine change workflows" },
  { value: "4x", label: "faster rollout velocity for new infrastructure patterns" },
  { value: "24/7", label: "operational visibility with automation-first controls" },
];

const industries = ["Enterprise IT", "Managed Services", "Financial Services", "Healthcare"];

export default function Home() {
  return (
    <main className="page-shell min-h-screen">
      <section className="section-shell px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow mb-6">Technology consulting for modern infrastructure</span>
            <h1 className="section-title max-w-4xl text-5xl leading-[0.96] md:text-7xl">
              Architect smarter systems.
              <span className="block bg-gradient-to-r from-cyan-200 via-sky-300 to-amber-200 bg-clip-text text-transparent">
                Automate the work that slows teams down.
              </span>
            </h1>
            <p className="section-copy mt-6 max-w-2xl text-lg leading-8 md:text-xl">
              Alpharez helps organizations modernize network and infrastructure operations with
              automation strategy, AI-informed observability, and implementation support that
              reduces fragility without adding noise.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary px-7 py-4 text-base">
                Start a Conversation
              </Link>
              <Link href="/services" className="button-secondary px-7 py-4 text-base">
                Explore Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

          <div className="panel grid-fade rounded-[2rem] p-6 sm:p-8">
            <div className="rounded-[1.5rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.16),transparent_42%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(8,16,30,0.94))] p-6">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">Operating model</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    From reactive operations to resilient delivery
                  </h2>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                  Stable
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Assess architecture, tooling, and operational bottlenecks",
                  "Prioritize automation opportunities with the highest leverage",
                  "Implement controls, telemetry, and rollout patterns teams can trust",
                ].map((item) => (
                  <div key={item} className="panel-soft flex items-start gap-3 rounded-2xl p-4">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.8)]" />
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {outcomes.map((outcome) => (
                  <div key={outcome.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-3xl font-semibold tracking-tight text-white">{outcome.value}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{outcome.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="panel-soft rounded-[2rem] px-6 py-5 sm:px-8">
            <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.24em] text-slate-400 md:flex-row md:items-center md:justify-between">
              <span>What clients bring us in for</span>
              <span className="text-cyan-200/80">Strategy • Delivery • Operating leverage</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="eyebrow mb-5">Core capabilities</span>
            <h2 className="section-title text-3xl md:text-5xl">
              Consulting that turns technical complexity into momentum.
            </h2>
            <p className="section-copy mt-5 text-lg leading-8">
              We combine architecture thinking with implementation depth, so recommendations are
              practical, not theoretical.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <div key={capability.title} className="panel rounded-[1.75rem] p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-lg font-semibold text-cyan-100">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">{capability.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel rounded-[2rem] p-8">
            <span className="eyebrow mb-5">Why Alpharez</span>
            <h2 className="section-title text-3xl md:text-4xl">
              Built for environments where reliability and speed must coexist.
            </h2>
            <p className="section-copy mt-5 text-base leading-8">
              The strongest consulting partners do more than advise. They help teams create
              durable systems, stronger operator confidence, and clearer decision-making.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="panel-soft rounded-[1.75rem] p-6">
              <h3 className="text-xl font-semibold tracking-tight text-white">Executive clarity</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Roadmaps and recommendations framed in business terms, not just tooling choices.
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 shadow-[0_24px_80px_rgba(2,6,23,0.34)]">
              <Image
                src="/ws-stock-prog1.jpg"
                alt="Professional working with network automation and analytics tools"
                width={900}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="panel-soft rounded-[1.75rem] p-6">
              <h3 className="text-xl font-semibold tracking-tight text-white">Hands-on delivery</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Architecture support backed by real implementation experience across modern stacks.
              </p>
              <div className="mt-5 border-t border-white/10 pt-5">
                <h4 className="text-base font-semibold text-white">Long-term resilience</h4>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Controls, patterns, and operating practices designed to outlast one-off projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="panel rounded-[2.25rem] px-8 py-10 text-center sm:px-12">
            <span className="eyebrow mb-6">Let&apos;s make the site work harder</span>
            <h2 className="section-title text-3xl md:text-5xl">
              Need a technology consulting partner that feels credible from the first meeting?
            </h2>
            <p className="section-copy mx-auto mt-5 max-w-2xl text-lg leading-8">
              We help teams simplify infrastructure, improve reliability, and build operating
              models that scale without constant firefighting.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary px-7 py-4 text-base">
                Book Intro Call
              </Link>
              <Link href="/about" className="button-secondary px-7 py-4 text-base">
                Meet Alpharez
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
