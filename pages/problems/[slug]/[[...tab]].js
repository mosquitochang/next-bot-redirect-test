import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css';

export default function Home() {
  const { query } = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>This page is for client: {query.slug}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>This page is for client: {query.slug}</h1>
      </main>
    </div>
  );
}
