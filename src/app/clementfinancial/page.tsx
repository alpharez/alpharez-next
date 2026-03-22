import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clement Financial Partners | Wealth Management, Accounting & Advisory",
  description:
    "Clement Financial Partners provides wealth management, accounting, audit support, and investment planning for individuals, families, and growing organizations.",
};

const serviceLines = [
  {
    title: "Wealth Management",
    summary:
      "Align investment strategy, cash flow planning, and long-term goals with a disciplined approach built around your life stage and priorities.",
    bullets: [
      "Personalized financial roadmaps",
      "Risk-aware portfolio alignment",
      "Retirement income planning",
      "Education and legacy funding strategies",
    ],
  },
  {
    title: "Accounting Services",
    summary:
      "Keep reporting clear, decision-ready, and consistent with support that reduces administrative drag for households and businesses.",
    bullets: [
      "Monthly bookkeeping oversight",
      "Financial statement preparation",
      "Cash flow and expense tracking",
      "Year-end close support",
    ],
  },
  {
    title: "Audit & Assurance Support",
    summary:
      "Prepare with confidence for audits, reviews, and stakeholder reporting through organized records, stronger controls, and practical guidance.",
    bullets: [
      "Audit readiness planning",
      "Documentation cleanup",
      "Internal control review",
      "Coordination with external auditors",
    ],
  },
  {
    title: "Investment Guidance",
    summary:
      "Build and monitor investment strategies that balance opportunity, preservation, liquidity, and time horizon.",
    bullets: [
      "Asset allocation planning",
      "Portfolio reviews",
      "Diversification analysis",
      "Market commentary and rebalancing support",
    ],
  },
  {
    title: "Business Financial Advisory",
    summary:
      "Help owners and operators sharpen visibility into growth, margins, forecasting, and capital decisions.",
    bullets: [
      "Budget development",
      "Forecasting and scenario planning",
      "Profitability analysis",
      "Growth and succession planning",
    ],
  },
  {
    title: "Tax Planning Coordination",
    summary:
      "Make tax implications part of the conversation early so financial decisions stay coordinated throughout the year.",
    bullets: [
      "Quarterly planning discussions",
      "Entity and compensation coordination",
      "Capital gains awareness",
      "Collaboration with tax preparers",
    ],
  },
];

const clientProfiles = [
  {
    title: "Individuals & families",
    copy: "Planning for retirement, education, estate goals, and long-term financial clarity.",
  },
  {
    title: "Business owners",
    copy: "Connecting personal wealth strategy with the realities of running and growing a company.",
  },
  {
    title: "Organizations",
    copy: "Supporting reporting, controls, audit prep, and advisory needs for established teams.",
  },
];

const process = [
  {
    title: "Discover",
    copy: "Understand your current financial picture, goals, constraints, and decision priorities.",
  },
  {
    title: "Structure",
    copy: "Build a coordinated plan across investments, accounting, reporting, and long-term objectives.",
  },
  {
    title: "Execute",
    copy: "Implement the right actions in a measured way with documentation, visibility, and accountability.",
  },
  {
    title: "Review",
    copy: "Revisit the plan regularly as markets, business conditions, and life circumstances change.",
  },
];

const differentiators = [
  "Integrated advice across wealth, accounting, and reporting",
  "Clear communication for both families and business stakeholders",
  "Practical planning that supports steady, long-term decision-making",
];

const faqs = [
  {
    question: "Who is Clement Financial Partners best suited for?",
    answer:
      "The firm is designed for individuals, families, business owners, and organizations that want financial guidance grounded in both strategy and day-to-day execution.",
  },
  {
    question: "Can you support both accounting and investment conversations?",
    answer:
      "Yes. The goal is a more coordinated view, so reporting, planning, and investment decisions inform each other rather than living in separate silos.",
  },
  {
    question: "Do engagements need to be ongoing?",
    answer:
      "Not always. Some clients need a focused planning engagement, while others benefit from an ongoing advisory relationship with recurring reviews.",
  },
  {
    question: "What does the first conversation usually cover?",
    answer:
      "An intro discussion typically covers current financial priorities, pain points, timing, and which services would create the most immediate value.",
  },
];

