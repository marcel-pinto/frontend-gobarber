import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ResetPassword from '../../pages/ResetPassword';

const mockedHistoryPush = jest.fn();
const mockedAddToast = jest.fn();
const mockedReplace = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockedHistoryPush,
  }),
  Link: ({ children } : { children: React.ReactNode}) => children,
  useLocation: () => ({
    search: {
      replace: mockedReplace,
    },
  }),
}));

jest.mock('../../hooks/toast', () => ({
  useToast: () => ({
    addToast: mockedAddToast,
  }),
}));

jest.mock('../../services/api', () => ({
  post: jest.fn(),
}));

describe('Reset password page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should be able to reset users password', async () => {
    mockedReplace.mockReturnValue('token');
    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    const newPasswordField = getByPlaceholderText('Nova senha');
    const passwordConfirmationField = getByPlaceholderText('Confirmação da senha');
    const buttonElement = getByText('Alterar senha');

    fireEvent.change(newPasswordField, { target: { value: '1234567' } });
    fireEvent.change(passwordConfirmationField, { target: { value: '1234567' } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toBeCalledWith('/');
    });
  });

  it('should not be able to reset users password without the token', async () => {
    mockedReplace.mockReturnValue(undefined);

    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    const newPasswordField = getByPlaceholderText('Nova senha');
    const passwordConfirmationField = getByPlaceholderText('Confirmação da senha');
    const buttonElement = getByText('Alterar senha');

    fireEvent.change(newPasswordField, { target: { value: '1234567' } });
    fireEvent.change(passwordConfirmationField, { target: { value: '1234567' } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toBeCalled();
    });
  });

  it('should not be able to reset users password if new password and password confirmation does not match', async () => {
    mockedReplace.mockReturnValue(undefined);

    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    const newPasswordField = getByPlaceholderText('Nova senha');
    const passwordConfirmationField = getByPlaceholderText('Confirmação da senha');
    const buttonElement = getByText('Alterar senha');

    fireEvent.change(newPasswordField, { target: { value: 'my new password' } });
    fireEvent.change(passwordConfirmationField, { target: { value: 'wrong password confirmation' } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedAddToast).toBeCalledWith(expect.objectContaining({
        type: 'error',
      }));
    });
  });
});
