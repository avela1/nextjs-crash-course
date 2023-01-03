import Link from "next/link";

import articleStyle from "./../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    (<Link
      href="/articles/[id]"
      as={`/articles/${article.id}`}
      className={articleStyle.card}>

      <h3>{article.title} &rarr;</h3>
      <p>{article.body}</p>

    </Link>)
  );
};

export default ArticleItem;
