import * as React from 'react';
import styled from 'styled-components';

import ArticleTitle from '../../components/ArticleTitle';

export interface Article {
  title: string;
  summary: string;
  dateWritten: number;
  article: string;
  urlTitle: string;
}

export interface Articles {
  [key: string]: Article[],
}

export interface ArticleProps {
  articles: Articles,
  match: {
    params: {
      articleListing: string;
      articleUrlTitle: string;
    },
  },
}

export const Article = (props: ArticleProps) => {
  const { articleListing, articleUrlTitle } = props.match.params;
  const article: Article = props.articles[articleListing].find(({ urlTitle }) => {
    return urlTitle === articleUrlTitle;
  });

  const ArticleSummary = styled.div`
    margin-top: 10px;
  `;

  return (
    <div>
      <ArticleTitle title={article.title} />
      <ArticleSummary>{article.summary}</ArticleSummary>
      {article.article}
    </div>
  );
};
