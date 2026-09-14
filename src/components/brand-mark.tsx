import { cn } from "@/lib/utils";

export function BrandMark({ className, title = "LARASE" }: { className?: string; title?: string }) {
  return (
    <img
      src="/brand/larase-mark.png"
      alt={title}
      width={56}
      height={56}
      style={{ outline: "none" }}
      className={cn(
        "shrink-0 rounded-full object-cover !outline-none",
        className,
        "size-12 md:size-14",
      )}
    />
  );
}
