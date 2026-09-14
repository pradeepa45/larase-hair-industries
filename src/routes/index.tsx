import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, FileCheck2, Globe2, Landmark, Scale } from "lucide-react";
import { ContactSection } from "@/components/contact";
import { ProductGallery } from "@/components/gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { COMPANY, PROMISES, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-bg">
      <SiteHeader />
      <Hero />
      <About />
      <Quality />
      <ProductGallery />
      <Credentials />
      <ContactSection />
      <SiteFooter />
      <a
        href={whatsappUrl("Hello Larase, I would like to enquire about hair lots.")}
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 bottom-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-fg px-4 text-sm text-bg shadow-[var(--shadow-border)] transition-transform duration-150 hover:bg-accent hover:text-fg-on-deep active:scale-[0.96] md:right-6 border-1 border-accent"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-dvh overflow-hidden bg-bg-deep text-fg-on-deep">
      <div className="lg:grid lg:min-h-dvh lg:grid-cols-2">
        <div className="relative z-10 flex min-h-dvh flex-col justify-end px-5 pt-28 pb-16 md:justify-center md:px-10 lg:px-16 xl:px-24">
          <p className="text-xs tracking-[0.32em] text-muted-on-deep uppercase">
            Guntur · Andhra Pradesh · Est. {COMPANY.established}
          </p>
          <h1 className="mt-5 max-w-xl font-display text-5xl leading-[0.95] text-fg-on-deep md:text-7xl">
            {COMPANY.tagline}
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-on-deep md:text-lg">
            {COMPANY.legalName} manufactures and exports 100% natural human hair — wavy, curly, straight, and
            blonde — graded for salons, wholesalers, and overseas buyers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm tracking-[0.14em] text-fg-on-deep uppercase transition-colors duration-150 hover:bg-accent-hover active:scale-[0.96]"
            >
              View the collection
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-full bg-fg-on-deep/10 px-6 text-sm tracking-[0.14em] text-fg-on-deep uppercase ring-1 ring-fg-on-deep/20 transition-colors duration-150 hover:bg-fg-on-deep/16 active:scale-[0.96]"
            >
              Talk to us
            </a>
          </div>
          <a
            href="#about"
            className="mt-16 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-muted-on-deep uppercase"
          >
            <ArrowDown className="size-4" />
            The house
          </a>
        </div>
        <div className="absolute inset-0 lg:relative lg:min-h-dvh">
          <img
            src="/images/hero.jpg"
            alt="Cascade of natural Indian human hair on linen"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-bg-deep via-bg-deep/60 to-bg-deep/25 lg:hidden" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-bg py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="overflow-hidden rounded-xl shadow-[var(--shadow-border)]">
          <img
            src="/images/atelier.jpg"
            alt="Hair lots prepared for grading on a workshop table"
            className="aspect-4/3 w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs tracking-[0.28em] text-accent uppercase">The house</p>
          <h2 className="mt-3 text-4xl text-fg md:text-5xl">An Indian hair house, built for export.</h2>
          <p className="mt-5 text-muted">
            Incorporated in June 2024 and registered with RoC Vijayawada, Larase works from Dhanu Nilayam in
            Bharatpet, Guntur — a corridor long known for temple hair collection, grading, and shipment.
          </p>
          <p className="mt-4 text-muted">
            We supply 100% natural human hair as bulk, single-drawn and double-drawn wefts, in natural shades
            and blonde. Lots are packed with commercial invoices carrying GSTIN, IEC, and CIN.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
              <dt className="text-xs tracking-[0.14em] text-muted uppercase">Registered</dt>
              <dd className="mt-1 font-display text-xl">June 2024</dd>
            </div>
            <div className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
              <dt className="text-xs tracking-[0.14em] text-muted uppercase">Base</dt>
              <dd className="mt-1 font-display text-xl">Guntur, AP</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Quality() {
  return (
    <section id="quality" className="scroll-mt-20 bg-surface-2/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.28em] text-accent uppercase">The promise</p>
          <h2 className="mt-3 text-4xl text-fg md:text-5xl">What we will not compromise.</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {PROMISES.map((item) => (
            <article key={item.title} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-8">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-xl shadow-[var(--shadow-border)]">
          <img
            src="/images/weft-macro.jpg"
            alt="Macro of a double-drawn human hair weft"
            className="aspect-21/9 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  const cards = [
    {
      icon: Landmark,
      label: "GSTIN",
      value: COMPANY.gst,
      note: "Andhra Pradesh regular taxpayer",
    },
    {
      icon: Globe2,
      label: "IEC — Import Export Code",
      value: COMPANY.iec,
      note: "DGFT code, aligned to PAN",
    },
    {
      icon: FileCheck2,
      label: "CIN",
      value: COMPANY.cin,
      note: COMPANY.roc,
    },
    {
      icon: Scale,
      label: "HS classification",
      value: COMPANY.hsCodes.map((h) => h.code).join("  ·  "),
      note: "Unworked and worked human hair",
    },
  ];

  return (
    <section id="credentials" className="scroll-mt-20 bg-bg-deep py-20 text-fg-on-deep md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-xs tracking-[0.28em] text-muted-on-deep uppercase">Trade credentials</p>
        <h2 className="mt-3 max-w-xl text-4xl md:text-5xl">Paperwork that clears a port.</h2>
        <p className="mt-4 max-w-xl text-muted-on-deep">
          GST, IEC, and company identification appear on invoices and packing lists so buyers, banks, and
          customs can verify the house.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.label}
              className="rounded-xl border border-border-deep bg-bg-deep p-6 md:p-8"
            >
              <card.icon className="size-5 text-accent" strokeWidth={1.5} />
              <p className="mt-4 text-xs tracking-[0.16em] text-muted-on-deep uppercase">{card.label}</p>
              <p className="mt-2 font-display text-xl tracking-wide md:text-2xl">{card.value}</p>
              <p className="mt-2 text-sm text-muted-on-deep">{card.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
