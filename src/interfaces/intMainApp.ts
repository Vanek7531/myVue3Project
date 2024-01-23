export interface navMenuInt {
  route: string;
  name: string;
}
export interface allQuestionsInt {
  id: number;
  question_text: string;
  pub_date: string;
  type: string;
  author_last_name: string;
  author_patronymic: string;
  author_first_name: string;
  slug: string;
  comments: number;
  dislike: number;
  favorite: number;
  like: number;
}
// export interface allArticlesInt {
//   id: number;
//   question_text: string;
//   pub_date: string;
//   type: string;
//   author: number;
//   short_description: string;
// }
export interface allArticlesInt {
  id: number;
  author_first_name: string;
  author_last_name: string;
  author_patronymic: string;
  title: string;
  content: string;
  pub_date: string;
  type: string;
  author: number;
  time_create: string;
  time_update: string;
  dislike: number;
  comments: number;
  category: number;
  like: number;
  slug: string;
	thumbnail_webp: string;
	thumbnail: string;
	short_description: string;
}
// export interface allArticlesInt {
//   id: number;
//   title: string;
//   content: string;
//   pub_date: string;
//   type: string;
//   author: number;
// }

export interface allDigestsInt {
  id: number;
  author: AuthorInt;
  title: string;
  description: string;
  pub_date: string;
  type: string;
  slug: string;
  thumbnail: string;
  articles: number[];
}

export interface AuthorInt {
  id: number;
  name: string;
  code: string;
  email: string;
  first_name: string;
  last_name: string;
  patronymic: string;
}
