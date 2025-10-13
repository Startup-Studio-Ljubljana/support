interface HeroSectionProps {
  className: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <div className={`block-list ${className}`}>
      <div className="h-20 lg:h-36"></div>

      <section className="text-center max-w-7xl mx-auto px-4">
        <div className="flex flex-col">
          <div>
            <h1 className="text-[#0e1017] font-semibold md:font-medium text-4xl md:text-[80px] leading-none tracking-[-0.84px] md:tracking-tight mb-8 md:mb-12">
              Translation platform built&nbsp;for{' '}
              <span className="text-primary-500">industrial</span>&nbsp;brochures
            </h1>
            <p className="text-[#555869] text-lg md:text-2xl leading-snug tracking-[-0.32px] md:tracking-[-0.5px]">
              Where&nbsp;every&nbsp;term,&nbsp;spec, and&nbsp;standard&nbsp;matters.
            </p>
          </div>
          <div className="mt-8 md:mt-16">
            <a
              href="/contact"
              className="group relative inline-block rounded-full no-underline text-base md:text-lg font-medium"
            >
              <span className="absolute inset-0 rounded-full bg-black transition-all duration-300 group-hover:bg-[#2e303d]" />
              <span className="relative z-10 block text-white px-8 py-3">
                Request demo
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:px-12 pt-20">
          <img src="/assets/demo.png" alt="Demo" />
        </div>
      </section>
    </div>
  );
}
