"use client";

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LogoSlider from "@/components/LogoSlider";

export default function Home() {
  const timeline: any[] = [];

  return (
    <div className="min-h-[100dvh]">
      <main className="flex flex-col relative">
        <Navbar />

        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14 dark:from-indigo-950/10">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96 dark:bg-gray-800/30 dark:shadow-indigo-400/10 dark:ring-white/5"
          />
          <div className="mx-auto max-w-7xl px-6 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto dark:text-white xl:mt-24">
                On a mission to help industrial companies{" "}
                <span className="text-primary-500">grow with AI</span>
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 dark:text-gray-400">
                  We make AI simple and practical so you can automate the boring
                  stuff, work smarter, and focus on what actually moves your
                  business forward.
                </p>
              </div>
              <img
                alt="team"
                src="/assets/team.png"
                className="mt-10 aspect-[5/6] w-full rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 max-w-[80%] mx-auto"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32 dark:from-gray-900" />
        </div>

        <section className="container max-w-[76rem] mx-auto max-md:px-4 py-14 lg:mb-16">
          <h3 className="text-xl md:text-xl font-medium text-center text-gray-600 mb-4 md:mb-6">
            Trusted by teams at:
          </h3>
          <LogoSlider small />
        </section>

        <Banner className="lg:mb-16 " />
        <Footer />
      </main>
    </div>
  );
}
