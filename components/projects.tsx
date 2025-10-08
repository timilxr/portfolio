import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../common/data";
import Image from "next/image";
import { useShowMore } from "../hooks/useShowMore";

const Projects = () => {
    const { itemsToShow, visibleCount, handleShowMore } = useShowMore(projects, 3);

    return (
        <motion.section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected projects"
            initial={{ opacity: 0.2, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-200 mb-2">Personal Projects and Contributions</h2>
                <p className="text-slate-400 text-base">Selected personal and professional projects delivered for clients and employers.</p>
            </div>
            <div>
                <ul className="group/list">
                    <AnimatePresence initial={false}>
                        {itemsToShow.map((project, idx) => (
                            <motion.li
                                key={project?.name}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="mb-12"
                            >
                                <a href={project?.url} target="_blank" rel="noreferrer" aria-label={project?.name} className="group grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:text-slate-200">
                                    <div className="sm:order-2 sm:col-span-6">
                                        <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                                            <span>{project?.name}</span>
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal">{project.description}</p>
                                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                            {project?.technologies?.map(tech => (
                                                <li className="mr-1.5 mt-2" key={tech}>
                                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300" aria-label={tech}>{tech}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="sm:order-1 sm:col-span-2 flex items-center">
                                        <div className="relative w-[200px] h-[88px]">
                                            <Image
                                                alt={project?.name || ""}
                                                src={`/projects/${project?.image}`}
                                                layout="fill"
                                                className="rounded border-2 border-slate-200/10 group-hover:border-slate-200/30 object-cover object-center group-hover:opacity-90"
                                                style={{ color: 'transparent' }}
                                                sizes="(max-width: 768px) 100vw, 200px"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
                {visibleCount < projects.length && (
                    <div className="flex justify-center mt-6">
                        <button
                            className="px-4 py-2 rounded bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                            onClick={handleShowMore}
                        >
                            Show more
                        </button>
                    </div>
                )}
            </div>
        </motion.section>
    );
};

export default Projects;