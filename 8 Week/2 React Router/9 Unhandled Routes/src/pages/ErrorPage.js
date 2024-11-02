import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate()
  setTimeout(() => {
    // navigate('/'); // redirect to the home page.
    navigate(-1) // redirect to the previous page.
  }, 3000);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      color: '#333',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{ fontSize: '6rem', color: '#dc3545', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
        Oops! The page you are looking for does not exist.
      </p>
      <button style={{
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        onClick={() => window.location.href = '/'}>
        Go Home
      </button>
    </div>
  );
}

export default ErrorPage;
