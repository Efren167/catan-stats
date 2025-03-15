import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="login-container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="card p-5 shadow">
        <h2 className="mb-4 text-center">Catan Stats</h2>
        <button 
          onClick={handleLogin}
          className="btn btn-danger d-flex align-items-center gap-2"
        >
          <i className="fab fa-google"></i>
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
