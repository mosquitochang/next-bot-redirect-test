import Head from 'next/head';

export const getServerSideProps = ({ query }) => {
  const slug = query.slug;

  return {
    props: {
      slug,
    },
  };
};

export default function Home({ slug }) {
  return (
    <div>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LeetCode" />
        <meta
          property="og:image"
          content="https://leetcode.com/static/images/LeetCode_Sharing.png"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="LeetCode" />
        <title>This page is for crawlers: {slug}</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content={`This description is for crawlers: ${slug}`}
        />
        <meta
          name="google-site-verification"
          content="KFxM3Zo92eGSpAhdpFCiQDC63AYQEOluJipnrq7Pzvc"
        />
      </Head>
      <h1>This page is for crawlers: {slug}</h1>
    </div>
  );
}
