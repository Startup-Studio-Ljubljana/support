import { AlarmClockCheck, ChartNoAxesCombined, FileCheck, TrendingDown } from "lucide-react";
import { LandingCard, LandingCardContent, LandingCardSubtitle, LandingCardTitle } from "./LandingCard";

interface ImprovementsSectionsProps {
	className?: string;
}

export default function ImprovementsSections({ className }: ImprovementsSectionsProps) {
	return (
  <LandingCard>
    <LandingCardContent>
      <LandingCardTitle className="max-md:mb-4">
        Are your translations taking too long?
      </LandingCardTitle>
      <LandingCardSubtitle className="hidden md:block">
        Our customers are reporting:
      </LandingCardSubtitle>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
        <li className="bg-primary-50 rounded-lg p-4 flex flex-col items-start gap-4">
          <div className="flex gap-4">
            <ChartNoAxesCombined className="size-8 text-primary-500" />
            <h4 className="text-2xl md:text-3xl font-semibold">Faster</h4>
          </div>
          <div className="text-5xl md:text-7xl font-semibold px-3">
            10<span className="text-4xl md:text-5xl font-semibold">X</span>
          </div>
          <span className="text-lg px-2">
            Translation consistency
            <br />
            increase
          </span>
        </li>
        <li className="bg-primary-50 rounded-lg p-4 flex flex-col items-start gap-4">
          <div className="flex gap-4">
            <TrendingDown className="size-8 text-primary-500" />
            <h4 className="text-2xl md:text-3xl font-semibold">Costs</h4>
          </div>
          <div className="text-5xl md:text-7xl font-semibold px-3">
            80
            <span className="text-4xl md:text-5xl font-semibold">%</span>
          </div>
          <span className="text-lg px-2">Reduction in translation costs</span>
        </li>
        <li className="bg-primary-50 rounded-lg p-4 flex flex-col items-start gap-4">
          <div className="flex gap-3">
            <FileCheck className="size-8 text-primary-500" />
            <h4 className="text-2xl md:text-3xl font-semibold">Consistent</h4>
          </div>
          <div className="text-5xl md:text-7xl font-semibold px-3">
            100
            <span className="text-4xl md:text-5xl font-semibold">%</span>
          </div>
          <span className="text-lg px-2">
            Translation consistency
            <br />
            increase
          </span>
        </li>
        <li className="bg-primary-50 rounded-lg p-4 flex flex-col items-start gap-4">
          <div className="flex gap-4">
            <AlarmClockCheck className="size-8 text-primary-500" />
            <h4 className="text-2xl md:text-3xl font-semibold">Reliable</h4>
          </div>
          <div className="text-5xl md:text-7xl font-semibold px-3">
            100
            <span className="text-4xl md:text-5xl font-semibold">%</span>
          </div>
          <span className="text-lg px-2">Translations are ready on time</span>
        </li>
      </ul>
    </LandingCardContent>
  </LandingCard>
);
}