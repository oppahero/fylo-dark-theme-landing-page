import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { raleway, open_sans } from '../fonts'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight, faEnvelope, faLocationDot, faPhoneVolume, faUser } from "@fortawesome/free-solid-svg-icons";

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
        <nav >
          <Image
            src="/images/logo.svg"
            alt="Fylo logo"
            width={164}
            height={52}
          />
          <ul className={`${raleway.variable} ${styles.navUl}`}>
            <li className={styles.navLi}><a href="#features">Features</a></li>
            <li className={styles.navLi}><a href="#team">Team</a></li>
            <li className={styles.navLi}><a href="#sigin">Sign In </a></li>
          </ul>
        </nav>

        <section className={styles.getStartedContainer}>
          <Image
            className={styles.imageIntro}
            src="/images/illustration-intro.png"
            alt="Illustration intro"
            width={306}
            height={227}
          />
          <div className={` ${raleway.variable} ${styles.getStartedContainer__text}`}>
            <h1 className={styles.h1}> All your files in one secure location, accessible anywhere.</h1>
            <p className={styles.getStartedtext} > Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <button className={styles.button}>Get Started</button>
          </div>

          <div className={styles.bgCurvy}></div>

        </section>

        <div className={styles.getStartedContainer__blue}>
          <section className={styles.featuresContainer} id='features'>
            <div className={`${styles.featuresContainer__item} ${raleway.variable}`}>
              <Image
                src="/images/icon-access-anywhere.svg"
                alt="icon access anywhere"
                width={155}
                height={141}
                className={styles.accessIcon}
              />
              <div className={styles.featuresContainer__item__text}>
                <h2  className={styles.h2}>Access your files, anywhere</h2>
                <p className={styles.text}>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
              </div>
            </div>
            <div className={`${styles.featuresContainer__item} ${raleway.variable}`}>
              <Image
                src="/images/icon-security.svg"
                alt="icon-security"
                width={122}
                height={141}
                className={styles.securityIcon}
              />
              <div className={styles.featuresContainer__item__text}>
                <h2 className={styles.h2}>Security you can trust</h2>
                <p className={styles.text}>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
              </div>
            </div>
            <div className={`${styles.featuresContainer__item} ${raleway.variable}`}>
              <Image
                src="/images/icon-collaboration.svg"
                alt="icon collaboration"
                width={138}
                height={117}
                className={styles.collabIcon}
              />
              <div className={styles.featuresContainer__item__text}>
                <h2 className={styles.h2}>Real-time collaboration</h2>
                <p className={styles.text}>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required</p>
              </div>
            </div>
            <div className={`${styles.featuresContainer__item} ${raleway.variable}`}>
              <Image
                src="/images/icon-any-file.svg"
                alt="icon any file"
                width={158}
                height={113}
                className={styles.fileIcon}
              />
              <div className={styles.featuresContainer__item__text}>
                <h2 className={styles.h2}>Store any type of file</h2>
                <p className={styles.text}>Whether you&apos;re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
              </div>
            </div>
          </section>
          <section className={styles.infoContainer} >
            <Image
              className={styles.infoContainer__image}
              src="/images/illustration-stay-productive.png"
              alt="illustration stay productive"
              width={310}
              height={233}
            />
            <div className={` ${styles.infoContainer__text}`}>
              <h2 className={styles.h2}>Stay productive, wherever you are</h2>
              <p className={styles.text}>
                Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
              </p>
              <p className={styles.text}>
                Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
              </p>
              <span className={styles.seeFylo}>
                See how Fylo works
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </span>
            </div>
          </section>
          <section className={styles.teamContainer} id='team'>
            <div className={styles.teamContainer__card}>
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
            <div className={styles.teamContainer__card}>
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
            <div className={styles.teamContainer__card}>
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
        </div>

        <footer>
          <div className={styles.suscribeContainer} id='sigin'>
            <h2 className={styles.h2}>Get early access today</h2>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <div className={styles.suscribe}>
              <input type="email" name="email" id="email" placeholder='email@example.com' />
              <button className={styles.suscribeButton} >Get Started for free</button>
            </div>
          </div>

          <div className={styles.footerContainer}>
            <div className={styles.logoFooter}>
              <Image
                src="/images/logo.svg"
                alt="Fylo logo"
                width={181}
                height={52}
              />
            </div>
            <div className={styles.textFooter}>
              <div className={styles.direction}>
                <FontAwesomeIcon className={styles.iconSize} icon={faLocationDot} />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incidiuntut labore et dolore magna aliqua</p>
              </div>
              <div className={styles.contacts}>
                <div className={styles.contactsGroup}>
                  <FontAwesomeIcon className={styles.iconSize} icon={faPhoneVolume} />
                  <p>
                    +1-543-123-4567
                  </p>
                </div>
                <div className={styles.contactsGroup}>
                  <FontAwesomeIcon className={styles.iconSize} icon={faEnvelope} />
                  <p>
                    example@fylo.com
                  </p>
                </div>
              </div>
              <div className={styles.infoLinks}>
                <li><a>About Us</a></li>
                <li><a>Jobs</a></li>
                <li><a>Press</a></li>
                <li><a>Blog</a></li>
              </div>
              <div className={styles.infoLinks}>
                <li><a>Contact Us</a></li>
                <li><a>Terms</a></li>
                <li><a>Privacy</a></li>
              </div>
              <div className={styles.socialMedia}>
                {/* <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} /> */}
                <FontAwesomeIcon className={styles.socialMediaIcon} icon={faUser} />
                <FontAwesomeIcon className={styles.socialMediaIcon} icon={faUser} />
                <FontAwesomeIcon className={styles.socialMediaIcon} icon={faUser} />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
