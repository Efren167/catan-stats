import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreateGame from './CreateGame';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crear-partida" element={<CreateGame />} />
      {/* Puedes añadir más rutas aquí */}
    </Routes>
  );
};

export default App;
