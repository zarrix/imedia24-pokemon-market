import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Poster from './components/Poster/Poster';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      <main>
        {/* Poster */}
        <Poster />

      </main>
      
    </div>
  );
}

export default App;