export default function ClementFinancialPage() {
  return (
    <main className="page-shell min-h-screen">
      <section className="section-shell px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="hero-grid panel mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <span className="eyebrow mb-6">Clement Financial Partners</span>
              <h1 className="section-title max-w-4xl text-4xl leading-tight md:text-6xl">
                Financial guidance built to protect wealth, sharpen reporting, and support better
                decisions.
              </h1>
              <p className="section-copy mt-6 max-w-2xl text-lg leading-8">
                Clement Financial Partners helps clients navigate wealth management, accounting,
                audit preparation, and investment strategy with a steady, relationship-driven
                approach that keeps long-term goals in focus.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="button-primary px-7 py-4 text-base">
                  Schedule a Consultation
                </Link>
                <Link href="#services" className="button-secondary px-7 py-4 text-base">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                {
                  label: "Focus",
                  value: "Wealth, accounting, audit, and investment advisory",
                },
                {
                  label: "Approach",
                  value: "Personalized planning with disciplined follow-through",
                },
                {
                  label: "Client fit",
                  value: "Families, owners, and organizations seeking coordinated guidance",
                },
              ].map((item) => (
                <div key={item.label} className="panel-outline rounded-[1.75rem] p-6">
                  <p className="mini-label">{item.label}</p>
                  <p className="mt-3 text-base leading-7 text-slate-200">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="divider-line my-8" />

          <div className="grid gap-4 md:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item} className="panel-soft rounded-[1.5rem] p-6">
                <p className="mini-label">What clients value</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-shell px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="eyebrow mb-5">Service lines</span>
            <h2 className="section-title text-3xl md:text-5xl">
              A finance firm built around planning, accountability, and long-term stewardship.
            </h2>
            <p className="section-copy mt-5 text-lg leading-8">
              The site is structured to present Clement Financial Partners as a modern advisory
              firm with depth across personal finance, business finance, and financial reporting.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {serviceLines.map((service, index) => (
              <div key={service.title} className="panel rounded-[2rem] p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                    0{index + 1}
                  </div>
                  <span className="mini-label">Advisory</span>
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
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel rounded-[2rem] p-8">
            <span className="eyebrow mb-5">Who we serve</span>
            <h2 className="section-title text-3xl md:text-4xl">
              Advice designed for real-world financial complexity, not generic templates.
            </h2>
            <p className="section-copy mt-5 text-base leading-8">
              Clement Financial Partners can speak to both personal and organizational needs, which
              gives the brand a broader and more credible service profile on the web.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="mini-label">Positioning</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Relationship-driven advisory for clients who want a trusted financial partner, not
                just a transactional provider.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {clientProfiles.map((profile) => (
              <div key={profile.title} className="panel-soft rounded-[1.75rem] p-6">
                <h3 className="text-xl font-semibold tracking-tight text-white">{profile.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{profile.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="panel rounded-[2rem] p-8">
            <span className="eyebrow mb-5">Our process</span>
            <h2 className="section-title text-3xl md:text-4xl">
              A simple advisory model that keeps financial planning active, visible, and adaptable.
            </h2>
            <p className="section-copy mt-5 text-base leading-8">
              The service story is framed around steady review and coordinated execution, which
              works well for a financial-services brand and keeps the page easy to trust.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title} className="panel-soft rounded-[1.75rem] p-6 text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-base font-semibold text-cyan-100">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="eyebrow mb-5">FAQ</span>
            <h2 className="section-title text-3xl md:text-5xl">
              Questions a prospective financial-services client might ask.
            </h2>
            <p className="section-copy mt-5 text-lg leading-8">
              These sections help round out the site so it feels established and informative rather
              than just a one-screen marketing page.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel-soft rounded-[1.75rem] p-6">
                <h3 className="text-xl font-semibold tracking-tight text-white">{faq.question}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="panel rounded-[2.25rem] px-8 py-10 text-center sm:px-12">
            <span className="eyebrow mb-6">Next step</span>
            <h2 className="section-title text-3xl md:text-5xl">
              Ready to position Clement Financial Partners as a polished advisory brand?
            </h2>
            <p className="section-copy mx-auto mt-5 max-w-2xl text-lg leading-8">
              The new route is ready to serve as a dedicated finance-firm destination under the
              existing Alpharez site structure.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary px-7 py-4 text-base">
                Contact Alpharez
              </Link>
              <Link href="/" className="button-secondary px-7 py-4 text-base">
                Back to Main Site
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
