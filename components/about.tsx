
const About = () => {
    return (
        <>
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
                </div>
                <div>
                    <p className="mb-4">The knack all started with my final undergraduate project (The Design and implementation fo a Distributed Pulse monitoring system). The experience made me understand the power of engineering and how it can make life easier and solve real world problems. Today, As a software engineer with over four years of experience, I have had the opportunity to work on various projects, both independently and as part of collaborative teams. My proficiency in the MERN|MEAN stack has allowed me to develop scalable and responsive web applications, ensuring a seamless user experience. I am well-versed in front-end technologies such as Angular, React, Nextjs and Redux, which enable me to build intuitive and interactive user interfaces for an <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://alluvium.net/" target="_blank" rel="noreferrer">atlassian solution partner</a> and a <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://seamfix.com/" target="_blank" rel="noreferrer">digital identity solution provider</a>.
                    </p>
                    <p className="mb-4">
                    Throughout my career, I have consistently demonstrated a strong ability to analyze complex problems, devise innovative solutions, and deliver results within challenging timelines. What sets me apart is my passion for continuous learning and staying updated with the latest industry trends and technologies. I actively engage in professional development, attending conferences and participating in online communities to expand my knowledge and refine my skills. I thrive in environments that foster innovation and provide opportunities for personal and professional growth.
                    </p>

                    <p>
                        I am a sports guy, so when i am not working, i try to relaxing by watching football, basketball and formular 1 or i actually go out to play football with friends.
                    </p>
                </div>
            </section>
        </>
    )
}

export default About;