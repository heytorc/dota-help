import React from 'react';
import HomePage from 'src/pages/Home';

import GlobalStyles from 'src/styles/globalStyles';
import './App.scss';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <HomePage />
      </div>
    </>
  );
}

export default App;
