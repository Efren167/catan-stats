import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Stats = () => {
  // Datos de ejemplo (deberías conectarlo a tu backend o estado)
  const statsData = {
    general: {
      totalGames: 45,
      wins: 23,
      losses: 22,
      winRate: 51.1,
      avgGameDuration: '42 min'
    },
    resources: [
      { name: 'Ladrillo', value: 127 },
      { name: 'Madera', value: 145 },
      { name: 'Trigo', value: 98 },
      { name: 'Piedra', value: 76 },
      { name: 'Oveja', value: 86 }
    ],
    diceStats: [
      { number: 2, count: 15 },
      { number: 3, count: 25 },
      { number: 4, count: 35 },
      { number: 5, count: 38 },
      { number: 6, count: 45 },
      { number: 7, count: 50 },
      { number: 8, count: 52 },
      { number: 9, count: 40 },
      { number: 10, count: 30 },
      { number: 11, count: 20 },
      { number: 12, count: 10 }
    ],
    victoryAnalysis: [
      { type: 'Ciudades', count: 22 },
      { type: 'Poblados', count: 22 },
      { type: 'Mas carreteras', count: 9 },
      { type: 'Cartas de caballero', count: 12 }
    ],
    luckAnalysis: {
      veryUnlucky: 3,
      unlucky: 7,
      average: 18,
      lucky: 12,
      veryLucky: 5
    }
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div>
      {/* Header con flecha para volver atrás */}
      <header className="bg-danger text-white d-flex align-items-center" style={{ height: '60px' }}>
        <Link to="/" className="text-white ms-3" style={{ fontSize: '1.5rem' }}>
          <i className="fas fa-arrow-left"></i>
        </Link>
        <h1 className="m-0 ms-3">Estadísticas</h1>
      </header>

      {/* Contenido principal */}
      <div className="container mt-4">
        <h2 className="text-center mb-4">Estadísticas de Partidas</h2>
        
        {/* Sección de Resumen General */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card text-center bg-light">
              <div className="card-body">
                <h5 className="text-danger">Victorias</h5>
                <h3>{statsData.general.wins}</h3>
                <small>{statsData.general.winRate}% de efectividad</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center bg-light">
              <div className="card-body">
                <h5 className="text-danger">Partidas Jugadas</h5>
                <h3>{statsData.general.totalGames}</h3>
                <small>Promedio: {statsData.general.avgGameDuration}</small>
              </div>
            </div>
          </div>
          {/* Añadir más tarjetas según necesidad */}
        </div>

        {/* Distribución de Recursos */}
        <div className="card mb-4">
          <div className="card-header bg-danger text-white">
            <h5>Distribución de Recursos Obtenidos</h5>
          </div>
          <div className="card-body">
            <PieChart width={400} height={300}>
              <Pie
                data={statsData.resources}
                cx={200}
                cy={150}
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {statsData.resources.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
            <p className="text-muted mt-2">
              Los recursos más comunes influyen en tus estrategias de construcción
            </p>
          </div>
        </div>

        {/* Análisis de Dados */}
        <div className="card mb-4">
          <div className="card-header bg-danger text-white">
            <h5>Frecuencia de Números en Dados</h5>
          </div>
          <div className="card-body">
            <BarChart width={500} height={300} data={statsData.diceStats}>
              <XAxis dataKey="number" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
            <p className="text-muted mt-2">
              El número 7 (robador) aparece en el {Math.round((statsData.diceStats.find(d => d.number === 7)?.count / statsData.diceStats.reduce((a,b) => a + b.count, 0)) * 100)}% de las tiradas
            </p>
          </div>
        </div>

        {/* Análisis de Victoria */}
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-danger text-white">
                <h5>Factores Decisivos en Victorias</h5>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {statsData.victoryAnalysis.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                      {item.type}
                      <span className="badge bg-danger rounded-pill">{item.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Análisis de Suerte */}
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-danger text-white">
                <h5>Distribución de Suerte en Partidas</h5>
              </div>
              <div className="card-body">
                <div className="progress mb-3" style={{ height: '30px' }}>
                  <div className="progress-bar bg-danger" style={{ width: `${(statsData.luckAnalysis.veryUnlucky / statsData.general.totalGames) * 100}%` }}>
                    Muy mala suerte
                  </div>
                </div>
                {/* Repetir para otros niveles de suerte */}
                <small className="text-muted">
                  Basado en la distribución inicial de recursos y tiradas clave
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Comparativa con otros Jugadores */}
        <div className="card mb-4">
          <div className="card-header bg-danger text-white">
            <h5>Comparativa con Promedios Globales</h5>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Métrica</th>
                  <th>Tus Datos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>% Victorias</td>
                  <td>{statsData.general.winRate}%</td>
                </tr>
                {/* Añadir más filas */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
