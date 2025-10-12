"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const styles = `
.top-nav {
    position: sticky;
    top: 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 100%;
    max-width: 80rem;
    flex-direction: column;
    padding: .875rem 1rem
}

@media (min-width: 640px) {
    .top-nav {
        padding-left:1.5rem;
        padding-right: 1.5rem
    }
}

@media (min-width: 1024px) {
    .top-nav {
        padding-left:2rem;
        padding-right: 2rem
    }
}

@media (min-width: 1280px) {
    .top-nav {
        top:1.5rem
    }
}

.top-nav {
    background: linear-gradient(131deg,rgba(0,0,0,.5) 80.62%,rgba(0,0,0,.5) 80.62%);
    -webkit-backdrop-filter: blur(25px);
    backdrop-filter: blur(25px);
    z-index: 100;
    transition: top .15s ease-in,padding .15s ease-in
}

@media (min-width: 1024px) {
    .top-nav {
        border:1px solid #505050
    }
}

@media (min-width: 1280px) {
    .top-nav {
        border-radius:.625rem
    }
}

.top-nav.light-variant {
    background: linear-gradient(311deg,rgba(224,224,224,.4) 19.38%,rgba(241,241,241,.4) 86.76%);
    border: none!important
}

.top-nav.light-variant a:not(.btn-link) {
    color: #171717
}

.top-nav.light-variant a:not(.btn-link):hover {
    color: #3d3d3d
}

@media (min-width: 1024px) {
    .top-nav.light-variant {
        border:1px solid rgba(0,0,0,.2)
    }
}
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{styles}</style>
      <nav className="top-nav light-variant">
        <div className="flex items-center justify-between gap-[5rem]">
          <a className="shrink-0" href="/">
            <img className="h-7 w-auto" src="assets/logo.svg" alt="logo" />
          </a>
          <ul className="lg:flex justify-evenly sm:gap-x-4 lg:gap-x-8 hidden items-center grow">
            <li className="relative group pointer-events-none">
              <a
                href="/"
                className="hover:text-white text-secondary-light font-medium transition flex items-center"
              >
                Product
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              <ul className="absolute hidden group-hover:block bg-white rounded-3xl shadow-xl top-full p-4 min-w-[300px] sm:min-w-[360px] z-50 transition-opacity duration-300 ease-in-out">
                <li>
                  <a
                    href="/"
                    className="flex items-start p-4 hover:bg-gray-50 rounded-2xl transition duration-150 ease-in-out cursor-pointer"
                  >
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-16 h-16 bg-white shadow-md rounded-xl flex items-center justify-center">
                        <img src="/" alt="WooCommerce" className="w-10" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-base">
                        Woocommerce Chatbot
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        AI assistant that sells and builds long-term loyalty{" "}
                        <span className="ml-1 text-yellow-500">💰</span>
                      </p>
                    </div>
                  </a>
                </li>

                <li className="mt-2">
                  <a
                    href="/"
                    className="flex items-start p-4 hover:bg-gray-50 rounded-2xl transition duration-150 ease-in-out cursor-pointer"
                  >
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-16 h-16 bg-white shadow-md rounded-xl flex items-center justify-center">
                        <img src="/" alt="Wordpress" className="w-10 h-10" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-base">
                        WordPress Chatbot
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        Convert visitors into loyal customers 24/7{" "}
                        <span className="ml-1 text-red-500">📈</span>
                      </p>
                    </div>
                  </a>
                </li>

                <li className="mt-2">
                  <a
                    href="/"
                    className="flex items-start p-4 hover:bg-gray-50 rounded-2xl transition duration-150 ease-in-out cursor-pointer"
                  >
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-16 h-16 bg-white shadow-md rounded-xl flex items-center justify-center">
                        <img src="/" alt="Facebook" className="w-10 h-10" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-base">
                        Facebook Chatbot
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        Turn every FB comment and DM into a sale{" "}
                        <span className="ml-1 text-pink-400">🛍️</span>
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="flex">
              <a
                href="/"
                className="text-secondary-light font-medium group transition duration-300 group"
              >
                Blog
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
              </a>
            </li>
            <li className="flex">
              <a
                href="/about"
                className="text-secondary-light font-medium group transition duration-300 group"
              >
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
              </a>
            </li>
            <li className="flex">
              <a
                href="/pricing"
                className="text-secondary-light font-medium group transition duration-300 group"
              >
                Pricing
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
              </a>
            </li>
          </ul>
          <ul className="lg:flex hidden items-center gap-6 ">
            <a
              href="/"
              className="text-gray-300 rounded-full no-underline font-medium hover:text-primary-500"
            >
              Log in
            </a>

            <div className="h-5 w-px bg-gray-300"></div>

            <a href="/contact">
              <Button className="relative z-10 block text-white px-3 py-1 rounded-full">
                Get started
              </Button>
            </a>
          </ul>
          <button
            type="button"
            className="bg-white px-2 py-1 rounded-lg lg:hidden ms-auto"
            id="dropdownButton"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div
          id="dropdown"
          className="z-50 nav-dropdown overflow-y-auto px-5 lg:hidden"
          style={{ maxHeight: isOpen ? "none" : "0px" }}
        >
          <ul className="flex flex-col gap-y-5 topnav-list pt-8 text-lg">
            <li className="relative">
              <details className="group">
                <summary className="cursor-pointer font-medium text-black list-none flex items-center justify-between">
                  Product
                  <i className="fa-solid fa-chevron-down text-xs ml-2 group-open:rotate-180 transition-transform duration-300"></i>
                </summary>
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <a href="/" className="text-white hover:text-black">
                      WordPress Chatbot
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white hover:text-black">
                      Woocommerce Chatbot
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white hover:text-black">
                      Facebook Chatbot
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a
                href="/"
                className="font-medium flex text-white hover:text-black"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="font-medium flex text-white hover:text-black"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="text-secondary-light font-medium group transition duration-300 group"
              >
                Pricing
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-2 mt-5 pb-3">
            <a
              href="/contact"
              className="group relative inline-block rounded-full no-underline text-base mx-auto md:text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              <span className="absolute inset-0 rounded-full bg-black transition-all duration-300 group-hover:bg-[#2e303d]" />
              <span className="relative z-10 block text-white px-8 py-3">
                Request demo
              </span>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
