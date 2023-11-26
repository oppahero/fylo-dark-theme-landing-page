import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { raleway, open_sans } from '../fonts'
import Image from 'next/image'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fylo by María López</title>
        <meta name="description" content="Landing page build with Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main role='main'>
        {/* <FontAwesomeIcon icon={faCheck} className="fas fa-check" style={{ color: "red" }}
        ></FontAwesomeIcon> */}
        <nav >
          <Image
            src="/images/logo.svg"
            alt="Fylo logo"
            width={164}
            height={52}
          />

          <ul className={`${raleway.variable} ${styles.navUl}`}>
            <li className={styles.navLi}><a href="#">Features</a></li>
            <li className={styles.navLi}><a href="#">Team</a></li>
            <li className={styles.navLi}><a href="#">Sign In </a></li>
          </ul>
        </nav>

        <section className={styles.getStartedContainer}>
          <Image
            className={styles.imageIntro}
            src="/images/illustration-intro.png"
            alt="Illustration intro"
            width={612}
            height={455}
          />

          <div className={styles.bgCurvy}></div>

          <div className={`${styles.getStartedContainer__blue} ${raleway.variable} ${open_sans.variable}`}>
            <div className={styles.getStartedContainer__text}>
            <h1 className={styles.h1}> All your files in one secure location, accessible anywhere.</h1>
            <p className={styles.text} > Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <button className={styles.button}>Get Started</button>
            </div>
            
          </div>
        </section>
      </main>
    </>
  )
}
