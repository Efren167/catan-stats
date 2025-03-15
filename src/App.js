import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './Home';
import CreateGame from './CreateGame';
import Stats from './Stats';
import LoginPage from './LoginPage';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './index.css';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
        navigate('/');
      } else {
        setIsAuthenticated(false);
        setUser(null);
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <Routes>
      <Route 
        path="/login" 
        element={
          !isAuthenticated ? 
          <LoginPage /> : 
          <Navigate to="/" />
        } 
      />
      
      <Route 
        path="/" 
        element={
          isAuthenticated ? 
          <Home user={user} onLogout={handleLogout} /> : 
          <Navigate to="/login" />
        } 
      />
      
      <Route 
        path="/crear-partida" 
        element={
          isAuthenticated ? 
          <CreateGame /> : 
          <Navigate to="/login" />
        } 
      />
      
      <Route 
        path="/consultar-estadisticas" 
        element={
          isAuthenticated ? 
          <Stats /> : 
          <Navigate to="/login" />
        } 
      />
    </Routes>
  );
};

export default App;
