
export interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category?: string;
  tags?: string[];
  image?: string;
  content?: string;
  slug: string;
}

export type BlogPost = Blog;

export type BlogCategory = {
  name: string;
  slug: string;
  count: number;
};
