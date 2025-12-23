"use client";

import Navbar from "@/components/navbar";
import { useLanguage } from "@/context/language-context";
import { motion, Variants } from "framer-motion";
import {
	ArrowRight,
	Briefcase,
	Code2,
	Cpu,
	Database,
	Download,
	ExternalLink,
	Globe,
	GraduationCap,
	Mail,
	Send,
	ShieldCheck,
	Terminal,
} from "lucide-react";
import { useEffect } from "react";

// --- Configuration des animations ---
const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const staggerContainer: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

export default function Home() {
	const { t } = useLanguage();

	useEffect(() => {
		console.log(
			"%c HACKER DETECTED %c \n Si tu regardes ça, on devrait travailler ensemble. Contacte-moi !",
			"background: red; color: white; font-weight: bold; padding: 4px;",
			"color: #00ff00; background: #000;"
		);
	}, []);

	return (
		<main className="min-h-screen w-full bg-background overflow-hidden selection:bg-primary/30">
			<Navbar />

			{/* --- HERO SECTION (NEW DESIGN) --- */}
			<section
				id="home"
				className="relative pt-24 pb-32 md:pt-36 md:pb-48 overflow-hidden">
				{/* 1. Background Grid & Glows */}
				<div className="absolute inset-0 -z-10 h-full w-full bg-background">
					{/* Grille technique */}
					<div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
					{/* Radial Mask pour fondre la grille sur les bords */}
					<div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
				</div>

				<div className="container mx-auto px-4 md:px-6 relative z-10">
					<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
						{/* 2. Left Column: Content */}
						<motion.div
							initial="hidden"
							animate="visible"
							variants={staggerContainer}
							className="flex-1 text-center lg:text-left space-y-8">
							{/* Badge "Available" */}
							<motion.div
								variants={fadeInUp}
								className="flex justify-center lg:justify-start">
								<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary backdrop-blur-md">
									<span className="relative flex h-2 w-2">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
										<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
									</span>
									{t("function")}
								</div>
							</motion.div>

							{/* Titres */}
							<motion.div
								variants={fadeInUp}
								className="space-y-4">
								<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
									{t("heroTitleLine1")} <br />
									<span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-pink-400">
										{t("heroTitleHighlight")}
									</span>{" "}
									<br />
									{t("heroTitleLine2")}
								</h1>
								<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
									{t("heroDesc")}
								</p>
							</motion.div>

							{/* Boutons */}
							<motion.div
								variants={fadeInUp}
								className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
								<button className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:bg-primary/90">
									{t("startProject")}
									<ArrowRight className="ml-2 h-4 w-4" />
								</button>
								<button className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background/50 px-8 text-sm font-bold transition-all hover:bg-accent hover:text-accent-foreground">
									<Download className="mr-2 h-4 w-4" />
									{t("downloadCv")}
								</button>
							</motion.div>

							{/* Tech Stack Mini-strip */}
							<motion.div
								variants={fadeInUp}
								className="pt-8 flex flex-col items-center lg:items-start gap-4">
								<span className="text-xs text-muted-foreground uppercase tracking-widest">
									{t("powering")}
								</span>
								<div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
									<Code2 size={24} />
									<Database size={24} />
									<ShieldCheck size={24} />
									<Cpu size={24} />
								</div>
							</motion.div>
						</motion.div>

						{/* 3. Right Column: Visual (The DevSecOps Terminal) */}
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="flex-1 w-full max-w-lg lg:max-w-none perspective-1000">
							{/* Glassmorphism Card Wrapper */}
							<div className="relative rounded-xl border border-white/10 bg-gray-900/95 shadow-2xl backdrop-blur-xl overflow-hidden transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-500 ease-out">
								{/* VS Code Style Header */}
								<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
									<div className="flex gap-2">
										<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
										<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
										<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
									</div>
									<div className="ml-4 text-xs text-muted-foreground font-mono flex items-center gap-2">
										<Code2 size={12} /> server.ts —
										julien@dev
									</div>
								</div>

								{/* Terminal Content: Dev Workflow focus */}
								<div className="p-6 font-mono text-sm space-y-4 min-h-[300px] text-gray-300">
									{/* Step 1: Git Commit */}
									<div>
										<div className="flex gap-2">
											<span className="text-pink-500">
												➜
											</span>
											<span className="text-blue-400">
												~/norde.be
											</span>
											<span className="text-yellow-400">
												git commit -m &quot;feat: secure
												auth implementation&quot;
											</span>
										</div>
										<div className="text-gray-500 pl-4 mt-1">
											[main 8f3a2c] feat: secure auth
											implementation
											<br />2 files changed, 45
											insertions(+), 12 deletions(-)
										</div>
									</div>

									{/* Step 2: Build & Security Check */}
									<div>
										<div className="flex gap-2">
											<span className="text-pink-500">
												➜
											</span>
											<span className="text-blue-400">
												~/norde.be
											</span>
											<span className="text-yellow-400">
												npm run build
											</span>
										</div>
										<div className="pl-4 mt-1">
											<span className="text-gray-400">
												Building Next.js application...
											</span>
											<br />
											<span className="text-green-400">
												✓ Compiled successfully
											</span>
											<br />
											<span className="text-blue-400">
												ℹ Running security audit...
											</span>
											<br />
											<span className="text-green-400 font-bold">
												✓ 0 vulnerabilities found
											</span>
										</div>
									</div>

									{/* Step 3: Active cursor */}
									<div className="flex gap-2 animate-pulse">
										<span className="text-pink-500">➜</span>
										<span className="text-blue-400">
											~/norde.be
										</span>
										<span className="border-r-2 border-gray-400 pr-1">
											_
										</span>
									</div>
								</div>

								{/* Background Glow Effect inside card (Blue/Violet for Dev vibe) */}
								<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
							</div>

							{/* Decorative element behind */}
							<div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-xl blur-xl opacity-50"></div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* --- SKILLS SECTION --- */}
			<section className="py-12 border-y border-border/40 bg-accent/5 backdrop-blur-sm">
				<div className="container mx-auto">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
						{[
							{ name: "React / Next.js", icon: Globe },
							{ name: "Node.js", icon: ServerIcon },
							{ name: "TypeScript", icon: Code2 },
							{ name: "Python / Scripting", icon: Terminal },
							{ name: "Cybersecurity", icon: ShieldCheck },
							{ name: "Databases", icon: Database },
						].map((skill, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors cursor-default group">
								<div className="p-3 rounded-full bg-background border border-border group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 shadow-sm">
									<skill.icon
										size={28}
										className="text-muted-foreground group-hover:text-primary transition-colors"
									/>
								</div>
								<span className="font-semibold text-sm">
									{skill.name}
								</span>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* --- ABOUT SECTION --- */}
			<section id="about" className="container mx-auto py-24 md:py-32">
				<div className="flex flex-col md:flex-row gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="flex-1 space-y-6">
						<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
							{t("aboutTitle")}
							<span className="block text-primary text-lg md:text-xl font-normal mt-2 tracking-normal">
								{t("aboutSubtitle")}
							</span>
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							{t("aboutParagraph1")}
						</p>

						<div className="grid grid-cols-2 gap-4 pt-4">
							<div className="p-4 rounded-lg bg-card border border-border/50">
								<h4 className="text-2xl font-bold text-primary">
									3+
								</h4>
								<p className="text-sm text-muted-foreground">
									{t("yearsLearning")}
								</p>
							</div>
							<div className="p-4 rounded-lg bg-card border border-border/50">
								<h4 className="text-2xl font-bold text-primary">
									10+
								</h4>
								<p className="text-sm text-muted-foreground">
									{t("projectsBuilt")}
								</p>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50, rotate: 10 }}
						whileInView={{ opacity: 1, x: 0, rotate: 3 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="flex-1 flex justify-center">
						<div className="relative w-72 h-72 md:w-96 md:h-96 bg-linear-to-tr from-primary to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
							<div className="absolute inset-1 bg-background rounded-[20px] flex items-center justify-center overflow-hidden">
								<Code2 size={100} className="text-primary/20" />
								<div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-position-[bottom_1px_center]" />
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* --- CERTIFICATIONS SECTION --- */}
			<section className="py-24 bg-accent/5 border-b border-border/40">
				<div className="container mx-auto">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUp}
						className="text-center mb-12">
						<h2 className="text-3xl font-bold">
							{t("certsTitle")}
						</h2>
					</motion.div>

					<div className="flex flex-wrap justify-center gap-6">
						<CertBadge
							name="CompTIA Security+"
							issuer="CompTIA"
							color="border-red-500/30 text-red-500"
						/>
						<CertBadge
							name="CEH (Practical)"
							issuer="EC-Council"
							color="border-green-500/30 text-green-500"
						/>
						<CertBadge
							name="Top 1% TryHackMe"
							issuer="TryHackMe"
							color="border-blue-500/30 text-blue-500"
						/>
						<CertBadge
							name="AWS Certified Dev"
							issuer="Amazon"
							color="border-yellow-500/30 text-yellow-500"
						/>
					</div>
				</div>
			</section>

			{/* --- PROJECTS SECTION --- */}
			<section id="projects" className="py-24 bg-accent/5">
				<div className="container mx-auto">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUp}
						className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							{t("projectsTitle")}
						</h2>
						<p className="text-muted-foreground">
							{t("projectsSubtitle")}
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<ProjectCard
							title={t("picoTitle")}
							desc={t("picoDesc")}
							tags={["Python", "Cryptography", "Forensics"]}
							icon={<ShieldCheck />}
							t={t}
						/>
						<ProjectCard
							title={t("stockTitle")}
							desc={t("stockDesc")}
							tags={["React Native", "Node.js", "AI"]}
							icon={<Cpu />}
							t={t}
						/>
						<ProjectCard
							title={t("supportTitle")}
							desc={t("supportDesc")}
							tags={["Hardware", "Troubleshooting", "Support"]}
							icon={<Terminal />}
							t={t}
						/>
					</div>
				</div>
			</section>

			{/* --- EXPERIENCE SECTION --- */}
			<section id="experience" className="container mx-auto py-24">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t("expTitle")}
					</h2>
					<p className="text-muted-foreground">{t("expSubtitle")}</p>
				</motion.div>

				<div className="relative border-l border-border/50 ml-4 space-y-12">
					<TimelineItem
						year="2023 - Present"
						title="Master in Cybersecurity"
						company="University / Self-Taught"
						desc="Advanced network security, ethical hacking, and system architecture."
						icon={<GraduationCap size={18} />}
					/>
					<TimelineItem
						year="2021 - 2023"
						title="Co-Founder & Developer"
						company="SAMJU Inc."
						desc="Developed norde.be application. Managed business strategy and full-stack development."
						icon={<Briefcase size={18} />}
					/>
					<TimelineItem
						year="2022"
						title="Internship"
						company="AXA Belgium"
						desc="IT support and project management assistance during digital transformation."
						icon={<Briefcase size={18} />}
					/>
				</div>
			</section>

			{/* --- CONTACT SECTION --- */}
			<section
				id="contact"
				className="py-24 border-t border-border/40 relative overflow-hidden">
				{/* Glow décoratif */}
				<div className="absolute top-0 right-0 w-125 h-125 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

				<div className="container mx-auto relative z-10">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}>
							<h2 className="text-4xl font-bold mb-6">
								{t("contactTitle")}
							</h2>
							<p className="text-xl text-muted-foreground mb-8">
								{t("contactSubtitle")}
							</p>

							<div className="space-y-4">
								<a
									href="mailto:julien@example.com"
									className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors group">
									<div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
										<Mail />
									</div>
									<div>
										<p className="text-sm text-muted-foreground">
											{t("emailLabel")}
										</p>
										<p className="font-semibold">
											julien.pollart@example.com
										</p>
									</div>
								</a>
							</div>
						</motion.div>

						<motion.form
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="space-y-4 p-6 rounded-2xl bg-card/50 backdrop-blur-md border border-border shadow-xl">
							<div className="space-y-2">
								<label className="text-sm font-medium">
									{t("nameLabel")}
								</label>
								<input
									type="text"
									className="w-full h-10 rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
								/>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-medium">
									{t("emailLabel")}
								</label>
								<input
									type="email"
									className="w-full h-10 rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
								/>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-medium">
									{t("messageLabel")}
								</label>
								<textarea className="w-full min-h-30 rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
							</div>
							<button className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
								{t("sendBtn")}{" "}
								<Send size={16} className="ml-2" />
							</button>
						</motion.form>
					</div>
				</div>
			</section>

			{/* --- FOOTER / PGP --- */}
			<footer className="py-8 border-t border-border bg-background text-center relative z-10">
				<div className="container flex flex-col items-center gap-6 mx-auto">
					{/* Le bloc PGP Hacker Style */}
					<div className="group relative">
						<a href="/public_key.asc" download>
							<div className="text-sm font-mono text-muted-foreground bg-accent/30 px-4 py-2 rounded border border-border/50 flex flex-col md:flex-row items-center gap-2 transition-all hover:border-primary/50 hover:bg-primary/5 cursor-pointer">
								<div className="flex items-center gap-2">
									<ShieldCheck
										size={14}
										className="text-primary"
									/>
									<span className="text-primary font-bold">
										PGP KEY ID:
									</span>
								</div>
								<span className="tracking-widest">
									7C6C EE5E 9EE9 D657
								</span>
							</div>

							{/* Tooltip au survol */}
							<p className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-2 rounded shadow-lg whitespace-nowrap">
								Télécharger la clé publique (.asc)
								<span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></span>
							</p>
						</a>
					</div>

					<div className="flex flex-col gap-2">
						<p className="text-xs text-muted-foreground">
							© {new Date().getFullYear()} Julien Pollart. Built
							with Next.js 14, Tailwind & Framer Motion.
						</p>
					</div>
				</div>
			</footer>
		</main>
	);
}

