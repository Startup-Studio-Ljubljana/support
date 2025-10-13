"use client";

import {
  PaymentFrequency,
  PricingCard,
} from "@/components/pricing/PricingCard";
import { PricingHeader } from "@/components/pricing/PricingHeader";
import { TIERS } from "@/config/index";
import { useState } from "react";

const PAYMENT_FREQUENCIES = [PaymentFrequency.Monthly, PaymentFrequency.Yearly];

export const Pricing = () => {
  const [paymentFrequency, setPaymentFrequency] = useState(
    PaymentFrequency.Yearly,
  );

  return (
    <section className="relative flex flex-col items-center gap-10 py-10">
      <PricingHeader
        frequencies={PAYMENT_FREQUENCIES}
        selectedFrequency={paymentFrequency}
        onFrequencyChange={setPaymentFrequency}
      />

      {/* Pricing Cards */}
      <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {TIERS.map((tier) => (
          <PricingCard
            key={tier.id}
            tier={tier}
            paymentFrequency={paymentFrequency}
          />
        ))}
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 w-full h-full -z-[1] overflow-hidden blur-[160px]">
        <div
          className="absolute top-1/4 left-[5%] z-[1] opacity-25 bg-[#004ad4] rounded-[100vw] w-[45vw] h-[12vw]"
          style={{
            transform:
              "translate3d(0,0,0) scale3d(2,2,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg); transform-style: preserve-3d;",
          }}
        ></div>
        <div
          className="absolute top-[35%] left-[77%] z-[2] opacity-15 bg-[#3100be] rounded-[100vw] w-[18vw] h-[18vw]"
          style={{
            transform:
              "translate3d(0,0,0) scale3d(1.5,1.5,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg); transform-style: preserve-3d;",
          }}
        ></div>
        <div
          className="absolute top-[60%] left-[15%] z-[3] opacity-40 bg-[#ff2baa] rounded-[100vw] w-[65vw] h-[4vw]"
          style={{
            transform:
              "translate3d(0,0,0) scale3d(0.8,0.8,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg); transform-style: preserve-3d;",
          }}
        ></div>
      </div>
    </section>
  );
};
