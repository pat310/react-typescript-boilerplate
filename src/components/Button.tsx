import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface ButtonProps { route: string; title: string; style: object; }

export function Button(props: ButtonProps) {
  const StyledLink = styled(Link)`
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    text-decoration: none;
    height: 20px;
    
    &:hover {
      background: lightgray;
    }
  `;

  return (
    <StyledLink to={props.route} style={props.style}>
      {props.title}
    </StyledLink>
  );
}
