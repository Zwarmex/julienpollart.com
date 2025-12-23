"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// --- Types ---
type TranslationValue = string | { [key: string]: TranslationValue };

type LanguageContextType = {
	language: string;
	toggleLanguage: () => void;
	t: (key: string) => string;
};

// --- Traductions ---
export const translations: Record<string, TranslationValue> = {
	en: {
		// Navigation
		home: "Home",
		about: "About",
		skills: "Skills",
		projects: "Projects",
		experience: "Experience",
		contact: "Contact",

		// Hero (NEW)
		function: "Full Stack Dev & Cybersecurity",
		heroTitleLine1: "Engineering",
		heroTitleHighlight: "Secure & Scalable",
		heroTitleLine2: "Web Experiences",
		heroDesc:
			"I am Julien Pollart. A Full Stack Developer who codes with a security-first mindset. I build modern applications that are as robust as they are beautiful.",
		startProject: "Start a Project",
		downloadCv: "Download CV",
		powering: "Powering products with",

		// About
		aboutTitle: "About Me",
		aboutSubtitle: "Bridging the gap between code and security",
		aboutParagraph1:
			"I'm a passionate Full Stack Developer with a strong focus on web technologies and a growing expertise in cybersecurity. With a background in both front-end and back-end development, I strive to create seamless, user-friendly applications that solve real-world problems.",
		yearsLearning: "Years Learning",
		projectsBuilt: "Projects Built",

		// Skills
		skillsTitle: "Technical Arsenal",

		// Projects
		projectsTitle: "Featured Projects",
		projectsSubtitle: "A selection of my recent work",
		viewProject: "View Project",
		viewCode: "View Code",

		// Project Descriptions
		picoTitle: "PicoCTF 2023",
		picoDesc:
			"Cybersecurity competition focusing on cryptography, web exploitation, and forensics.",
		stockTitle: "Stock4me",
		stockDesc:
			"AI-powered mobile application for inventory management (Startup).",
		supportTitle: "MisterGenius Support",
		supportDesc: "Technical support and hardware repair field technician.",

		// Experience
		expTitle: "My Journey",
		expSubtitle: "Professional experience and education",

		// Certifications
		certsTitle: "Certifications & Achievements",

		// Contact
		contactTitle: "Get In Touch",
		contactSubtitle: "Have a project in mind or want to discuss security?",
		nameLabel: "Name",
		emailLabel: "Email",
		messageLabel: "Message",
		sendBtn: "Send Message",
	},
	fr: {
		// Navigation
		home: "Accueil",
		about: "À propos",
		skills: "Compétences",
		projects: "Projets",
		experience: "Parcours",
		contact: "Contact",

		// Hero (NEW)
		function: "Développeur Full Stack & Cybersécurité",
		heroTitleLine1: "Ingénierie Web",
		heroTitleHighlight: "Sécurisée & Évolutive",
		heroTitleLine2: "", // Laisser vide si non nécessaire en FR ou adapter
		heroDesc:
			"Je suis Julien Pollart. Développeur Full Stack avec une approche 'Security-First'. Je conçois des applications modernes aussi robustes qu'élégantes.",
		startProject: "Lancer un Projet",
		downloadCv: "Télécharger CV",
		powering: "Propulsé par",

		// About
		aboutTitle: "À propos de moi",
		aboutSubtitle: "Le pont entre le code et la sécurité",
		aboutParagraph1:
			"Je suis un développeur Full Stack passionné avec un fort accent sur les technologies web et une expertise croissante en cybersécurité. Avec une expérience front-end et back-end, je m'efforce de créer des applications fluides qui résolvent des problèmes réels.",
		yearsLearning: "Années d'apprentissage",
		projectsBuilt: "Projets réalisés",

		// Skills
		skillsTitle: "Arsenal Technique",

		// Projects
		projectsTitle: "Projets Récents",
		projectsSubtitle: "Une sélection de mes travaux",
		viewProject: "Voir le Projet",
		viewCode: "Voir le Code",

		// Project Descriptions
		picoTitle: "PicoCTF 2023",
		picoDesc:
			"Compétition de cybersécurité axée sur la cryptographie, l'exploitation web et l'investigation.",
		stockTitle: "Stock4me",
		stockDesc:
			"Application mobile de gestion de stock alimentée par l'IA (Startup).",
		supportTitle: "Support MisterGenius",
		supportDesc:
			"Technicien de terrain pour le support technique et la réparation matérielle.",

		// Experience
		expTitle: "Mon Parcours",
		expSubtitle: "Expérience professionnelle et formation",

		// Certifications
		certsTitle: "Certifications & Réalisations",

		// Contact
		contactTitle: "Me Contacter",
		contactSubtitle: "Un projet en tête ou envie de discuter sécurité ?",
		nameLabel: "Nom",
		emailLabel: "Email",
		messageLabel: "Message",
		sendBtn: "Envoyer",
	},
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

export const LanguageProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [language, setLanguage] = useState("en");

	useEffect(() => {
		const isFrench = navigator.language?.startsWith("fr");
		// eslint-disable-next-line react-hooks/set-state-in-effect
		if (isFrench) setLanguage("fr");
	}, []);

	const toggleLanguage = () => {
		setLanguage((prevLang) => (prevLang === "en" ? "fr" : "en"));
	};

	const t = (key: string): string => {
		const keys = key.split(".");
		let value = translations[language];
		if (!value) value = translations["en"];

		for (const k of keys) {
			if (value && typeof value === "object" && k in value) {
				value = value[k];
			} else {
				return key;
			}
		}
		return typeof value === "string" ? value : key;
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
