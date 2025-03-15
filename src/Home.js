import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="home">
      <div className="background-image"></div>
      <header className="d-flex align-items-center justify-content-between px-3 bg-danger text-white">
        <button className="menu-toggle btn btn-light" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <h1 className="flex-grow-1 text-center m-0">Catan Stats</h1>
        <div className="user-info d-flex align-items-center gap-2">
          {user?.photoURL && (
            <img 
              src={user.photoURL} 
              alt="User avatar" 
              className="rounded-circle"
              style={{ width: '35px', height: '35px' }}
            />
          )}
          <button onClick={handleLogout} className="btn btn-light">
            Cerrar sesión
          </button>
        </div>
      </header>
      
      <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <ul className="list-unstyled p-3">
          <li>
            <Link to="/crear-partida" className="text-decoration-none text-dark">
              <i className="fas fa-plus-circle me-2"></i> Crear Partida
            </Link>
          </li>
          <li>
            <Link to="/consultar-estadisticas" className="text-decoration-none text-dark">
              <i className="fas fa-chart-bar me-2"></i> Consultar Estadísticas
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)}></div>
      
      <main className="d-flex flex-column justify-content-center align-items-center text-center">
      <h2>Bienvenido{user?.displayName ? `, ${user.displayName}` : ''}</h2>
        <p>Registra tus partidas y consulta estadísticas de Catan.</p>
      </main>
    </div>
  );
};

export default Home;
