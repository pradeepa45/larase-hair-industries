import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { COMPANY, NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-surface/92 backdrop-blur-md",
        "transition-shadow duration-200 ease-out",
        scrolled || open ? "shadow-[var(--shadow-border)]" : "shadow-none",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <BrandMark className="size-9" />
          <span className="min-w-0">
            <span className="font-display block text-lg leading-none tracking-[0.18em] text-fg">
              {COMPANY.shortName}
            </span>
            <span className="mt-1 block truncate text-[10px] tracking-[0.28em] text-muted uppercase">
              Hair Industries
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.18em] text-muted uppercase transition-colors duration-150 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-xs tracking-[0.16em] text-fg-on-deep uppercase transition-colors duration-150 hover:bg-accent-hover active:scale-[0.96]"
          >
            Enquire
          </a>
        </nav>

        <button
          type="button"
          className="relative flex size-11 items-center justify-center rounded-md text-fg lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" strokeWidth={1.6} /> : <Menu className="size-5" strokeWidth={1.6} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-surface lg:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center text-sm tracking-[0.14em] text-fg uppercase"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
