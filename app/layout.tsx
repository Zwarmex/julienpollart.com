import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Julien Pollart | Full Stack Developer & Cybersecurity Enthusiast",
	description:
		"Portfolio de Julien Pollart. Expert en développement React/Node.js et sécurité offensive (Pentest, CTF).",
	keywords: [
		"Developpeur Web",
		"Cybersécurité",
		"React",
		"Next.js",
		"Pentest",
		"Belgique",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
