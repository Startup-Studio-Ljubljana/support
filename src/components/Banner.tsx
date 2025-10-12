interface BannerProps {
  className: string;
}

export default function Banner({ className }: BannerProps) {
  return (
    <section
      className={`text-black text-center md:my-12 pt-12 pb-12 bg-[#F2F3F7] rounded-2xl w-full max-w-[76rem] mx-auto ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-semibold text-4xl sm:text-5xl leading-tight sm:leading-snug tracking-tight text-gray-900 mb-8">
          Discover why <span className="text-primary-500">industrial</span>&nbsp;companies 
		  <br />
		  choose&nbsp;Bauscribe
        </h3>

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
    </section>
  );
}
