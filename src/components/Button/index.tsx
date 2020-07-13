import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, ...attributes }) => (
  <StyledButton type="button" {...attributes}>{children}</StyledButton>
);

export default Button;
