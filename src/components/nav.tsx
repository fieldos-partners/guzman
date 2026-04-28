import { Phone } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mt-4 flex items-center justify-between rounded-full border border-moss-900/10 bg-sand-50/80 px-4 py-2.5 backdrop-blur-md shadow-soft">
          <a href="#" className="flex items-center gap-2.5">
            <div className="grid place-items-center h-9 w-9 rounded-full bg-moss-700 text-sand-50 font-display font-bold">
              HG
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="font-display text-[15px] font-semibold text-moss-900">
                Harold Guzman's
              </div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-moss-700/70">
                Landscaping
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-moss-800/80">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-moss-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-moss-700 hover:bg-moss-800 transition-colors px-4 py-2 text-sm font-medium text-sand-50"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Get a quote</span>
            <span className="sm:hidden">Quote</span>
          </a>
        </div>
      </div>
    </header>
  );
}
