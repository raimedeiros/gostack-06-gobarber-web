import styled, { css } from 'styled-components';

interface ContanierProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContanierProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  border: 2px solid #232129;
  color: #666360;

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  & + div {
    margin-top: 8px;
  }
  input {
    color: #f4ede8;
    background: transparent;
    flex: 1;
    border: 0;
    &:placehonder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
