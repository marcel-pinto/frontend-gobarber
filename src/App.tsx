import React from 'react';

// import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ToastContainer from './components/ToastContainer';
import AppProvider from './hooks';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
