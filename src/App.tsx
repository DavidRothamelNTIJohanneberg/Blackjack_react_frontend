import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import LandingPage from './common/LandingPage';
import BlackjackPage from './common/BlackjackPage';
import { Console } from "console";

function App() {
    const  [showLandingPage, setShowLandingPage] = useState(true);
    const [count, setCount] = useState(1);

    function incrementCount() {
        setCount(count + 1);
    }

    function decrementCount() {
        setCount(count - 1);
    }

    function toggleLayout() {
        setShowLandingPage(!showLandingPage);
    }

  return (
      <div>
          {showLandingPage ? <LandingPage toggleLayout={toggleLayout} count={count} decrement={decrementCount} increment={incrementCount} /> : <BlackjackPage count={count } />}
      </div>
  );
}

export default App;
