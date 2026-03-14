import Link from "next/link";

const services = [
  {
    title: "Network Automation",
    summary:
      "Design and deploy workflows that reduce manual change work, standardize delivery, and improve operational safety.",
    bullets: [
      "Ansible AWX orchestration",
      "Custom Python automation",
      "GitOps change workflows",
      "Zero-touch provisioning",
      "Configuration validation and rollback",
    ],
  },
  {
    title: "AI-Driven Intelligence",
    summary:
      "Use automation and AI to detect anomalies, prioritize signals, and create sharper operational awareness.",
    bullets: [
      "Predictive analytics",
      "Anomaly detection",
      "RAG-assisted retrieval and response workflows",
      "Natural language workflow generation",
      "Performance optimization",
    ],
  },
  {
    title: "Security Automation",
    summary:
      "Strengthen controls and response speed with automated monitoring, incident workflows, and policy validation.",
    bullets: [
      "Threat detection",
      "SOAR-style incident orchestration",
      "Automated response",
      "Compliance monitoring",
      "Vulnerability management",
    ],
  },
  {
    title: "Consulting & Strategy",
    summary:
      "Build a transformation roadmap aligned to technical constraints, business priorities, and team readiness.",
    bullets: [
      "Automation roadmapping",
      "AI and infrastructure assessment",
      "Security architecture guidance",
      "DevOps and CI/CD integration",
      "Training and support",
    ],
  },
];

const process = ["Assess", "Design", "Implement", "Optimize"];

export default function Services() {
  return (
    <main className="page-shell min-h-screen">
      <section className="section-shell px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <span className="eyebrow mb-6">Services</span>
            <h1 className="section-title text-4xl leading-tight md:text-6xl">
              Advisory and delivery services for complex technology environments.
            </h1>
            <p className="section-copy mt-6 max-w-2xl text-lg leading-8">
              Alpharez helps teams plan, implement, and operationalize smarter infrastructure
              systems with a consulting approach that balances speed, resilience, and long-term
              maintainability.
            </p>
          </div>

          <div className="panel rounded-[2rem] p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Architecture review",
                "Automation roadmap",
                "Platform integration",
                "Team enablement",
              ].map((item) => (
                <div key={item} className="panel-soft rounded-[1.5rem] p-5">
                  <p className="text-base font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={service.title} className="panel rounded-[2rem] p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                    0{index + 1}
                  </div>
                  <span className="text-xs uppercase tracking-[0.22em] text-slate-400">Service line</span>
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-white">{service.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-300">{service.summary}</p>
                <ul className="mt-6 space-y-3">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.7)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="panel rounded-[2rem] p-8">
            <span className="eyebrow mb-5">Delivery model</span>
            <h2 className="section-title text-3xl md:text-4xl">
              A practical process that keeps momentum high and risk visible.
            </h2>
            <p className="section-copy mt-5 text-base leading-8">
              We focus on phased delivery, measurable outcomes, and systems teams can actually
              operate after the engagement ends.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step} className="panel-soft rounded-[1.75rem] p-6 text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-base font-semibold text-cyan-100">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">{step}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {step === "Assess" && "Evaluate architecture, tooling, and operational bottlenecks."}
                  {step === "Design" && "Define the target state, rollout approach, and priorities."}
                  {step === "Implement" && "Build with controls, validation, and team alignment."}
                  {step === "Optimize" && "Refine outcomes through telemetry, iteration, and support."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="panel rounded-[2.25rem] px-8 py-10 text-center sm:px-12">
            <span className="eyebrow mb-6">Next step</span>
            <h2 className="section-title text-3xl md:text-5xl">Need help choosing the right entry point?</h2>
            <p className="section-copy mx-auto mt-5 max-w-2xl text-lg leading-8">
              We can start with an assessment, a focused automation project, or a strategic review
              depending on where your team is today.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary px-7 py-4 text-base">
                Schedule Consultation
              </Link>
              <Link href="/about" className="button-secondary px-7 py-4 text-base">
                Learn About Alpharez
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
