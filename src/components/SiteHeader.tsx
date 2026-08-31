import { useEffect, useState } from "react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-border bg-charcoal/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 md:py-5">
        <a
          href="#top"
          className="min-w-0 truncate font-display text-sm font-medium uppercase tracking-[0.34em] text-cream"
        >
          Javaholics
        </a>

        <nav className="hidden shrink-0 items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.14em] text-cream/70 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a href="#location" className="btn-outline-gold">
            Find Us
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 p-2 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex h-4 w-6 flex-col justify-between">
            <span
              className={`block h-px w-full bg-cream transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-full bg-cream transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-full bg-cream transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-border bg-charcoal/95 backdrop-blur-md transition-[max-height] duration-500 md:hidden ${
          open ? "max-h-72 border-t" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-mono text-sm uppercase tracking-[0.12em] text-cream/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#location"
            onClick={() => setOpen(false)}
            className="btn-outline-gold my-5 w-full"
          >
            Find Us
          </a>
        </nav>
      </div>
    </header>
  );
}
