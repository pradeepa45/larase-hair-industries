import { BrandMark } from "@/components/brand-mark";
import { LogoActions } from "@/components/logo-actions";
import { COMPANY, NAV } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-bg-deep text-fg-on-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark className="size-10" />
            <div>
              <p className="font-display text-2xl tracking-[0.16em]">{COMPANY.shortName}</p>
              <p className="mt-1 text-xs tracking-[0.2em] text-muted-on-deep uppercase">Hair Industries Pvt. Ltd.</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-on-deep">
            100% natural Indian human hair from Guntur, Andhra Pradesh — graded, packed, and shipped for
            wholesale and export.
          </p>
          <LogoActions />
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-muted-on-deep uppercase">Navigate</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-fg-on-deep/90 hover:text-fg-on-deep">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-muted-on-deep uppercase">Statutory</p>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-on-deep">GSTIN</dt>
              <dd className="font-medium">{COMPANY.gst}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-on-deep">IEC</dt>
              <dd className="font-medium">{COMPANY.iec}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-on-deep">CIN</dt>
              <dd className="text-right font-medium">{COMPANY.cin}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="border-t border-border-deep">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-on-deep md:px-8">
          © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
