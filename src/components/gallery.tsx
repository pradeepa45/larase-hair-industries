import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FILTERS, PRODUCTS, type HairCategory } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ProductGallery() {
  const [filter, setFilter] = useState<"all" | HairCategory>("all");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, items.length]);

  return (
    <section id="products" className="scroll-mt-20 bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.28em] text-accent uppercase">The collection</p>
          <h2 className="mt-3 text-4xl text-fg md:text-5xl">Premium bundles & wefts</h2>
          <p className="mt-4 text-muted">
            Natural Indian human hair in wavy, curly, straight, and blonde — bulk lots and machine wefts for
            wholesale and export.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Product filters">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => {
                setFilter(f.id);
                setActive(null);
              }}
              className={cn(
                "min-h-11 rounded-full px-5 text-xs tracking-[0.16em] uppercase transition-colors duration-150",
                filter === f.id
                  ? "bg-fg text-bg"
                  : "bg-surface text-muted shadow-[var(--shadow-border)] hover:text-fg",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(i)}
              className="group relative aspect-3/4 overflow-hidden rounded-lg bg-surface-2 text-left shadow-[var(--shadow-border)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <span className="absolute inset-x-0 bottom-0 bg-bg-deep/78 px-3 py-3">
                <span className="font-display block text-lg text-fg-on-deep">{item.title}</span>
                <span className="text-[10px] tracking-[0.18em] text-muted-on-deep uppercase">{item.category}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && items[active] ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg-deep/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={items[active].title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-surface/10 text-fg-on-deep"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            className="absolute left-3 flex size-11 items-center justify-center rounded-full bg-surface/10 text-fg-on-deep md:left-6"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length));
            }}
          >
            <ChevronLeft className="size-5" />
          </button>
          <figure
            className="max-h-[88vh] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[active].src}
              alt={items[active].alt}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center font-display text-xl text-fg-on-deep">
              {items[active].title}
            </figcaption>
          </figure>
          <button
            type="button"
            className="absolute right-3 flex size-11 items-center justify-center rounded-full bg-surface/10 text-fg-on-deep md:right-6"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? i : (i + 1) % items.length));
            }}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
