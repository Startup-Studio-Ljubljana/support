import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
	title: "Unpicked",
	description: "Industrial brochure translation platform built for industrial inDesign brochures",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				{children}
				<Toaster />
			</body>
		</html>
	);
}
