import { cn } from "@/lib/utils";

export function BrandMark({ className, title = "LARASE" }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      role="img"
      aria-label={title}
    >
      <circle cx="16" cy="16" r="16" fill="currentColor" className="text-accent" />
      <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="1.15" className="text-fg-on-deep" />
      <path fill="currentColor" className="text-fg-on-deep" d="M11 8h5.2v10.4H23v5.2H11z" />
    </svg>
  );
}
