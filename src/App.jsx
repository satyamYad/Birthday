import React, { useState } from 'react';
import './App.css';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  const handleSurprise = () => {
    setShowSurprise(true);
    const audio = new Audio('/happy-birthday-song.mp3');
    audio.play();  // Play birthday song
  };

  return (
    <div className="app">
      {!showSurprise ? (
        <div className="welcome">
          <h1>Click the button to reveal the surprise!</h1>
          <button className="btn" onClick={handleSurprise}>🎉 Surprise! 🎉</button>
        </div>
      ) : (
        <div className="surprise">
          <h1>Happy Birthday 🎂🎉🎁</h1>
          <div className="cake">
            <div className="candle"></div>
            <div className="frosting"></div>
            <div className="base"></div>
          </div>
          <h2>Wishing you all the happiness in the world!</h2>
          <button className="btn" onClick={() => setShowSurprise(false)}>
            Back to Start
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
