import { AnimatePresence, motion } from "framer-motion";
import { roles } from "../common/data";
import { useShowMore } from "../hooks/useShowMore"; // updated import

const Experience = () => {
  const { itemsToShow, visibleCount, handleShowMore } = useShowMore(roles, 3);

  return (
    <motion.section
      id="experience"
      layout
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
      initial={{ opacity: 0.2, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div>
        <ol className="group/list">
          <AnimatePresence initial={false}>
            {itemsToShow.map((role) => (
              <motion.li
                key={role.company}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mb-12"
              >
                <div className="group relative lg:hover:!opacity-100 lg:group-hover/list:opacity-50 grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label={role?.date}
                  >
                    {role?.date}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-50">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-50 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href={role?.companyWebUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={role?.role}
                      >
                        <span>
                          {role?.role} ·{" "}
                          <span className="inline-block">{role?.company}</span>
                        </span>
                      </a>
                    </h3>

                    <ul className="mt-2 text-sm leading-normal list-disc">
                      {role?.achievements?.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>

                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {role?.technologies?.map((technology) => (
                        <li className="mr-1.5 mt-2" key={technology}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {technology}
                          </div>
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
          <motion.div layout className="flex justify-center mt-6">
            <button
              className="px-4 py-2 rounded bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
              onClick={handleShowMore}
            >
              Show more
            </button>
          </motion.div>
        )}
      </div>
      <div className="mt-12"><a className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group" aria-label="View Résumé" target="_blank" href="/resume.pdf"><span><span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View </span><span className="whitespace-nowrap"><span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Résumé</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg></span></span></a></div>
    </motion.section>
  );
};

export default Experience;
