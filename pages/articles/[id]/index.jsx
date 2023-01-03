import Link from "next/link";

import articleStyle from "./../../../styles/Article.module.css";

const article = ({ article }) => {
  console.log(article);
  return (
    <div className={articleStyle.card}>
      <h1>{article.title}</h1>
      <span>{article.body}</span>
      <hr />
      <Link href="/">
        <button>&larr;Go Back</button>
      </Link>
    </div>
  );
};

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   return {
//     props: { article },
//   };
// };

// or

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
};
export default article;
