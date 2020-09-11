import React from 'react';
import './App.css';

//Import components
import Header from './components/header/Header';
import LeftSide from './components/leftSide/LeftSide';
import RightSide from './components/rightSide/RightSide';

function App() {
  return (
    <div className="App">
      <Header />
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
