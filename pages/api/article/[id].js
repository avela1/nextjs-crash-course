import { articles } from "./../../../data/article-content";

export default function handler({ query: { id } }, res) {
  const filteredData = articles.filter((article) => article.id === id);

  if (filteredData.length > 0) {
    res.status(200).json(filteredData);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  }
}
