import { cn } from "@/lib/utils";

export function LandingCard({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col md:gap-16 gap-8 md:py-10 md:px-10 px-6 py-8 items-stretch rounded-xl bg-white border border-neutral-light-500 md:flex-row", className)}>
      {children}
    </div>
  );
}

export function LandingCardTitle({ children, className }: { children: React.ReactNode, className?: string }) {
  return <h2 className={cn("heading-2", className)}>{children}</h2>;
}

export function LandingCardSubtitle({ children, className }: { children: React.ReactNode, className?: string }) {
  return <h3 className={cn("text-3xl md:text-2xl font-semibold", className)}>{children}</h3>;
}

export function LandingCardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:gap-8 w-full md:flex-1 md:basis-0 gap-3">
      {children}
    </div>
  );
}
