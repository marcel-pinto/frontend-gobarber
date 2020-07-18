import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder{
      color: #666360;
    }

  }
  svg {
    margin-right: 16px;
    color: #666360;
  }

  ${(props) => props.hasError && css`
    border-color: #C53030;
  `}
  ${(props) => props.isFocused && css`
    svg {
      color: #ff9000;
    }
    border-color: #ff9000;
  `}
  ${(props) => props.isFilled && css`
    svg {
      color: #ff9000;
    }
  `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }

  svg {
    margin: 0;
  }
`;
