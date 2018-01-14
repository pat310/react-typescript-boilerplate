import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ArticleTitle from './ArticleTitle';

export interface ArticleSummaryBlockProps {
  title: string;
  dateWritten: number;
  summary: string;
  to: string;
}

export default (props: ArticleSummaryBlockProps) => {
  const ArticlePreview = styled(Link)`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    
    &:hover {
      background: lightgray;
    }
  `;

  return (
    <ArticlePreview to={props.to}>
      <ArticleTitle title={props.title} />
      {props.dateWritten}
      <div>{props.summary}</div>
    </ArticlePreview>
  );
};
