import { AnimatePresence, motion } from "framer-motion";
import { roles } from "../common/data";
import { useShowMoreWithReset } from "../hooks/useShowMoreWithReset";

const Experience = () => {
    const { sectionRef, itemsToShow, visibleCount, handleShowMore } = useShowMoreWithReset(roles, 3);

    return (
        <motion.section
            ref={sectionRef}
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div>
                <ol className="group/list">
                    <AnimatePresence initial={false}>
                        {itemsToShow.map(role => (
                            <motion.li
                                key={role.company}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="mb-12"
                            >
                                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={role?.date}>{role?.date}</header>
                                    <div className="z-10 sm:col-span-6">
                                        <h3 className="font-medium leading-snug text-slate-50">
                                            <div>
                                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-50 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href={role?.companyWebUrl} target="_blank" rel="noreferrer" aria-label={role?.role}>
                                                    <span>{role?.role} ·
                                                        <span className="inline-block">{role?.company}</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </h3>
                                        <ul className="mt-2 text-sm leading-normal list-disc">
                                            {role?.achievements?.map(achievement => (
                                                <li key={achievement} aria-label={achievement}>{achievement}</li>
                                            ))}
                                        </ul>
                                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                            {role?.technologies?.map(technology => (
                                                <li className="mr-1.5 mt-2" key={technology} aria-label={technology}>
                                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{technology}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ol>
                {visibleCount < roles.length && (
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

export default Experience;