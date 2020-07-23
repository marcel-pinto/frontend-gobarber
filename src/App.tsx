import React from 'react';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { AuthProvider } from './hooks/AuthContext';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
