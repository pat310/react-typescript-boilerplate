import * as React from 'react';

import ArticleSummaryBlock from '../../components/ArticleSummaryBlock';

export interface ArticleListingProps {
  articles: {
    [key: string]: {
      title: string;
      summary: string;
      dateWritten: number;
      articleUrlTitle: string;
    }[],
  },
  match: {
    params: {
      articleListing: string,
    },
  },
};

export const ArticleListing = (props: ArticleListingProps) => {
  const articleListing: string = props.match.params.articleListing;
  const articles = props.articles[articleListing];

  return (
    <div>
      {
        articles.map(({ title, summary, dateWritten, articleUrlTitle }, i) => {
          return (
            <ArticleSummaryBlock
              key={`${title}-${i}`}
              title={title}
              summary={summary}
              dateWritten={dateWritten}
              to={`/article/${articleListing}/${articleUrlTitle}`}
            />
          );
        })
      }
    </div>
  );
};
