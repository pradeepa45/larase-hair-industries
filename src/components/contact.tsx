import { useState, type FormEvent } from "react";
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { COMPANY, mapsEmbedSrc, whatsappUrl } from "@/lib/site";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const message = String(data.get("message") || "").trim();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Interest: ${interest}`,
      "",
      message,
    ].join("\n");
    const mailto = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      `Enquiry from ${name || "website"} — ${interest || "hair"}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.28em] text-accent uppercase">Visit & enquire</p>
          <h2 className="mt-3 text-4xl text-fg md:text-5xl">Get in touch</h2>
          <p className="mt-4 text-muted">
            Factory and registered office in Bharatpet, Guntur. Call, write, or send an enquiry for wholesale
            and export lots.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <article className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-8">
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                    <MapPin className="size-4" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.16em] text-muted uppercase">Registered office</p>
                    <a
                      href={COMPANY.address.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block leading-relaxed hover:text-accent"
                    >
                      {COMPANY.address.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                    <Phone className="size-4" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.16em] text-muted uppercase">Phone</p>
                    {COMPANY.phones.map((p) => (
                      <a key={p.tel} href={`tel:${p.tel}`} className="mt-1 block hover:text-accent">
                        {p.display}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                    <Mail className="size-4" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.16em] text-muted uppercase">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="mt-1 block break-all hover:text-accent">
                      {COMPANY.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                    <MessageCircle className="size-4" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.16em] text-muted uppercase">WhatsApp</p>
                    <a
                      href={whatsappUrl("Hello Larase, I would like to enquire about hair lots.")}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block hover:text-accent"
                    >
                      Chat on WhatsApp — {COMPANY.phones[0].display}
                    </a>
                  </div>
                </li>
              </ul>
            </article>

            <form
              onSubmit={onSubmit}
              className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-8"
            >
              <h3 className="font-display text-2xl">Send an enquiry</h3>
              <div className="mt-5 grid gap-4">
                <label className="block">
                  <span className="text-xs tracking-[0.14em] text-muted uppercase">Name</span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="mt-1.5 h-11 w-full rounded-md bg-bg px-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs tracking-[0.14em] text-muted uppercase">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="mt-1.5 h-11 w-full rounded-md bg-bg px-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none focus:ring-2 focus:ring-accent/40"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs tracking-[0.14em] text-muted uppercase">Phone</span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-1.5 h-11 w-full rounded-md bg-bg px-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none focus:ring-2 focus:ring-accent/40"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs tracking-[0.14em] text-muted uppercase">Interest</span>
                  <select
                    name="interest"
                    className="mt-1.5 h-11 w-full rounded-md bg-bg px-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none focus:ring-2 focus:ring-accent/40"
                    defaultValue="Wavy hair"
                  >
                    <option>Wavy hair</option>
                    <option>Curly hair</option>
                    <option>Straight hair</option>
                    <option>Blonde hair</option>
                    <option>Bulk / raw lots</option>
                    <option>Export order</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs tracking-[0.14em] text-muted uppercase">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="mt-1.5 w-full rounded-md bg-bg px-3 py-2.5 text-sm text-fg shadow-[var(--shadow-border)] outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </label>
                <button
                  type="submit"
                  className="h-11 rounded-full bg-accent text-sm tracking-[0.14em] text-fg-on-deep uppercase transition-colors duration-150 hover:bg-accent-hover active:scale-[0.96]"
                >
                  {sent ? "Opening mail…" : "Submit enquiry"}
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <a
              href={COMPANY.address.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-xl shadow-[var(--shadow-border)]"
            >
              <img
                src="/maps/location.jpg"
                alt="Map pin for Dhanu Nilayam, Bharatpet 9th Lane, Guntur"
                className="aspect-4/3 w-full object-cover"
              />
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-surface/95 px-3 py-2 text-xs tracking-[0.12em] text-fg uppercase shadow-[var(--shadow-border)]">
                <MapPin className="size-3.5 text-pin" />
                Google Maps pin
                <ExternalLink className="size-3.5 text-muted" />
              </span>
            </a>

            <div className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
              <div className="flex items-center justify-between px-5 py-3">
                <p className="text-xs tracking-[0.16em] text-muted uppercase">Map with pin</p>
                <a
                  href={COMPANY.address.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 text-xs tracking-[0.12em] text-accent uppercase"
                >
                  Open in Maps
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
              <iframe
                title="LARASE HAIR INDUSTRIES location map"
                src={mapsEmbedSrc()}
                className="h-80 w-full border-0 md:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
