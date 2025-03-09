import React, { useState } from 'react';
import './index.css';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="home">
      <div className="background-image"></div>
      <header className="d-flex align-items-center justify-content-between px-3 bg-danger text-white">
        <button className="menu-toggle btn btn-light" onClick={toggleMenu}>
          ☰
        </button>
        <h1 className="flex-grow-1 text-center m-0">Catan Stats</h1>
      </header>
      <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <ul className="list-unstyled p-3">
          <li>Crear Partida</li>
          <li>Consultar Estadísticas</li>
        </ul>
      </nav>
      <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      <main className="d-flex flex-column justify-content-center align-items-center text-center">
        <h2>Bienvenido a Catan Stats</h2>
        <p>Registra tus partidas y consulta estadísticas de Catan.</p>
      </main>
    </div>
  );
};

export default Home;
