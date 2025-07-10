
const About = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div className="text-slate-300">
                <p className="mb-4">
                    My journey into software engineering began with my undergraduate capstone project: the design and implementation of a distributed pulse monitoring system. That experience sparked my passion for using technology to solve real-world problems and improve lives—a passion that continues to shape my career today.
                </p>
                <p className="mb-4">
                    I&apos;m a full-stack software engineer with <b>over four years of hands-on experience</b> developing scalable, high-performance web applications. I&apos;ve worked both independently and as part of cross-functional teams to deliver impactful solutions for sectors including digital identity, enterprise collaboration, and financial services.
                </p>
                <p className="mb-4">
                    My core strengths lie in the <b>MERN/MEAN stack</b>, with deep proficiency in <b>React</b>, <b>Next.js</b>, <b>Angular</b>, and <b>Redux</b> for building responsive and intuitive user interfaces. On the backend, I have hands-on experience with <b>Nodejs</b>, <b>Nestjs</b>, <b>Java and Spring Boot</b>, building RESTful APIs, integrating with relational and non relational databases, and delivering production-grade enterprise applications.
                </p>
                <p className="mb-4">
                    I&apos;ve contributed to projects for an <b><a className="font-medium text-slate-50 hover:text-teal-300 focus-visible:text-teal-300" href="https://alluvium.net/" target="_blank" rel="noreferrer">Atlassian solution partner</a></b> and a digital identity provider, working on internal dashboards and complex B2B platforms—many of which serve <b>thousands to millions of users</b>. While these applications are protected under NDA, they demonstrate my ability to build maintainable, performant systems at scale.  and a <b><a className="font-medium text-slate-50 hover:text-teal-300 focus-visible:text-teal-300" href="https://seamfix.com/" target="_blank" rel="noreferrer">digital identity solution provider</a></b>.
                </p>
                <p className="mb-4">
                    More recently, I&apo;ve been expanding into <b>Web3 development</b>, using <b>Solidity</b>, <b>Ethers.js</b>, and <b>Ethereum</b> tools to build decentralized applications and experiment with blockchain-based systems.
                </p>

                <p>
                    Outside of work, I unwind through sports—whether it&apos;s watching football, basketball, or Formula 1, or playing football with friends. I thrive in environments that encourage <b>innovation, continuous learning, and collaborative problem-solving</b>.
                </p>
            </div>
        </section>

    )
}

export default About;