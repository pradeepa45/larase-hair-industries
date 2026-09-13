import { useState } from "react";
import { Download, Share2 } from "lucide-react";

const PNG = "/brand/larase-lockup.png";
const SVG = "/brand/larase-lockup.svg";
const KIT = "/brand/larase-brand-kit.zip";

export function LogoActions() {
  const [note, setNote] = useState<string | null>(null);

  async function share() {
    const url = new URL(PNG, window.location.origin).href;
    try {
      const res = await fetch(PNG);
      const blob = await res.blob();
      const file = new File([blob], "larase-logo.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "LARASE HAIR INDUSTRIES",
          text: "LARASE brand mark",
        });
        return;
      }
      if (navigator.share) {
        await navigator.share({ title: "LARASE HAIR INDUSTRIES", url, text: "LARASE brand mark" });
        return;
      }
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setNote("Link copied");
      window.setTimeout(() => setNote(null), 2200);
    } catch {
      window.open(PNG, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div className="mt-5">
      <p className="text-xs tracking-[0.2em] text-muted-on-deep uppercase">Brand mark</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={PNG}
          download="larase-logo.png"
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-fg-on-deep/8 px-3.5 text-xs tracking-[0.12em] text-fg-on-deep uppercase ring-1 ring-fg-on-deep/15 transition-colors duration-150 hover:bg-fg-on-deep/14"
        >
          <Download className="size-3.5" strokeWidth={1.7} />
          PNG
        </a>
        <a
          href={SVG}
          download="larase-logo.svg"
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-fg-on-deep/8 px-3.5 text-xs tracking-[0.12em] text-fg-on-deep uppercase ring-1 ring-fg-on-deep/15 transition-colors duration-150 hover:bg-fg-on-deep/14"
        >
          <Download className="size-3.5" strokeWidth={1.7} />
          SVG
        </a>
        <a
          href={KIT}
          download="larase-brand-kit.zip"
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-fg-on-deep/8 px-3.5 text-xs tracking-[0.12em] text-fg-on-deep uppercase ring-1 ring-fg-on-deep/15 transition-colors duration-150 hover:bg-fg-on-deep/14"
        >
          <Download className="size-3.5" strokeWidth={1.7} />
          Kit
        </a>
        <button
          type="button"
          onClick={() => void share()}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent px-3.5 text-xs tracking-[0.12em] text-fg-on-deep uppercase transition-colors duration-150 hover:bg-accent-hover active:scale-[0.96]"
        >
          <Share2 className="size-3.5" strokeWidth={1.7} />
          Share
        </button>
      </div>
      {note ? <p className="mt-2 text-xs text-muted-on-deep">{note}</p> : null}
    </div>
  );
}
