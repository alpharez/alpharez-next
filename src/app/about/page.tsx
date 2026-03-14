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

export default function About() {
  return (
    <main className="page-shell min-h-screen">
      <section className="section-shell px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow mb-6">About Alpharez</span>
            <h1 className="section-title text-4xl leading-tight md:text-6xl">
              We help infrastructure teams modernize without sacrificing control.
            </h1>
            <p className="section-copy mt-6 max-w-2xl text-lg leading-8">
              Alpharez exists to remove operational drag from complex technology environments.
              Our work combines automation strategy, architecture expertise, and hands-on delivery
              to help organizations scale with confidence.
            </p>
          </div>

          <div className="panel rounded-[2rem] p-8">
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                { value: "500+", label: "networks and environments improved" },
                { value: "90%", label: "reduction in repetitive deployment work" },
                { value: "99.9%", label: "configuration accuracy in validated workflows" },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <div className="text-3xl font-semibold tracking-tight text-white">{item.value}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">Mission</p>
              <p className="mt-4 text-base leading-8 text-slate-200">
                Make infrastructure operations more resilient, more intelligent, and far less
                dependent on brittle manual work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel rounded-[2rem] p-8">
            <span className="eyebrow mb-5">How we think</span>
            <h2 className="section-title text-3xl md:text-4xl">The consulting model is simple: clarity first, implementation second, trust always.</h2>
            <p className="section-copy mt-5 text-base leading-8">
              Teams bring us in when systems are growing more complex than the operating model
              around them. We help untangle the architecture, identify leverage points, and turn
              strategy into durable execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {principles.map((principle, index) => (
              <div key={principle.title} className="panel-soft rounded-[1.75rem] p-6">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                  Principle 0{index + 1}
                </div>
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
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-cyan-200/80">
              Founder & Lead Engineer
            </p>
            <p className="section-copy mt-5 text-base leading-8">
              Former principal network architect with 15+ years of experience leading large-scale
              automation, infrastructure design, and operating model improvements across demanding
              enterprise environments.
            </p>
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
          </div>
        </div>
      </section>

      <section className="section-shell px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="panel rounded-[2.25rem] px-8 py-10 text-center sm:px-12">
            <span className="eyebrow mb-6">Work with us</span>
            <h2 className="section-title text-3xl md:text-5xl">Looking for a consulting partner that can think strategically and execute deeply?</h2>
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
