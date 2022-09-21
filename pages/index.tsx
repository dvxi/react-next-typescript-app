import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.scene}>
        <h1 className={styles.title}>Index</h1>
        <p className={styles.text}>Lorem ipsum</p>
        <p className={styles.text}>Lorem ipsum</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}

export default Home
