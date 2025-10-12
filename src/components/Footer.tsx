import { siteConfig } from "@/config";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 pt-0 lg:pt-16 relative">
      <div className="w-2/3 mx-auto">
        <div className="text-center space-y-4 lg:w-2/3 mx-auto">
          <h2 className="heading-3 hidden lg:block text-white z-20">
            Onboarding to {siteConfig.companyName} will be the{" "}
            <span className="text-primary-500">easiest </span>decision you ever
            make
          </h2>
        </div>
      </div>
      <div className="container max-w-[76rem] mx-auto py-20 flex flex-col px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-small font-semibold text-primary-300">Learn</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  className="text-regular text-neutral-50 hover:underline"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-regular text-neutral-50 hover:underline"
                  href="/contact"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-regular text-neutral-50 hover:underline"
                  href="/contact"
                >
                  How it works
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-small font-semibold text-primary-300">
              Resources
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  className="text-regular text-neutral-50 hover:underline"
                  href="/"
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/contact"
                  className="intercom-chat-button text-regular text-neutral-50 hover:underline"
                >
                  Chat with us
                </a>
              </li>
              <li>
                <a
                  className="text-regular text-neutral-50 hover:underline"
                  href="/contact"
                >
                  Log in
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-small font-semibold text-primary-300">Legal</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  className="text-regular text-neutral-50 hover:underline"
                  href="/"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-regular text-neutral-50 hover:underline"
                  href="/"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-xs text-neutral-50 mt-6 pb-8 text-center">
        Copyright {siteConfig.companyName}, 2025. All rights reserved
      </p>
    </footer>
  );
}
