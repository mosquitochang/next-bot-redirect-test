import Head from 'next/head';
import styles from '../../../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LeetCode" />
        <meta
          property="og:image"
          content="https://leetcode.com/static/images/LeetCode_Sharing.png"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="LeetCode" />
        <title>Two Sum - LeetCode</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Two Sum - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."
        />
        <meta
          name="google-site-verification"
          content="KFxM3Zo92eGSpAhdpFCiQDC63AYQEOluJipnrq7Pzvc"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">bot!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
