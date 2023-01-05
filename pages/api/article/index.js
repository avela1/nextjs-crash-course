import { articles } from "../../../data/article-content";

export default function handler(req, res) {
  res.status(200).json(articles);
}
