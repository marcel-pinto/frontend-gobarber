import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { AuthProvider, useAuth } from '../../hooks/auth';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth hook', () => {
  it('should be able to sign in', async () => {
    const apiResposne = {
      user: {
        id: 'user-id',
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
      token: 'user-token',
    };

    apiMock.onPost('sessions').reply(200, apiResposne);
    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    result.current.signIn({
      email: 'johndoe@example.com',
      password: '123456',
    });

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith('@GoBarber:token', apiResposne.token);
    expect(setItemSpy).toHaveBeenCalledWith('@GoBarber:user', JSON.stringify(apiResposne.user));

    expect(result.current.user.email).toEqual('johndoe@example.com');
  });

  it('should restore save data from storage when auth inits', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      switch (key) {
        case '@GoBarber:token':
          return 'token-123';
        case '@GoBarber:user':
          return JSON.stringify({
            id: 'user-id',
            name: 'John Doe',
            email: 'johndoe@example.com',
          });
        default:
          return null;
      }
    });
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current.user.email).toEqual('johndoe@example.com');
  });

  it('should be able to sign out', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const removeItem = jest.spyOn(Storage.prototype, 'removeItem');

    act(() => {
      result.current.signOut();
    });

    expect(removeItem).toHaveBeenCalledWith('@GoBarber:token');
    expect(removeItem).toHaveBeenCalledWith('@GoBarber:user');
  });

  it('should be able to update user data', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const user = {
      id: 'user-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      avatar_url: 'image.jpg',
    };

    act(() => {
      result.current.updateUser(user);
    });

    expect(setItemSpy).toHaveBeenCalledWith('@GoBarber:user', JSON.stringify(user));
    expect(result.current.user).toEqual(user);
  });
});
