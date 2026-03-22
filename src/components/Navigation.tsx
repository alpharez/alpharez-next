import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 via-sky-400/10 to-amber-300/10 shadow-[0_10px_32px_rgba(14,165,233,0.22)]">
            <Image
              src="/alpharez_icon_only.svg"
              alt="Alpharez icon"
              width={28}
              height={28}
              className="h-7 w-7"
            />
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-semibold tracking-tight text-slate-50">Alpharez</div>
            <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
              Consulting + Automation
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 md:flex">
          <Link href="/" className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
            Home
          </Link>
          <Link href="/services" className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
            Services
          </Link>
          <Link href="/about" className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
            About
          </Link>
          <Link href="/contact" className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
            Contact
          </Link>
        </div>

        <Link href="/contact" className="button-primary px-5 py-3 text-sm">
          Book Intro Call
        </Link>
      </div>
    </nav>
  );
}
