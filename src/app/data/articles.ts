export type Article = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [];
