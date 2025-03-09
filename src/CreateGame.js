import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateGame = () => {
  const [players, setPlayers] = useState(['', '', '', '']); // Por defecto, 4 jugadores

  const handlePlayerChange = (index, value) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = value;
    setPlayers(updatedPlayers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Jugadores:', players);
    alert('Partida creada con los jugadores: ' + players.join(', '));
  };

  return (
    <div>
      {/* Topbar fijo */}
      <header className="bg-danger">
        {/* Icono de flecha para volver al Home */}
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          <i className="fas fa-arrow-left" style={{ fontSize: '1.5rem' }}></i>
        </Link>
        <h1 style={{ fontSize: '1.25rem', margin: 0 }}>Crear Partida</h1>
        <div></div> {/* Espaciador para mantener la alineación */}
      </header>

      {/* Contenido principal */}
      <div className="container" style={{ marginTop: '120px' }}>
        <h2 className="text-center mb-4">Crear Partida</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
          {players.map((player, index) => (
            <div className="mb-3 d-flex align-items-center justify-content-center" key={index}>
              <div className="me-3 d-flex align-items-center" style={{ width: '120px' }}>
                <i className="fas fa-user text-danger me-2"></i>
                <label htmlFor={`player-${index}`} className="form-label m-0">
                  Jugador {index + 1}
                </label>
              </div>
              <input
                type="text"
                id={`player-${index}`}
                className="form-control"
                style={{ width: '150px' }}
                placeholder={`Nombre jugador ${index + 1}`}
                value={player}
                onChange={(e) => handlePlayerChange(index, e.target.value)}
              />
            </div>
          ))}
          <button
            type="submit"
            className="btn btn-primary px-4 mt-3"
          >
            Crear Partida
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGame;
