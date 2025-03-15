import React from "react";
import { Link } from "react-router-dom";

const Stats = () => {
  // Datos de ejemplo (deberías conectarlo a tu backend o estado)
  const statsData = {
    general: {
      totalGames: 45,
      wins: 23,
      losses: 22,
      winRate: 51.1,
    
    },

  };

  return (
    <div>
      {/* Header con flecha para volver atrás */}
      <header
        className="bg-danger text-white d-flex align-items-center"
        style={{ height: "60px" }}
      >
        <Link to="/" className="text-white ms-3" style={{ fontSize: "1.5rem" }}>
          <i className="fas fa-arrow-left"></i>
        </Link>
        <h1 className="m-0 ms-3">Estadísticas</h1>
      </header>

      {/* Contenido principal */}
      <div className="container mt-5 pt-5">
        <h2 className="text-center mb-4">Estadísticas de Partidas</h2>

        {/* Sección de Resumen General */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-4 mb-3">
            <div className="card text-center bg-light h-100">
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title text-danger">Victorias</h5>
                <h3 className="card-text display-4">{statsData.general.wins}</h3>
                <p className="card-text">
                  <small className="text-muted">
                    {statsData.general.winRate}% de efectividad
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card text-center bg-light h-100">
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title text-danger">Derrotas</h5>
                <h3 className="card-text display-4">{statsData.general.losses}</h3>
                <p className="card-text">
                  <small className="text-muted">
                    {((statsData.general.losses / statsData.general.totalGames) * 100).toFixed(1)}% de derrotas
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card text-center bg-light h-100">
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title text-danger">Partidas Jugadas</h5>
                <h3 className="card-text display-4">{statsData.general.totalGames}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
