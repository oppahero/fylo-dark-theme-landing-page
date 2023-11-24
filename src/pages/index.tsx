import Head from 'next/head'
import styles from '@/styles/Home.module.css'
// import { raleway, open_Sans } from './fonts'
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
      <main className={`${styles.main} `}>
        {/* <FontAwesomeIcon icon={faCheck} className="fas fa-check" style={{ color: "red" }}
        ></FontAwesomeIcon> */}

      </main>
    </>
  )
}
