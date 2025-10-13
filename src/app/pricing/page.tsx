"use client";

import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LogoSlider from "@/components/LogoSlider";
import { Pricing } from "@/components/pricing/Pricing";

export default function Home() {
  return (
    <div className="min-h-[100dvh]">
      <main className="flex flex-col relative">
        <Navbar />

        <section className="container max-w-[76rem] mx-auto max-md:px-4 mt-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mt-4 md:mt-12 mb-4 md:mb-14">
            Find the right plan for&nbsp;you
          </h2>
          <h3 className="text-xl md:text-xl font-medium text-center text-gray-600 mb-4 md:mb-6">
            Trusted by teams at:
          </h3>
          <LogoSlider small />
        </section>

        <section className="container max-w-[76rem] mx-auto max-md:px-4 md:mb-18 md:mt-2">
          <Pricing />
        </section>

        <FAQ />
        <Banner className="lg:mb-16" />
        <Footer />
      </main>
    </div>
  );
}
