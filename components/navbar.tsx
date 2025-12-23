"use client";

import { useLanguage } from "@/context/language-context"; // Ajuste le chemin
import { Languages, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
	const { theme, setTheme } = useTheme();
	const { toggleLanguage, language, t } = useLanguage();
	const [mounted, setMounted] = useState(false);

	// Evite les erreurs d'hydratation pour les icônes
	// eslint-disable-next-line react-hooks/set-state-in-effect
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 mx-auto">
			<div className=" container mx-auto flex h-16 items-center justify-between">
				{/* Logo / Nom */}
				<div className="font-bold text-xl tracking-tighter hover:text-primary transition-colors cursor-pointer">
					&lt;Zwarmex /&gt;
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex gap-6 items-center text-sm font-medium">
					<a
						href="#home"
						className="hover:text-primary transition-colors">
						{t("home")}
					</a>
					<a
						href="#about"
						className="hover:text-primary transition-colors">
						{t("about")}
					</a>
					<a
						href="#projects"
						className="hover:text-primary transition-colors">
						{t("projects")}
					</a>
					<a
						href="#contact"
						className="hover:text-primary transition-colors">
						{t("contact")}
					</a>
				</div>

				{/* Actions (Toggles) */}
				<div className="flex items-center gap-2">
					{/* Langue Toggle */}
					<button
						onClick={toggleLanguage}
						className="p-2 rounded-md hover:bg-accent transition-colors flex items-center gap-2 border border-transparent hover:border-border"
						aria-label="Toggle Language">
						<Languages size={20} />
						<span className="text-sm font-bold uppercase w-4">
							{language}
						</span>
					</button>

					{/* Theme Toggle */}
					<button
						onClick={() =>
							setTheme(theme === "dark" ? "light" : "dark")
						}
						className="p-2 rounded-md hover:bg-accent transition-colors border border-transparent hover:border-border"
						aria-label="Toggle Theme">
						{theme === "dark" ? (
							<Sun size={20} className="text-yellow-400" />
						) : (
							<Moon size={20} className="text-slate-700" />
						)}
					</button>

					{/* Mobile Menu Button (visuel seulement pour l'instant) */}
					<button className="md:hidden p-2 rounded-md hover:bg-accent">
						<Menu size={24} />
					</button>
				</div>
			</div>
		</nav>
	);
}
