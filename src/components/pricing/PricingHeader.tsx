import { Tab } from "@/components/ui/tab";
import { PaymentFrequency } from "./PricingCard";

interface PricingHeaderProps {
  frequencies: PaymentFrequency[];
  selectedFrequency: PaymentFrequency;
  onFrequencyChange: (frequency: PaymentFrequency) => void;
}

export const PricingHeader = ({
  frequencies,
  selectedFrequency,
  onFrequencyChange,
}: PricingHeaderProps) => (
  <div className="space-y-7 text-center">
    <div className="mx-auto flex w-fit rounded-full bg-[#F3F4F6] p-1 dark:bg-[#222]">
      {frequencies.map((freq) => (
        <Tab
          key={freq}
          text={freq}
          selected={selectedFrequency === freq}
          setSelected={onFrequencyChange}
          discount={freq === "yearly"}
        />
      ))}
    </div>
  </div>
);
