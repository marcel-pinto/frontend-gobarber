import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...attributes }) => (
  <StyledButton type="button" {...attributes}>
    {loading ? 'Carregando...' : children}
  </StyledButton>
);

export default Button;
