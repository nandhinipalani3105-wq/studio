import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const Section = ({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full scroll-mt-16 py-16 md:py-24", // scroll-mt-16 for header offset (h-16)
        "animate-fade-in-up",
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
};
