import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../../../styles/Home.module.css';

export default function Home() {
  const { query } = useRouter();
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
        <title>This page is for crawlers: {query.slug}</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content={`This description is for crawlers: ${query.slug}`}
        />
        <meta
          name="google-site-verification"
          content="KFxM3Zo92eGSpAhdpFCiQDC63AYQEOluJipnrq7Pzvc"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This page is for crawlers: {query.slug}
        </h1>
      </main>
    </div>
  );
}
