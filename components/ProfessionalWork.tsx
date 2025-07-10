import React from "react";
import CaseStudyPanel from "./CaseStudyPanel";

const professionalProjects = [
	{
		company: "Acme Fintech",
		title: "Lead Frontend Engineer",
		dates: "2022–2024",
		overview:
			"Developed and maintained a high-traffic fintech dashboard serving 50k+ daily users, enabling real-time portfolio management and analytics.",
		bullets: [
			"Context: Enterprise-grade dashboard for wealth management; handled sensitive financial data and complex user permissions.",
			"Contribution: Led UI architecture, implemented advanced state management with Redux Toolkit, and optimized rendering for large data tables.",
			"Tech used: React, TypeScript, Redux, Node.js, REST APIs, Cypress, CI/CD (GitHub Actions).",
			"Outcome: Reduced dashboard load time by 40%, improved Lighthouse accessibility score to 98, and increased user adoption by 30%.",
		],
		caseStudy: {
			problem:
				"Acme needed a secure, scalable internal portal to manage millions of financial records and provide real-time analytics for 50k+ users.",
			role: "Led UI architecture, integrated REST APIs, implemented advanced state management, and ensured accessibility and security best practices.",
			tech: "React, Next.js, TypeScript, Node.js, PostgreSQL, Cypress, CI/CD (GitHub Actions)",
			impact:
				"Reduced dashboard load time by 40%, improved accessibility score to 98, and increased user adoption by 30%.",
			image: "/images/acme-dashboard.png",
		},
	},
	{
		company: "Web3 Labs",
		title: "Senior Web3 Developer",
		dates: "2021–2022",
		overview:
			"Built decentralized application interfaces for NFT minting and trading, supporting thousands of concurrent users.",
		bullets: [
			"Context: Public-facing NFT marketplace with on-chain data and wallet integrations.",
			"Contribution: Designed reusable React components, integrated Ethers.js for blockchain interactions, and led code reviews.",
			"Tech used: React, TypeScript, Ethers.js, Next.js, Styled Components, Vercel.",
			"Outcome: Enabled seamless wallet onboarding, improved transaction success rate by 25%, and supported $10M+ in NFT trades.",
		],
		caseStudy: {
			problem:
				"Needed a robust NFT marketplace UI to handle thousands of concurrent users, on-chain data, and seamless wallet integration.",
			role: "Designed reusable React components, integrated Ethers.js for blockchain, and led code reviews for security and performance.",
			tech: "React, Next.js, TypeScript, Ethers.js, Styled Components, Vercel",
			impact:
				"Improved transaction success rate by 25%, enabled $10M+ in NFT trades, and streamlined wallet onboarding.",
			image: "/images/web3labs-marketplace.png",
		},
	},
];

const ProfessionalWork = () => (
	<section id="professional-work" className="mb-16 md:mb-24 lg:mb-36">
		<div className="mb-8">
			<h2 className="text-2xl font-bold text-slate-200 mb-2">
				Professional Web Applications
			</h2>
			<p className="text-slate-400 text-base">
				Selected professional and Web3 projects delivered for clients and
				employers.
			</p>
		</div>
		<ul className="space-y-10">
			{professionalProjects.map((proj, idx) => (
				<li
					key={idx}
					className="bg-slate-800/60 rounded-lg p-6 border border-slate-700"
				>
					<h3 className="text-lg font-semibold text-teal-300">
						{proj.company}{" "}
						<span className="text-slate-400 font-normal">
							– {proj.title} ({proj.dates})
						</span>
					</h3>
					<p className="mt-2 text-slate-300">{proj.overview}</p>
					<ul className="mt-3 list-disc list-inside text-slate-400 space-y-1 text-sm">
						{proj.bullets.map((b, i) => (
							<li key={i}>{b}</li>
						))}
					</ul>
					<CaseStudyPanel caseStudy={proj.caseStudy} />
				</li>
			))}
		</ul>
	</section>
);

export default ProfessionalWork;