import Link from "next/link";

const principles = [
  {
    title: "Engineering credibility",
    copy: "Recommendations are grounded in implementation realities, change control, and operational risk.",
  },
  {
    title: "Measured modernization",
    copy: "We favor pragmatic transformation over expensive reinvention for its own sake.",
  },
  {
    title: "Partnership mindset",
    copy: "Teams trust us because we build capability with them, not around them.",
  },
];

const values = ["Innovation", "Reliability", "Efficiency", "Partnership"];

const milestones = [
  {
    year: "2019",
    title: "Alpharez launches",
    copy: "Built around a simple premise: infrastructure teams deserve less repetitive work and more strategic headroom.",
  },
  {
    year: "2022",
    title: "Automation depth expands",
    copy: "Engagements grew from tactical fixes into broader operating model and architecture transformation work.",
  },
  {
    year: "Today",
    title: "Advisory + delivery",
    copy: "The focus remains the same: modernize systems without increasing fragility or organizational drag.",
  },
];

export default function About() {
  return (
    <main className="page-shell min-h-screen">
      <section className="section-shell px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="hero-grid panel mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <span className="eyebrow mb-6">About Alpharez</span>
              <h1 className="section-title max-w-4xl text-4xl leading-tight md:text-6xl">
                A consulting partner for teams modernizing serious infrastructure.
              </h1>
              <p className="section-copy mt-6 max-w-2xl text-lg leading-8">
                Alpharez exists to remove operational drag from complex technology environments.
                Our work combines automation strategy, architecture expertise, and hands-on delivery
                to help organizations scale with confidence instead of accumulating more fragility.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="button-primary px-7 py-4 text-base">
                  Start a Conversation
                </Link>
                <Link href="/services" className="button-secondary px-7 py-4 text-base">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { value: "500+", label: "networks and environments improved" },
                { value: "90%", label: "reduction in repetitive deployment work" },
                { value: "99.9%", label: "configuration accuracy in validated workflows" },
              ].map((item) => (
                <div key={item.label} className="panel-outline rounded-[1.75rem] p-6">
                  <div className="metric-value">{item.value}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="divider-line my-8" />

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
              <p className="mini-label">Mission</p>
              <p className="mt-4 text-base leading-8 text-slate-100">
                Make infrastructure operations more resilient, more intelligent, and far less
                dependent on brittle manual work.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel rounded-[2rem] p-8">
            <span className="eyebrow mb-5">How we think</span>
            <h2 className="section-title text-3xl md:text-4xl">
              The consulting model is simple: clarity first, implementation second, trust always.
            </h2>
            <p className="section-copy mt-5 text-base leading-8">
              Teams bring us in when systems are growing more complex than the operating model
              around them. We help untangle the architecture, identify leverage points, and turn
              strategy into durable execution without theatrics or unnecessary churn.
            </p>
          </div>

          <div className="grid gap-6">
            {principles.map((principle, index) => (
              <div key={principle.title} className="panel-soft rounded-[1.75rem] p-6">
                <div className="mb-4 mini-label">Principle 0{index + 1}</div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">{principle.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{principle.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="panel rounded-[2rem] p-8">
            <span className="eyebrow mb-5">Leadership</span>
            <h2 className="section-title text-3xl">Steven Clement</h2>
            <p className="mt-2 mini-label text-cyan-200/80">Founder & Lead Engineer</p>
            <p className="section-copy mt-5 text-base leading-8">
              Former principal network architect with 15+ years of experience leading large-scale
              automation, infrastructure design, and operating model improvements across demanding
              enterprise environments.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="mini-label">Working style</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Practical guidance, direct communication, and systems that make sense to the teams
                who have to operate them after delivery.
              </p>
            </div>
          </div>

          <div className="panel rounded-[2rem] p-8">
            <span className="eyebrow mb-5">Our story</span>
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                Alpharez was built around a familiar problem: skilled engineers were spending too
                much time on repetitive change work, too little time on architecture, and taking on
                more operational risk than necessary.
              </p>
              <p>
                We saw an opportunity to pair automation and AI with disciplined infrastructure
                practices, creating systems that improve both delivery speed and operator confidence.
              </p>
              <p>
                Since launching in 2019, that approach has helped organizations reduce manual effort,
                strengthen reliability, and modernize their technology foundations with less friction.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {milestones.map((milestone) => (
                <div key={milestone.title} className="panel-outline rounded-[1.5rem] p-5">
                  <p className="mini-label text-cyan-200/80">{milestone.year}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{milestone.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{milestone.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="panel rounded-[2.25rem] px-8 py-10 text-center sm:px-12">
            <span className="eyebrow mb-6">Work with us</span>
            <h2 className="section-title text-3xl md:text-5xl">
              Looking for a consulting partner that can think strategically and execute deeply?
            </h2>
            <p className="section-copy mx-auto mt-5 max-w-2xl text-lg leading-8">
              We help teams move from scattered tooling and manual operations to intentional,
              scalable infrastructure practices.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary px-7 py-4 text-base">
                Get in Touch
              </Link>
              <Link href="/services" className="button-secondary px-7 py-4 text-base">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
