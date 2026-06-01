import { articles, type Article } from "../data/articles";

export function getAllArticles(): Article[] {
  return [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
