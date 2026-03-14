const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Most projects land between 4 and 12 weeks depending on scope, stakeholder alignment, and integration complexity.",
  },
  {
    question: "Do you support multi-vendor environments?",
    answer:
      "Yes. We work across mixed environments and build solutions that reflect the realities of enterprise infrastructure.",
  },
  {
    question: "What level of support do you provide?",
    answer:
      "Engagements can include strategy, implementation, training, and ongoing guidance depending on your team’s needs.",
  },
  {
    question: "Can you integrate with existing tools?",
    answer:
      "Absolutely. We design around current workflows where possible and improve them without forcing unnecessary replacement.",
  },
];

const signals = [
  "Response within 24 hours",
  "Best for consulting-led infrastructure initiatives",
  "Works for scoped projects or longer advisory partnerships",
];

export default function Contact() {
  return (
    <main className="page-shell min-h-screen">
      <section className="section-shell px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="hero-grid panel mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <span className="eyebrow mb-6">Contact</span>
              <h1 className="section-title max-w-4xl text-4xl leading-tight md:text-6xl">
                Let&apos;s talk about where your infrastructure needs to go next.
              </h1>
              <p className="section-copy mt-6 max-w-2xl text-lg leading-8">
                If you&apos;re exploring automation, operational redesign, or a broader modernization
                effort, we can help you define the right starting point.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {signals.map((signal) => (
                <div key={signal} className="panel-outline rounded-[1.5rem] p-5">
                  <p className="mini-label">Signal</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="panel rounded-[2rem] p-8 sm:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="section-title text-3xl">Send a message</h2>
                <p className="section-copy mt-3 text-base leading-7">
                  Share a few details and we&apos;ll follow up with the right next step.
                </p>
              </div>
              <div className="mini-label text-cyan-200/80">Formspree secure submission</div>
            </div>

            <form action="https://formspree.io/f/mdkzwaev" method="POST" className="mt-8 space-y-6">
              <input type="hidden" name="_next" value="/thanks" />

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="field-label">
                    Full Name *
                  </label>
                  <input id="name" name="name" type="text" required className="field" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="field-label">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="field"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="company" className="field-label">
                    Company
                  </label>
                  <input id="company" name="company" type="text" className="field" placeholder="Company name" />
                </div>
                <div>
                  <label htmlFor="phone" className="field-label">
                    Phone Number
                  </label>
                  <input id="phone" name="phone" type="tel" className="field" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="field-label">
                  Service Interest
                </label>
                <select id="service" name="service" className="field">
                  <option value="">Select a service</option>
                  <option value="network-automation">Network Automation</option>
                  <option value="ai-infrastructure">AI-Driven Intelligence</option>
                  <option value="security-automation">Security Automation</option>
                  <option value="consulting">Consulting & Strategy</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="field-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="field resize-none"
                  placeholder="Tell us what you're working on, where you're blocked, and what a successful outcome looks like."
                />
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="mini-label">Helpful context</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Include the current state, major constraints, the platforms involved, and what a
                  successful result would look like for your team.
                </p>
              </div>

              <button type="submit" className="button-primary w-full px-7 py-4 text-base">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="panel rounded-[2rem] p-8">
              <span className="eyebrow mb-5">Direct contact</span>
              <h2 className="section-title text-3xl">Let&apos;s connect</h2>
              <div className="mt-8 space-y-5">
                <div className="panel-soft rounded-[1.5rem] p-5">
                  <p className="mini-label">General inbox</p>
                  <p className="mt-3 text-lg font-medium text-white">info@alpharez.com</p>
                  <p className="mt-2 text-sm text-slate-400">Typical response time: within 24 hours</p>
                </div>
                <div className="panel-soft rounded-[1.5rem] p-5">
                  <p className="mini-label">Primary contact</p>
                  <p className="mt-3 text-lg font-medium text-white">Steven Clement</p>
                  <p className="mt-2 text-sm text-slate-300">steve.clement@alpharez.com</p>
                </div>
                <div className="panel-soft rounded-[1.5rem] p-5">
                  <p className="mini-label">Best fit</p>
                  <p className="mt-3 text-base leading-7 text-slate-200">
                    Ideal for infrastructure teams planning automation work, operating model changes,
                    or consulting-led modernization initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="panel rounded-[2rem] p-8">
              <span className="eyebrow mb-5">Consultation</span>
              <h2 className="section-title text-3xl">Prefer a focused intro call?</h2>
              <p className="section-copy mt-4 text-base leading-8">
                A short consultation is often the fastest way to identify the right scope, the most
                important constraints, and the highest-value next move.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Review goals and current blockers",
                  "Clarify likely engagement shape",
                  "Align on practical next steps",
                ].map((item) => (
                  <div key={item} className="panel-outline flex items-center gap-3 rounded-[1.25rem] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.7)]" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <button className="button-secondary mt-8 w-full px-7 py-4 text-base">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="eyebrow mb-5">FAQ</span>
            <h2 className="section-title text-3xl md:text-5xl">A few practical questions, answered.</h2>
            <p className="section-copy mt-5 text-lg leading-8">
              Common questions we hear from teams evaluating consulting support or infrastructure modernization work.
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
    </main>
  );
}
