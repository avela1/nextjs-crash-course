import Link from "next/link";
import articleStyle from "./../../../styles/Article.module.css";

const article = ({ article }) => {
  // console.log(article);
  return (
    <div className={articleStyle.main}>
      <div className={articleStyle.card}>
        <img
          src={article[0].thumbnail}
          alt="article image"
          className={articleStyle.image}
        />
        <h1>{article[0].title}</h1>
        <hr />
        <p>{article[0].body}</p>
        <hr />
        <Link href="/">
          <button>&larr;Go Back</button>
        </Link>
      </div>
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

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   return {
//     props: { article },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//   return { paths, fallback: false };
// };

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/article/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/article`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
};
export default article;
