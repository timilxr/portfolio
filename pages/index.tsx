import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PayRollView from '../components/payrol-view'
import Portfolio from '../components/portfolio'

const Home: NextPage = () => {

  const data = [{}, {}, {}, {}];

  return (
    <div className='bg-slate-900 leading-relaxed text-slate-300 antialiased selection:bg-teal-300 selection:text-teal-900 scroll-smooth'>
      <Head>
        <title>Ayorinde Timilehin</title>
        <meta name="description" content="An online portfolio for Ayorinde Timilehin, a results-driven software engineer with 4+ years of experience in full-stack web development with agile methodologies.
Proficient in JavaScript, Typescript, React, NextJs, Angular, and Java, with a strong focus on delivering scalable and efficient
solutions. Skilled in problem-solving and collaborating with cross-functional teams to meet project goals. Committed to staying updated with emerging technologies and leveraging them to drive innovation. Seeking a challenging role as a
software engineer to contribute to cutting-edge projects and further enhance technical expertise in a collaborative and
dynamic environment." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
      </Head>

      {/* <main className={styles.main}>
        <button className="btn btn-success ms-auto mb-5">Download all</button>
        {
          data.map((person, index)=>(<div key={index} className={`${styles.paper} shadow`}><PayRollView /></div>))
        }
      </main> */}
      <Portfolio />
    </div>
  )
}

export default Home
