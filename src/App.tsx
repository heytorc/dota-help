import React from 'react';

import { GlobalProvider } from 'src/context/GlobalContext';

import Routes from 'src/routes';

import GlobalStyles from 'src/styles/globalStyles';
import './App.scss';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <GlobalProvider>
          <Routes />
        </GlobalProvider>
      </div>
    </>
  );
}

export default App;
