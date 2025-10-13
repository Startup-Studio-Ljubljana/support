import { useState } from "react";
import { LandingCard } from "./LandingCard";
import { BookType, FileSpreadsheet, Rocket, UserSearch } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function FeaturesSection({ className }: { className?: string }) {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      icon: FileSpreadsheet,
      title: "Brochures",
      subtitle: "Upload InDesign file",
      description: "Upload your documents and let AI translate them.",
      image: "/assets/demo2.png",
    },
    {
      icon: BookType,
      title: "Terminology",
      subtitle: "Accurate & consistent",
      description: "AI learns your terminology and uses it consistently.",
      image: "/assets/demo4.png",
    },
    {
      icon: Rocket,
      title: "Translation",
      subtitle: "Done in minutes",
      description: "No more waiting for hours or days.",
      image: "/assets/demo3.png",
    },
    {
      icon: UserSearch,
      title: "Review",
      subtitle: "Easy & efficient",
      description: "Inuitive inteface for easy review and approval.",
      image: "/assets/demo3.png",
    },
  ];

  return (
    <LandingCard className={cn("!p-0 overflow-hidden flex !gap-0", className)}>
      <ul className="grid grid-cols-2 md:flex md:flex-col">
        {features.map((feature, index) => (
          <li
            key={feature.title}
            className={cn(
              "py-3 px-4 md:py-6 md:px-8 cursor-pointer border-r-2 border-b-2 flex items-center gap-4",
              activeFeature === index && "bg-primary-500 text-white flex-1",
              "md:last:border-b-0",
            )}
            onClick={() => setActiveFeature(index)}
            onKeyDown={(e) => e.key === "Enter" && setActiveFeature(index)}
          >
            <feature.icon className="size-6" />
            <h4 className="md:text-lg font-semibold">{feature.title}</h4>
          </li>
        ))}
      </ul>
      <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex flex-col gap-2 md:gap-4 md:min-w-1/3">
          <h3 className="text-xl md:text-3xl font-semibold">
            {features[activeFeature].subtitle}
          </h3>
          <p className="text-lg text-muted-foreground">{features[activeFeature].description}</p>
          <a href="/contact" className="mt-auto hidden md:block">
            <Button className="px-6 py-5 text-lg w-fit rounded-full">
              Get Started
            </Button>
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <img
            src={features[activeFeature].image}
            alt={features[activeFeature].title}
            className="rounded-2xl"
          />
        </div>
        <a href="/contact" className="md:hidden mx-auto">
          <Button className="px-6 py-5 text-lg my-4 w-fit rounded-full">
            Get Started
          </Button>
        </a>
      </div>
    </LandingCard>
  );
}
