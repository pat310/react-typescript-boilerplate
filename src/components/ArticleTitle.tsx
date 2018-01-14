import * as React from 'react';
import styled from 'styled-components';

export interface Props {
  title: string;
}

export default (props: Props) => {
  const Title = styled.div`
    font-size: 30px;
    font-weight: 600;
  `;

  return (
    <Title>
      {props.title}
    </Title>
  );
};
