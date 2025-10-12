"use client";

import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ImprovementsSections from "@/components/ImprovementsSections";
import LogoSlider from "@/components/LogoSlider";

export default function Home() {
  return (
    <div className="min-h-[100dvh]">
      <main className="flex flex-col relative">
        <Navbar />
        <HeroSection className="max-md:mb-12 mb-18" />

        <section className="container max-w-[76rem] mx-auto max-md:px-4 max-md:mb-16 mb-24 mt-6">
          <h2 className="text-xl md:text-3xl font-medium text-center text-gray-600 mb-4 md:mb-8">
            Trusted by{` `}
            <span className="hidden sm:inline">industrial companies</span>:
          </h2>
          <LogoSlider />
        </section>

        <section className="container max-w-[76rem] mx-auto max-md:px-4 max-md:mb-12 mb-18">
          <ImprovementsSections />
        </section>

        <section className="max-md:px-3 pt-12 max-md:pb-24 pb-32 bg-[#f0f1f4]">
          <h2 className="text-4xl md:text-6xl font-semibold text-center mb-16">
            Reinvent your global&nbsp;content
          </h2>
          <FeaturesSection className="max-w-[76rem] mx-auto" />
        </section>

        <FAQ />
        <Banner className="mb-0 lg:mb-16" />
        <Footer />
      </main>
    </div>
  );
}
