import { ArticleListing } from './containers/ArticleListing';
import { Article } from './containers/Article';
import machineLearning from './Articles/MachineLearning';

export const articles = {
  'Machine Learning': machineLearning,
};

export default function createRoutes() {
  return [
    {
      path: '/articles/:articleListing',
      name: 'articleListing',
      component: ArticleListing,
      props: {
        articles,
      },
    },
    {
      path: '/article/:articleListing/:articleTitle',
      name: 'article',
      component: Article,
      props: {
        articles,
      },
    },
  ];
}