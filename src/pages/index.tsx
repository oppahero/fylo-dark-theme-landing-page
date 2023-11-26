import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { raleway, open_sans } from '../fonts'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fylo by María López</title>
        <meta name="description" content="Landing page build with Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main role='main' className={`${styles.main} ${open_sans.variable}`}>
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
          <div className={`${styles.getStartedContainer__blue} ${raleway.variable}`}>
            <div className={styles.getStartedContainer__text}>
              <h1 className={styles.h1}> All your files in one secure location, accessible anywhere.</h1>
              <p className={styles.getStartedtext} > Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
              <button className={styles.button}>Get Started</button>
            </div>

          </div>
        </section>

        <section className={styles.advantagesContainer}>
          <div className={`${styles.advantagesContainer__item} ${raleway.variable}`}>
            <Image
              src="/images/icon-access-anywhere.svg"
              alt="icon access anywhere"
              width={140}
              height={126}
            />
            <div className={styles.advantagesContainer__item__text}>
              <h2 className={styles.h2}>Access your files, anywhere</h2>
              <p className={styles.advantageText}>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
          </div>
          <div className={`${styles.advantagesContainer__item} ${raleway.variable}`}>
            <Image
              src="/images/icon-security.svg"
              alt="icon-security"
              width={122}
              height={141}
            />
            <div className={styles.advantagesContainer__item__text}>
              <h2 className={styles.h2}>Security you can trust</h2>
              <p className={styles.advantageText}>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
            </div>
          </div>
          <div className={`${styles.advantagesContainer__item} ${raleway.variable}`}>
            <Image
              src="/images/icon-collaboration.svg"
              alt="icon collaboration"
              width={138}
              height={117}
            />
            <div className={styles.advantagesContainer__item__text}>
              <h2 className={styles.h2}>Real-time collaboration</h2>
              <p className={styles.advantageText}>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required</p>
            </div>
          </div>
          <div className={`${styles.advantagesContainer__item} ${raleway.variable}`}>
            <Image
              src="/images/icon-any-file.svg"
              alt="icon any file"
              width={153}
              height={108}
            />
            <div className={styles.advantagesContainer__item__text}>
              <h2 className={styles.h2}>Store any type of file</h2>
              <p className={styles.advantageText}>Whether you&apos;re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
            </div>
          </div>
        </section>

        <section className={styles.infoContainer}>
          <Image
            src="/images/illustration-stay-productive.png"
            alt="illustration stay productive"
            width={620}
            height={467}
          />
          <div className={styles.infoContainer__text}>
            <h2 className={styles.h2}>Stay productive, wherever you are</h2>
            <p className={styles.advantageText}>
              Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
            </p>
            <p className={styles.advantageText}>
              Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
            </p>
            <span className={styles.seeFylo}>
              See how Fylo works
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </span>
          </div>
        </section>

        <section className={styles.testimonialsContainer}>
          <div className={styles.testimonialsContainer__card}>
            <Image
              className={styles.quouteIcon}
              src="/images/bg-quotes.png"
              alt="Quote icon"
              width={40}
              height={30}
            />
            <p className={`${styles.testimonial} ${raleway.variable}`}>
              Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
            </p>
            <div className={styles.testimonialInfo}>
              <Image
                className={styles.testimonialImage}
                src="/images/profile-1.jpg"
                alt="Person image 1"
                width={50}
                height={50}
              />
              <div className={styles.testimonialPerson}>
                <h3 className={styles.testimonialName}>Satish Patel</h3>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialsContainer__card}>
            <p className={`${styles.testimonial} ${raleway.variable}`}>
              Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.            </p>
            <div className={styles.testimonialInfo}>
              <Image
                className={styles.testimonialImage}
                src="/images/profile-2.jpg"
                alt="Person image 2"
                width={50}
                height={50}
              />
              <div className={styles.testimonialPerson}>
                <h3 className={styles.testimonialName}>Bruce McKenzie</h3>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialsContainer__card}>
            <p className={`${styles.testimonial} ${raleway.variable}`}>
              Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.            </p>
            <div className={styles.testimonialInfo}>
              <Image
                className={styles.testimonialImage}
                src="/images/profile-3.jpg"
                alt="Person image 3"
                width={50}
                height={50}
              />
              <div className={styles.testimonialPerson}>
                <h3 className={styles.testimonialName}>Iva Boyd</h3>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
