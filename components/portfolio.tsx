import Link from "next/link"
import HeadContent from "./head";
import MainContent from "./content";
const Portfolio = () => {
    return (
        <div className="__variable_20b187 group/spotlight relative" id="portfolio">
            <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{ background: 'radial-gradient(600px at 803px 3069px, rgba(29, 78, 216, 0.15), transparent 80%)' }}></div>
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</a>
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <HeadContent />
                    <MainContent />
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Portfolio;