import { renderHook } from '@testing-library/react-hooks';
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
});
