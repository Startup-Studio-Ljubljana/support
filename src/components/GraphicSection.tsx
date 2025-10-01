interface GraphicSectionProps {
	className: string;
}

export default function GraphicSection({ className }: GraphicSectionProps) {
	return (
		<section className={`container max-w-[76rem] mx-auto ${className}`}>
			<div
				className="bg-primary-100 rounded-2xl border border-primary-400 
              flex flex-col lg:flex-row items-center gap-6 lg:gap-12 px-6 p-10 pb-0 lg:p-12 lg:pb-0"
			>
				<div className="order-1 lg:order-2 w-full lg:w-1/2 text-center lg:text-left">
					<h2 className="text-neutral-950 font-semibold text-[36px] leading-[46px] md:text-[54px] md:leading-[60px] mb-4">
						Every missed call
						<br /> costs you money.
					</h2>
					<p className="text-neutral-800 text-[18px] leading-[30px] font-normal">
						Never lose a customer to voicemail						
						<br />
						every call answered, every issue
						handled.
					</p>
				</div>

				<div className="order-2 lg:order-1 w-80 lg:w-1/2 flex justify-center">
					<img
						className="w-full h-full object-cover rounded-3xl"
						src="/assets/missed-call-cost-money.svg"
						alt="Missed call cost money"
					/>
				</div>
			</div>
		</section>
	);
}
