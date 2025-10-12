export const PAYMENT_FREQUENCIES = ["monthly", "yearly"] as const;

export interface PricingTier {
  name: string;
  id: string;
  price: Record<string, number | string>;
  description: string;
  features: string[];
  notAvailable: string[];
  cta: string;
  highlighted?: boolean;
  popular?: boolean;
}

export const TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: {
      monthly: 120,
      yearly: 100,
    },
    description: "Remove manual tasks and collaborate more easily.",
    features: ["600,000 words", "Translation memories", "Email support"],
    notAvailable: ["Glossary", "AI Fine-tuning"],
    cta: "Get started",
  },
  {
    id: "basic",
    name: "Basic",
    price: {
      monthly: 300,
      yearly: 250,
    },
    description: "Speed up translation, improve consistency and accuracy.",
    features: [
      "1,800,000 words",
      "Translation memories",
      "Glossary",
      "AI Fine-tuning",
      "Email support",
    ],
    notAvailable: [],
    cta: "Get started",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: {
      monthly: 500,
      yearly: 600,
    },
    description:
      "Manage high-volume translation projects while maintaining quality.",
    features: [
      "Unlimited words",
      "Translation memories",
      "Glossary",
      "AI Fine-tuning",
      "Priority Slack support",
    ],
    notAvailable: [],
    cta: "Get started",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    description: "For large teams processing large volumes of content.",
    features: [
      "Everything in Premium",
      "Custom feature development",
      "Direct API access",
      "24 / 7 customer support",
    ],
    notAvailable: [],
    cta: "Contact Us",
    highlighted: true,
  },
];