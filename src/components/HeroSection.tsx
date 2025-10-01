interface HeroSectionProps {
	className: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
    return (
					<div className={`block-list ${className}`}>
						<div className="h-24 lg:h-32"></div>

						<section className="text-center max-w-7xl mx-auto px-4">
							<div>
								<h1 className="text-[#0e1017] font-medium text-[46px] md:text-[80px] leading-none tracking-[-0.84px] md:tracking-tight mb-8 md:mb-8">
									AI for <span className="text-primary-500">delightful</span>
									<br />
									customer service
								</h1>
								<p className="text-[#555869] text-lg md:text-2xl leading-snug tracking-[-0.32px] md:tracking-[-0.5px]">
									AI takes care of your customers,
									you&nbsp;can&nbsp;focus&nbsp;on&nbsp;growth.
								</p>
							</div>
							<div className="mt-8 md:mt-12">
								<a
									href="#contact"
									className="group relative inline-block rounded-full no-underline text-base md:text-lg font-medium"
								>
									<span className="absolute inset-0 rounded-full bg-black transition-all duration-300 group-hover:bg-[#2e303d]" />
									<span className="relative z-10 block text-white px-8 py-3">
										Request demo
									</span>
								</a>
							</div>
						</section>
					</div>
				);
}
