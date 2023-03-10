import Head from "next/head";

import ArticlesList from "./../components/ArticlesList";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ArticlesList articles={articles} />
      </main>
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/article`);
  const articles = await res.json();
  return {
    props: { articles },
  };
};

// export const getStaticProps = async () => {
//   const res = await await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=8`
//   );
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// };
