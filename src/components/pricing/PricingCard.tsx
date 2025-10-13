import { PricingTier } from "@/config/index";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

export enum PaymentFrequency {
  Monthly = "monthly",
  Yearly = "yearly",
}

interface PricingCardProps {
  tier: PricingTier;
  paymentFrequency: PaymentFrequency;
}

export const PricingCard = ({ tier, paymentFrequency }: PricingCardProps) => {
  const price = tier.price[paymentFrequency];
  const isHighlighted = tier.highlighted;
  const isPopular = tier.popular;

  return (
    <div
      className={cn(
        "relative flex flex-col gap-8 overflow-hidden rounded-2xl border p-6 shadow",
        isHighlighted
          ? "bg-foreground text-background"
          : "bg-background text-foreground",
        isPopular && "outline outline-[rgba(120,119,198)]",
      )}
    >
      {/* Background Decoration */}
      {isHighlighted && <HighlightedBackground />}
      {isPopular && <PopularBackground />}

      {/* Card Header */}
      <h2 className="flex items-center justify-between gap-3 text-xl font-medium capitalize">
        {tier.name}
        {isPopular && (
          <Badge className="mt-1 bg-primary-500 px-1 py-0 text-white text-[0.95rem]">
            Most Popular
          </Badge>
        )}
      </h2>

      {/* Price Section */}
      <div className="relative h-12">
        {typeof price === "number" ? (
          <>
            <div>
              <span className="text-4xl font-medium">{price}€</span>
              <span className="font-medium text-lg mx-1">/</span>
              <span className="-mt-2 font-medium">month</span>
            </div>
            {paymentFrequency === "yearly" && (
              <p className="text-sm font-medium text-gray-500 mt-1">
                Billed {price * 12}€ annually
              </p>
            )}
          </>
        ) : (
          <>
            <h1 className="text-4xl font-medium">{price}</h1>
            {paymentFrequency === "yearly" && (
              <p className="text-sm font-medium text-gray-200 mt-1">
                Billed annually
              </p>
            )}
          </>
        )}
      </div>

      {/* Features */}
      <div className="flex-1 space-y-2 mt-2 z-10">
        <h3 className="text-sm font-medium mb-4">{tier.description}</h3>

        <h4 className="font-semibold mb-2">Features:</h4>

        <ul className="space-y-2">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className={cn(
                "flex items-center gap-2 text-sm font-medium",
                isHighlighted ? "text-background" : "text-foreground/60",
              )}
            >
              <Check strokeWidth={1} size={16} className="text-green-500" />
              {feature}
            </li>
          ))}
          {tier.notAvailable.map((feature) => (
            <li
              key={feature}
              className={cn(
                "flex items-center gap-2 text-sm font-medium text-gray-500",
              )}
            >
              <X strokeWidth={1} size={16} className="text-red-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <a href="/contact" className="z-10">
        <Button
          variant="outline"
          className={cn(
            "h-fit w-full rounded-lg cursor-pointer",
            isHighlighted && "bg-accent text-foreground hover:bg-accent/95",
          )}
        >
          {tier.cta}
          <ArrowRight className="size-4" />
        </Button>
      </a>
    </div>
  );
};

// Highlighted Background Component
const HighlightedBackground = () => (
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:45px_45px] opacity-100 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:opacity-30" />
);

// Popular Background Component
const PopularBackground = () => (
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
);
