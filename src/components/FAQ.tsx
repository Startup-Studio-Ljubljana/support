"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: "How many languages does Bauscribe support?",
    answer: <p>On Bauscribe, you can translate content into 280+ languages.</p>,
  },
  {
    question: "What file formats can I translate on Bauscribe?",
    answer: (
      <p>
        Bauscribe supports brochures in IDML format and uploading terminology in
        XLSX or CSV
      </p>
    ),
  },
  {
    question: "What are the benefits of using Bauscribe over other solutions?",
    answer: (
      <p>
        Bauscribe translation engine is trained and optimized for translating
        construction brochures.
      </p>
    ),
  },
  {
    question: "Why can you translate documents faster with Bauscribe?",
    answer: (
      <p>
        Bauscribe parallelizes translation jobs to deliver results in minutes
        instead of hours.
      </p>
    ),
  },
];

function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t py-6 border-gray-300 cursor-pointer">
      <button
        type="button"
        className="flex w-full justify-between text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-xl font-semibold text-gray-800">
          {item.question}
        </span>
        <span className="ml-4">{open ? <ChevronUp /> : <ChevronDown />}</span>
      </button>
      {open && (
        <div className="mt-4 text-gray-600 text-base leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <div className="flex flex-col lg:flex-row w-full px-6 py-10 lg:py-12 --hp-faq max-w-[76rem] mx-auto">
      <div className="lg:w-1/3 flex flex-col justify-start">
        <h2 className="heading-2 mb-4 md:mb-6 max-md:text-center">Frequently Asked Questions</h2>
        <p className="text-gray-600 lg:text-lg leading-relaxed max-md:text-center">
          Find answers to common questions about Bauscribe.
        </p>
      </div>
      <div className="hidden lg:block w-12" />
      <div className="lg:w-2/3 mt-8 lg:mt-0">
        {faqs.map((item) => (
          <AccordionItem key={item.question} item={item} />
        ))}
      </div>
    </div>
  );
}
