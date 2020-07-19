import React from 'react';

// import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AuthContext from './context/AuthContext';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Marcel' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
