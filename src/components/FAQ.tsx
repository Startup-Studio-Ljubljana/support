"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type FAQItem = {
	question: string;
	answer: React.ReactNode;
};

const faqs: FAQItem[] = [
	{
		question: "What can it do for my business?",
		answer: (
			<p>
				Answeres frequently asked questions, checks orders, handles returns,
				refunds, and exchanges.
			</p>
		),
	},
	{
		question: "Will this replace my team?",
		answer: (
			<p>
				No. It handles the repetitive 80% so your team can focus on high-value,
				complex interactions that build customer loyalty.
			</p>
		),
	},
	{
		question: "What if the caller asks something unusual?",
		answer: (
			<p>
				The AI escalates instantly to a live agent, passing full context: order
				details, transcript, and steps already taken.
			</p>
		),
	},
	{
		question: "What languages are supported?",
		answer: (
			<p>
				English, Slovenian, Crotian, German, Italian, Polish, Czech, Slovak,
				Hungarian, Romanian.
			</p>
		),
	},
	{
		question: "Does it integrate with our current tools?",
		answer: (
			<p>
				We support Shopify, WooCommerce, Magento, BigCommerce, plus Zendesk,
				Gorgias, Freshdesk, Intercom, Shippo, AfterShip, and more.
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
		<div className="flex flex-col lg:flex-row w-full px-6 py-8 lg:py-12 --hp-faq max-w-[76rem] mx-auto">
			<div className="lg:w-1/3 flex flex-col justify-start">
				<h3 className="heading-3 font-semibold text-gray-900 mb-6">
					AI agent FAQs
				</h3>
				<p className="text-gray-600 lg:text-lg leading-relaxed">
					Find answers to common questions about AI for customer service
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
