import React, { useState, useEffect } from 'react';
import './App.css';
import Grid from './Grid';
import Header from './Header';
import Footer from './Footer';
import twolyLogo from './Assets/twoly-icon-white-red.png';

function App() {
    const [appLoadScreen, setAppLoadScreen] = useState(true);

    useEffect(() => {
        setTimeout(function() {
            setAppLoadScreen(false);
        }, 2000);
    });

  return (
    <div className="App">
        {appLoadScreen ? (
            <div className="app-load-screen">
            <img src={twolyLogo} alt="twoly logo"></img>
            </div>
        ) : (
            <div>
                <Header />
                <Grid />
                <Footer />
            </div>
        )}

    </div>
  );
}

export default App;
