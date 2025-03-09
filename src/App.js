import React, { useState } from 'react';
import './index.css';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home">
      <div className="background-image"></div>
      <header>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <h1>Catan Stats</h1>
      </header>
      <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>Crear Partida</li>
          <li>Consultar Estadísticas</li>
        </ul>
      </nav>
      <main>
        <h2>Bienvenido a Catan Stats</h2>
        <p>Registra tus partidas y consulta estadísticas de Catan.</p>
      </main>
    </div>
  );
};

export default Home;
