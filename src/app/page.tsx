"use client";

import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import GraphicSection from "@/components/GraphicSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<div className="min-h-screen">
			<main className="flex flex-col relative">
				<Navbar />
				<HeroSection className="max-md:mb-12" />
				<GraphicSection className="max-md:px-6 my-8 lg:my-16" />
				<FeaturesSection className="my-8 lg:my-16" />
				<FAQ />
				<Banner className="mb-0 lg:mb-16" />
				<Footer />
			</main>
		</div>
	);
}
