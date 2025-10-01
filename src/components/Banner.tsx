import { useState } from "react";
import { Input } from "./ui/input";
import { toast } from "sonner";

interface BannerProps {
	className: string;
}

function isValidEmail(email: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Banner({ className }: BannerProps) {
	const [email, setEmail] = useState("");
	const [showError, setShowError] = useState(false);

	const emailIsValid = isValidEmail(email);

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value);
		setShowError(false);
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (!emailIsValid) {
			setShowError(true);
			return;
		}

		fetch("/api/waitlist", {
			method: "POST",
			body: JSON.stringify({ email }),
		});
		toast.success("We will get back to you soon!");
		setEmail("");
		setShowError(false);
	}

	return (
		<section
			id="contact"
			className={`text-black text-center my-12 pt-16 pb-12 bg-[#F2F3F7] rounded-2xl w-full max-w-[76rem] mx-auto ${className}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h3 className="font-medium text-4xl sm:text-5xl leading-tight sm:leading-snug tracking-tight text-gray-900 mb-8 md:mb-12">
					Ready to get started?
				</h3>
				<form
					className="flex flex-col md:flex-row items-center md:items-start justify-center w-full gap-8"
					onSubmit={handleSubmit}
					noValidate
				>
					<div className="flex flex-col items-start mb-2 w-full md:w-auto">
						<Input
							type="email"
							placeholder="Enter your email"
							className={`w-[90%] md:w-[24rem] mx-auto py-4.5 px-6 text-lg bg-white text-black rounded-lg border-2 ${showError ? "border-red-500" : "border-gray-300"} focus:border-black focus:ring-2 focus:ring-black transition-all duration-200`}
							value={email}
							onChange={handleInputChange}
							aria-invalid={showError}
							aria-describedby={showError ? "email-error" : undefined}
						/>
						{showError && (
							<span
								id="email-error"
								className="text-red-600 text-sm mb-2 block max-w-md"
							>
								Please enter a valid email address.
							</span>
						)}
					</div>
					<button
						type="submit"
						className="w-fit group relative inline-block rounded-full no-underline text-base md:text-lg font-medium disabled:opacity-60"
					>
						<span className="absolute inset-0 rounded-full bg-black transition-all duration-300 group-hover:bg-[#2e303d]" />
						<span className="relative z-10 block text-white px-8 py-3 md:px-5 md:py-1.5">
							Contact sales
						</span>
					</button>
				</form>
			</div>
		</section>
	);
}
