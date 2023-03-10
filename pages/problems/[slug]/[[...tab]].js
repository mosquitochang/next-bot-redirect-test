import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const { query } = useRouter();
  return (
    <div>
      <Head>
        <title>{`This page is for client in CSR: ${query.slug}`}</title>
      </Head>
      <h1>This page is for client in CSR: {query.slug}</h1>
    </div>
  );
}
