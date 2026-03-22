import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-10 lg:grid-cols-[1.4fr_0.7fr_0.7fr]">
          <div className="panel rounded-[2rem] p-8">
            <Image
              src="/alpharez_white_logo.svg"
              alt="Alpharez logo"
              width={220}
              height={70}
              className="mb-5 h-auto w-40"
            />
            <h3 className="section-title mb-4 text-3xl">
              Modern consulting for teams that cannot afford brittle networks.
            </h3>
            <p className="section-copy max-w-xl text-base">
              Alpharez helps engineering leaders move from manual operations to resilient,
              AI-assisted infrastructure with faster change velocity and stronger controls.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              Explore
            </h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/clementfinancial" className="hover:text-white">
                  Clement Financial
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              Resources
            </h4>
            <ul className="space-y-3 text-slate-300">
              <li>Network Automation</li>
              <li>AI-Driven Operations</li>
              <li>
                <Link href="/alpharez_minimalist_logo.html" className="hover:text-white">
                  Brand Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} Alpharez. All rights reserved.</p>
          <p>Technology consulting focused on automation, resilience, and operating leverage.</p>
        </div>
      </div>
    </footer>
  );
}
