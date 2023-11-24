import Head from 'next/head'
import styles from '@/styles/Home.module.css'
// import { raleway, open_Sans } from './fonts'

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

      </main>
    </>
  )
}
