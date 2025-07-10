import React from "react";

const web3Projects = [
  {
    name: "NFT Marketplace",
    tech: "Solidity, Hardhat, Ethers.js, React, MetaMask",
    description:
      "ERC-721 NFT marketplace with custom smart contracts. Front-end built with React and Ethers.js, wallet integration via MetaMask, deployed on local testnet using Hardhat.",
    github: "https://github.com/yourusername/nft-marketplace",
    screenshot: "/images/nft-marketplace-terminal.png",
  },
  {
    name: "DAO Voting Platform",
    tech: "Solidity, Next.js, Wagmi, RainbowKit",
    description:
      "Decentralized voting dApp for DAOs. Smart contracts for proposals and voting, front-end with Next.js and Wagmi hooks, wallet onboarding via RainbowKit.",
    github: "",
    screenshot: "/images/dao-voting-demo.png",
  },
];

const Web3Projects = () => (
  <section id="web3-projects" className="mb-16 md:mb-24 lg:mb-36">
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-slate-200 mb-2">Web3 / Blockchain Projects</h2>
      <p className="text-slate-400 text-base">
        Selected blockchain and smart contract projects. Some are not public, but you’ll find screenshots or repo links where possible.
      </p>
    </div>
    <ul className="space-y-10">
      {web3Projects.map((proj, idx) => (
        <li key={idx} className="bg-slate-800/60 rounded-lg p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-teal-300">{proj.name}</h3>
          <p className="text-slate-400 text-sm mb-1">{proj.tech}</p>
          <p className="text-slate-300 mb-2">{proj.description}</p>
          <div className="flex items-center space-x-4">
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 underline text-sm"
              >
                GitHub Repo
              </a>
            )}
            {proj.screenshot && (
              <img
                src={proj.screenshot}
                alt={`${proj.name} screenshot`}
                className="h-20 rounded border border-slate-700 bg-slate-900"
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Web3Projects;