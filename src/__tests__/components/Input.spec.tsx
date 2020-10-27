import {
  fireEvent, render, waitFor,
} from '@testing-library/react';
import React from 'react';
import { FiMail } from 'react-icons/fi';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import Input from '../../components/Input';

let mockedError: string;

jest.mock('@unform/core', () => ({
  useField: jest.fn(() => ({
    fieldName: 'email',
    error: mockedError,
    defaultValue: '',
    registerField: jest.fn(),
  })),
}));

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input
        name="email"
        placeholder="E-mail"
      />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should render a highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input
        name="email"
        placeholder="E-mail"
      />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const inputContainer = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(inputContainer).toHaveStyleRule('border-color', '#ff9000');
      expect(inputContainer).toHaveStyleRule('color', '#ff9000');
    });
  });

  it('should remove the highlight of input on blur', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input
        name="email"
        placeholder="E-mail"
      />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const inputContainer = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(inputContainer).toHaveStyleRule('border-color', '#ff9000');
      expect(inputContainer).toHaveStyleRule('color', '#ff9000');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(inputContainer).not.toHaveStyleRule('border-color', '#ff9000');
      expect(inputContainer).not.toHaveStyleRule('color', '#ff9000');
    });
  });

  it('should display an icon if it is passed by the props', async () => {
    const { getByTestId } = render(
      <Input
        icon={FiMail}
        name="email"
        placeholder="E-mail"
      />,
    );

    const inputIcon = getByTestId('input-icon');

    await waitFor(() => {
      expect(inputIcon).toBeInTheDocument();
    });
  });

  it('should not display an icon if it is not passed by the props', async () => {
    const { queryByTestId } = render(
      <Input
        name="email"
        placeholder="E-mail"
      />,
    );

    await waitFor(() => {
      expect(queryByTestId('input-icon')).toBeNull();
    });
  });

  it('should keep the icon highlight when input is filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input
        name="email"
        placeholder="E-mail"
      />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const inputContainer = getByTestId('input-container');

    fireEvent.change(inputElement, { target: { value: 'johndoe@example.com' } });
    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(inputContainer).toHaveStyleRule('color', '#ff9000');
    });
  });

  it('should display an error tooltip if input has any error', async () => {
    mockedError = 'Erro no input';
    const { queryByTestId } = render(
      <Input
        name="email"
        placeholder="E-mail"
      />,
    );

    const errorTooltip = queryByTestId('input-error');
    await waitFor(() => {
      expect(errorTooltip).toBeTruthy();
      expect(errorTooltip).toHaveStyle('color: #c53030;');
    });
  });
});