// --- SUB COMPONENTS ---

const ServerIcon = ({
	size,
	className,
}: {
	size?: number;
	className?: string;
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}>
		<rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
		<rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
		<line x1="6" x2="6.01" y1="6" y2="6" />
		<line x1="6" x2="6.01" y1="18" y2="18" />
	</svg>
);

interface ProjectCardProps {
	title: string;
	desc: string;
	tags: string[];
	icon: React.ReactNode;
	t: (key: string) => string;
}

function ProjectCard({
	title,
	desc,
	tags,
	icon,
	t,
}: Readonly<ProjectCardProps>) {
	return (
		<motion.div
			variants={fadeInUp}
			whileHover={{ y: -5 }}
			className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
			<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
				{icon}
			</div>
			<h3 className="mb-2 text-xl font-bold">{title}</h3>
			<p className="mb-4 text-sm text-muted-foreground line-clamp-2">
				{desc}
			</p>

			<div className="flex flex-wrap gap-2 mb-6">
				{tags.map((tag) => (
					<span
						key={tag}
						className="inline-flex items-center rounded-md border border-border bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
						{tag}
					</span>
				))}
			</div>

			<div className="flex gap-4 mt-auto">
				<button className="text-sm font-medium text-primary hover:underline inline-flex items-center">
					{t("viewProject")}{" "}
					<ExternalLink size={14} className="ml-1" />
				</button>
				<button className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center">
					{t("viewCode")} <Code2 size={14} className="ml-1" />
				</button>
			</div>
		</motion.div>
	);
}

interface TimelineItemProps {
	year: string;
	title: string;
	company: string;
	desc: string;
	icon: React.ReactNode;
}

function TimelineItem({ year, title, company, desc }: TimelineItemProps) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			className="relative pl-8">
			<div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />
			<span className="text-xs font-bold text-primary mb-1 block uppercase tracking-wider">
				{year}
			</span>
			<h3 className="text-lg font-bold">{title}</h3>
			<span className="text-sm font-medium text-muted-foreground mb-2 block">
				{company}
			</span>
			<p className="text-muted-foreground text-sm max-w-lg">{desc}</p>
		</motion.div>
	);
}

function CertBadge({
	name,
	issuer,
	color,
}: {
	name: string;
	issuer: string;
	color: string;
}) {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			className={`flex items-center gap-4 px-6 py-4 rounded-lg bg-background border ${color} shadow-sm cursor-default`}>
			<div className={`p-2 rounded-full bg-current opacity-10`}>
				<ShieldCheck size={24} className="opacity-100" />
			</div>
			<div className="text-left">
				<h4 className="font-bold text-foreground">{name}</h4>
				<p className="text-xs text-muted-foreground uppercase tracking-wider">
					{issuer}
				</p>
			</div>
		</motion.div>
	);
}
