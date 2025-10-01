import { config } from "@/config";
import React from "react";

interface FeaturesSectionProps {
	className: string;
}

const CheckmarkIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		className="min-w-7 min-h-7 lg:min-w-8 lg:min-h-8 fill-green-500 mt-1"
	>
		<path d="M10.0999 15.6799C9.8399 15.6799 9.5899 15.5799 9.3899 15.3899L7.3799 13.3799C6.9899 12.9899 6.9899 12.3599 7.3799 11.9699C7.7699 11.5799 8.3999 11.5799 8.7899 11.9699L10.1199 13.2999L15.2299 8.59994C15.6399 8.22994 16.2699 8.24994 16.6399 8.65994C17.0099 9.06994 16.9899 9.69994 16.5799 10.0699L10.7699 15.4199C10.5799 15.5999 10.3299 15.6799 10.0899 15.6799H10.0999Z"></path>
		<path d="M12 22.04C6.49 22.04 2 17.54 2 12C2 6.45996 6.49 1.95996 12 1.95996C17.51 1.95996 22 6.45996 22 12C22 17.54 17.51 22.04 12 22.04ZM12 3.95996C7.59 3.95996 4 7.56996 4 12C4 16.43 7.59 20.04 12 20.04C16.41 20.04 20 16.43 20 12C20 7.56996 16.41 3.95996 12 3.95996Z"></path>
	</svg>
);

export default function FeaturesSection({ className }: FeaturesSectionProps) {
	const features = [
		{
			title: "24/7 coverage",
			description: "Nights, weekends, holidays — we never clock out.",
		},
		{
			title: "Lower costs",
			description: "Replace expensive call centers with AI",
		},
		{
			title: "Faster resolutions, happier customers",
			description:
				"AI answers instantly, follows exact policies, and never leaves callers waiting",
		},
		{
			title: "Seamless integration",
			description:
				"integrates with your store, helpdesk, logistics in hours, not months.",
		},
	];

	return (
		<section className={`bg-[#f5f5f5] text-white ${className}`}>
			<div className="container max-w-[76rem] mx-auto px-4 py-12 lg:py-28">
				<div className="grid lg:grid-cols-12 items-center gap-12 lg:gap-16">
					<div className="md:col-span-5">
						<h2 className="heading-2 text-black text-center lg:text-left">
							Why companies{" "}
							<br className="hidden xl:block" />
							choose <span className="text-primary-500">{config.companyName}</span>
						</h2>
					</div>
					<div className="px-2 lg:px-0 md:col-span-7">
						<ul className="space-y-6 lg:space-y-10">
							{features.map(({ title, description }) => (
								<li key={title} className="flex items-start gap-2 lg:gap-4">
									<CheckmarkIcon />
									<div>
										<h3 className="heading-5 text-black">{title}</h3>
										<p className="text-neutral-500 mt-2 text-large">
											{description}
										</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
